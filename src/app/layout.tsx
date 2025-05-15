import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import {
  Open_Sans,
  Inter,
  Oooh_Baby,
  Sofia_Sans_Condensed,
  Manrope,
  Poppins,
  Cormorant,
  Playfair_Display,
  Marcellus_SC,
  Montserrat,
  Oswald,
} from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "MARHABA",
  description: "MARHABA",
  icons: [{ rel: "icon", url: "/images/home/hero/logo.png", sizes: "11x11" }],
};

// const open_sans = Open_Sans({
//   subsets: ["latin"],
//   variable: "--font-open_sans",
//   weight: ["400", "500", "600", "700", "800"],
// });

// const oooh_Baby = Oooh_Baby({
//   subsets: ["latin"],
//   variable: "--font-oooh_Baby",
//   weight: ["400"],
// });

const sofia_sans = Sofia_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-sofia_sans",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

const marcellus = Marcellus_SC({
  subsets: ["latin"],
  variable: "--font-marcellus",
  weight: ["400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-inter antialiased",
          // open_sans.variable,
          // oooh_Baby.variable,
          sofia_sans.variable,
          manrope.variable,
          poppins.variable,
          marcellus.variable,
          playfair.variable,
          cormorant.variable,
          inter.variable,
          montserrat.variable,
          oswald.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
