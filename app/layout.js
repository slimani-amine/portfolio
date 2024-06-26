import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { lastUpdate, pageTitle } from "@/portfolio";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: pageTitle,
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
        <title>{metadata.title}</title>
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
          <div className=" h-full text-end mx-8 xl:mt-24">
            Last update : {lastUpdate}
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
