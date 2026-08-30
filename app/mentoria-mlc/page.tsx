import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mentoria MLC 2026 | Método Lash Campeã — Maria Lisboa",
  description: "Mentoria para campeonato Método Lash Campeã com Maria Lisboa.",
};

export default function MentoriaMlcPage() {
  return (
    <main className={styles.page}>
      <iframe
        className={styles.frame}
        src="/mentoria-mlc-site/index.html"
        title="Mentoria MLC 2026 — Maria Lisboa"
        loading="eager"
      />
    </main>
  );
}
