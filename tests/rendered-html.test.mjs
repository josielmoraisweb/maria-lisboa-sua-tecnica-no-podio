import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the links page at the root route", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Maria Lisboa \| Lash Designer &amp; Mentora<\/title>/i);
  assert.match(html, /<iframe[^>]+src="\/link-bio\/index\.html"/i);
  assert.match(html, /title="Maria Lisboa — links"/i);
});

test("makes the complete Sua Técnica no Pódio card navigate in the same tab", async () => {
  const html = await readFile(
    new URL("../public/link-bio/index.html", import.meta.url),
    "utf8",
  );

  const cardLinks = html.match(
    /class="card-link"[^>]+data-link="tecnicaPodio"[^>]+/g,
  );
  assert.equal(cardLinks?.length, 2, "expected one full-card link per responsive layout");
  assert.match(html, /tecnicaPodio:\s*"\/sua-tecnica-no-podio"/);
  assert.match(html, /element\.target = '_top'/);
});

test("includes the configured contact links in every responsive layout", async () => {
  const html = await readFile(
    new URL("../public/link-bio/index.html", import.meta.url),
    "utf8",
  );

  for (const key of [
    "mentoriaOnline",
    "mentoriaAoVivo",
    "cursoIniciante",
    "palestras",
    "studio",
  ]) {
    const occurrences = html.match(new RegExp(`data-link="${key}"`, "g"));
    assert.equal(occurrences?.length, 2, `expected ${key} in mobile and desktop layouts`);
    assert.match(html, new RegExp(`${key}:\\s*"https://`));
  }
});

test("renders the landing page at its new route", async () => {
  const response = await render("/sua-tecnica-no-podio");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Sua Técnica no Pódio \| Maria Lisboa<\/title>/i);
  assert.match(html, /Sua Técnica no Pódio com Maria Lisboa/i);
  assert.match(html, /aria-label="Chamar no WhatsApp"/i);
});
