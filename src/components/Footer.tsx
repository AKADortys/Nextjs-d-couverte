import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center p-4 bg-gray-200 mt-8">
      <p>© {new Date().getFullYear()} Mon Site - Tous droits réservés.</p>
      <Link className="text-gray-600 hover:text-gray-900" href="/">
        Retour à l'accueil
      </Link>
    </footer>
  );
}
