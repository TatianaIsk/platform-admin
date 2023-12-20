import { Jost } from "next/font/google";
import Furore from "next/font/local";
import Circe from "next/font/local";

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const furore = Furore({
  src: "./../next/font/local/Furore/Furore.woff",
  variable: "--font-furore",
  display: "swap",
});

export const circe = Circe({
  src: [
    {
      path: "./../next/font/local/Circe/Circe.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../next/font/local/Circe/Circe-Bold.woff",
      weight: "700",
      style: "bold",
    },
    {
      path: "./../next/font/local/Circe/Circe-ExtraBold.woff",
      weight: "800",
      style: "extraBold",
    },
  ],
  variable: "--font-circe",
});
