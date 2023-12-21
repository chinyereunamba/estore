import "./globals.css";
import { Inter, Lato, Playfair_Display } from "next/font/google";
import Nav from "@/components/layout/nav/Nav";
import Footer from "@/components/layout/footer/Footer";
const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ['latin'], weight:['700', '400'] })
const play = Playfair_Display({subsets:['latin']})

export const metadata = {
  title: "Digital Harbor",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}