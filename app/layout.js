import "./globals.css";
import { Gaegu, Inter, Poppins } from "next/font/google";

const gaegu = Gaegu({
  subsets: ["latin"],
  weight:["300", "400", "700"],
  variable: "--font-gaegu",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "🍅 Toma-Do! – Get Things Done, One Tomato at a Time",
  description: "@rainydeiy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gaegu.variable} ${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
