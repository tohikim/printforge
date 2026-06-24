import Nav from "./components/Nav";
import "./globals.css";
import { Montserrat_Alternates, Albert_Sans } from "next/font/google";
import { RootLayoutProps } from "./types";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const monsterrat = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-monsterrat-alternates",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${albertSans.className} ${monsterrat.variable}`}
      >
        <div className="h-screen">
          <header>
            <Nav />
          </header>
          {children}
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
