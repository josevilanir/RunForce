import type { Metadata } from "next";
import { Rajdhani, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./landing.css";

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RunForce Team — Assessoria de Corrida",
  description:
    "Treinos inteligentes, estratégia e um time para te impulsionar a ir além. Não é só correr. É evoluir todos os dias.",
  keywords: ["assessoria de corrida", "corrida", "RunForce", "treino", "performance", "equipe"],
  authors: [{ name: "RunForce Team" }],
  openGraph: {
    title: "RunForce Team — Assessoria de Corrida",
    description: "Não é só correr. É evoluir todos os dias.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "RunForce Team",
    description: "Não é só correr. É evoluir todos os dias.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${rajdhani.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}

