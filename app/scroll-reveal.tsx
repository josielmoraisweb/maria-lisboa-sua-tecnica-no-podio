const revealScript = `
(() => {
  const init = () => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll("[data-reveal]"),
    );

    if (!elements.length) return;

    root.classList.add("reveal-enabled");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
`;

export function ScrollReveal() {
  return <script dangerouslySetInnerHTML={{ __html: revealScript }} />;
}
