import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hardware Guide",
  description: "Encontre o PC ideal para o seu uso!",
  keywords: "Hardware Guide, Guia de Hardware, HardwareGuide, Hardware, Como montar um PC, Computador para rodar jogos, PC pra jogar, PC pra edição de video, PC pra modegame 3D, PC Gamer",
  creator: "Jhonatan Teixeira Rios",
  applicationName: "Hardware Guide",
  authors: [{ name: "Jhonatan Teixeira Rios", url: "https://www.jhonatandevrios.site/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-VNHDQVBPRJ" />
    </html>
  );
}
