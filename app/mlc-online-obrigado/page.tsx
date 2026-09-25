import type { Metadata } from "next";
import styles from "../mentoria-mlc/page.module.css";

export const metadata: Metadata = {
  title: "Parabéns, campeã! — Método Lash Campeã",
  description: "Seus próximos passos no Método Lash Campeã com Maria Lisboa.",
};

export default function MlcOnlineObrigadoPage() {
  return (
    <main className={styles.page}>
      <iframe
        className={styles.frame}
        src="https://mentoria-online-mlc-2026.stayai.space/mlc-online-obrigado/"
        title="Página de obrigado — Método Lash Campeã"
        loading="eager"
        allow="autoplay; encrypted-media; fullscreen"
      />
    </main>
  );
}
