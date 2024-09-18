import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const roboto = Lato({ subsets: ["latin"], weight: ["100","300", "400", "700", "900"] });

export const metadata = {
  title: "Data & Insight Partners",
  description: "A data solutions company dedicated to empowering businesses to thrive in the digital age",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
