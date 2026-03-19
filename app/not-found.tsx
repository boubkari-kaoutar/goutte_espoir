import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="fr">
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            textAlign: 'center',
            padding: '1rem',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div style={{ fontSize: '6rem', fontWeight: 900, color: '#26ab52', lineHeight: 1 }}>
            404
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '1rem', color: '#111' }}>
            Page introuvable
          </h1>
          <p style={{ color: '#6b7280', marginTop: '0.5rem', marginBottom: '2rem' }}>
            Cette page n&apos;existe pas ou a été déplacée.
          </p>
          <Link
            href="/fr"
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '1rem',
              background: '#26ab52',
              color: 'white',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </body>
    </html>
  );
}
