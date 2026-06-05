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
  metadataBase: new URL("https://emicarlosouzateam.vercel.app"),
  title: "Emicarlo Souza Team — Assessoria de Corrida",
  description: "Da primeira passada ao pódio: treine com método, disciplina e um time que corre por você.",
  keywords: ["assessoria de corrida", "corrida", "Emicarlo Souza Team", "treino", "performance", "equipe"],
  authors: [{ name: "Emicarlo Souza Team" }],
  verification: {
    google: "6yLomxH4C2jWOjSMyHCXae5yjfK_mqhmildl3H34qxY",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Emicarlo Souza Team — Assessoria de Corrida",
    description: "Da primeira passada ao pódio: treine com método, disciplina e um time que corre por você.",
    url: "https://emicarlosouzateam.vercel.app",
    siteName: "Emicarlo Souza Team",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emicarlo Souza Team — Assessoria de Corrida",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emicarlo Souza Team — Assessoria de Corrida",
    description: "Da primeira passada ao pódio: treine com método, disciplina e um time que corre por você.",
    images: ["/og-image.jpg"],
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

