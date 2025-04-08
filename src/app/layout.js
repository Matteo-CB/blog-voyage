import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Idea ✈️",
  description:
    "Découvrez des destinations uniques, des conseils de voyage, des itinéraires détaillés et des astuces pour voyager malin. Que vous soyez un aventurier en quête d'expériences insolites ou un globe-trotter passionné, notre blog vous guide à travers les plus beaux paysages du monde. 🌎🏕️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
      </body>
    </html>
  );
}
