import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PokemonProvider } from "@/context/PokemonContext";

export const metadata = {
  title: "Mon Site",
  description: "Description de mon site",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-900">
        <PokemonProvider>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
          <Footer />
        </PokemonProvider>
      </body>
    </html>
  );
}
