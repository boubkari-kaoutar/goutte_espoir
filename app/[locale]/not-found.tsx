import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <div className="text-8xl font-black gradient-text-green mb-4">404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Page introuvable</h1>
      <p className="text-gray-500 mb-8">Cette page n&apos;existe pas ou a été déplacée.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-2xl bg-[#26ab52] text-white font-semibold hover:shadow-glow-green hover:scale-105 transition-all duration-300"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
