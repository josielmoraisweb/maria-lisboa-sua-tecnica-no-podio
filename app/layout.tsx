import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maria Lisboa | Lash Designer & Mentora",
  description: "Conheça as mentorias, cursos, palestras e serviços de Maria Lisboa.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
