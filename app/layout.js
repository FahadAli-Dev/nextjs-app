import "./globals.css";
import { Roboto } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: ["--font-roboto"],
});

const nanum_gothic = Nanum_Gothic({
  subsets: ["latin"],
  variable: ["--font-nanum-gothic"],
  weight: ["400", "700", "800"],
});

export const metadata = {
  title: {
    default: "My first Nextjs App",
    template: "%s | Next.js App ",
  },
  description: "This is my second Next.js App",
  authors: [
    { name: "fahad ali" },
    { name: "sohail Malik", url: "www.shohailmalik.com" },
  ],
  keywords: ["nextjs", "react", "frontedn"],
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Next js",
    discription: "Next.js first app",
    url: "https://yourdomain.com",
    siteName: "Next.js APP",
    images: {
      url: "og-img.png",
      width: 1200,
      hight: 630,
      alt: nextjs - img,
    },
    twitter: {
      card: "summary-larg-img",
      title: "Next.js App",
      description: "This is my first Next.js app",
      creator: "@fahadali",
      images: ["/og-img.png"],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${nanum_gothic.variable}`}>
        {children}
      </body>
    </html>
  );
}
