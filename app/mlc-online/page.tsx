import type { Metadata } from "next";
import styles from "../mentoria-mlc/page.module.css";

export const metadata: Metadata = {
  title: "Método Lash Campeã Online — Maria Lisboa",
  description: "Conheça o Método Lash Campeã Online com Maria Lisboa.",
  icons: {
    icon: [{ url: "/mlc-favicon.png", type: "image/png" }],
    shortcut: "/mlc-favicon.png",
  },
};

export default function MlcOnlinePage() {
  return (
    <main className={styles.page}>
      <iframe
        className={styles.frame}
        src="https://mentoria-online-mlc-2026.stayai.space/"
        title="Método Lash Campeã Online — Maria Lisboa"
        loading="eager"
        allow="fullscreen"
      />
    </main>
  );
}
