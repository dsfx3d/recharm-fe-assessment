import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Inter} from "next/font/google";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={`${sans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
