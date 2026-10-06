import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import { site } from "@/data/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Nav />
        <main>
          {children}
          <Contact />
        </main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.location}</p>
        </footer>
      </body>
    </html>
  );
}
