import type { Metadata } from "next";
import styles from "./link-bio-frame.module.css";

export const metadata: Metadata = {
  title: "Maria Lisboa | Lash Designer & Mentora",
  description: "Conheça as mentorias, cursos, palestras e serviços de Maria Lisboa.",
};

export default function LinksPage() {
  return (
    <main className={styles.page}>
      <iframe
        className={styles.frame}
        src="/link-bio/index.html"
        title="Maria Lisboa — links"
        loading="eager"
      />
    </main>
  );
}
