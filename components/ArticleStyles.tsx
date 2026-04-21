'use client';

export default function ArticleStyles({ color }: { color: string }) {
  return (
    <style suppressHydrationWarning>{`
      .article-body { color: #1a202c; line-height: 1.9; font-size: 1.125rem; font-family: 'Inter', system-ui, sans-serif; letter-spacing: -0.01em; }
      
      /* Lettrine (Drop Cap) luxueuse pour le premier paragraphe */
      .article-body .lead-paragraph::first-letter {
        font-size: 4.5rem;
        float: left;
        line-height: 0.8;
        padding-right: 0.75rem;
        padding-top: 0.25rem;
        color: ${color};
        font-weight: 900;
        font-family: ui-sans-serif, system-ui, sans-serif;
      }
      .article-body .lead-paragraph { 
        font-size: 1.25rem; 
        line-height: 1.8; 
        color: #2d3748; 
        margin-bottom: 2.5rem; 
        font-weight: 400; 
      }
      
      /* Titres de section premium */
      .article-body h2 { 
        font-size: 1.875rem; 
        font-weight: 900; 
        color: #111827; 
        margin-top: 3.5rem; 
        margin-bottom: 1.5rem; 
        letter-spacing: -0.03em;
        position: relative;
        display: inline-block;
      }
      .article-body h2::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 3rem;
        height: 4px;
        background: ${color};
        border-radius: 2px;
      }
      [dir="rtl"] .article-body h2::after { left: auto; right: 0; }
      
      /* Paragraphes normaux */
      .article-body p { 
        margin-bottom: 1.75rem; 
        color: #4a5568; 
      }
      
      /* Blockquotes Editorial */
      .article-body blockquote { 
        position: relative;
        padding: 2.5rem 2.5rem 2.5rem 4rem; 
        margin: 3rem 0; 
        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); 
        border-radius: 1rem; 
        font-style: italic; 
        color: #1e293b;
        font-size: 1.35rem;
        line-height: 1.6;
        box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        border: 1px solid #e2e8f0;
        border-left: 6px solid ${color};
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .article-body blockquote:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.06);
      }
      /* Quote icon */
      .article-body blockquote::before {
        content: '"';
        position: absolute;
        top: -10px;
        left: 1.5rem;
        font-size: 5rem;
        font-family: Georgia, serif;
        color: ${color};
        opacity: 0.2;
        line-height: 1;
      }
      .article-body blockquote cite { 
        display: flex;
        align-items: center;
        margin-top: 1.5rem; 
        font-size: 0.9rem; 
        font-style: normal; 
        color: #64748b; 
        font-weight: 700; 
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .article-body blockquote cite::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 2px;
        background: ${color};
        margin-right: 10px;
      }

      /* Conclusion Box */
      .article-body .conclusion { 
        font-size: 1.1rem; 
        padding: 2rem; 
        background: ${color}0a; /* transparent color */
        border: 1px solid ${color}33;
        border-radius: 1rem;
        margin-top: 4rem; 
        font-weight: 500; 
        color: #1e293b; 
        position: relative;
        overflow: hidden;
      }
      .article-body .conclusion::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        background: ${color};
      }
      
      .article-body strong { font-weight: 800; color: #0f172a; }
      
      /* RTL Overrides for Arabic */
      [dir="rtl"] .article-body .lead-paragraph::first-letter {
        float: right;
        padding-right: 0;
        padding-left: 0.75rem;
      }
      [dir="rtl"] .article-body blockquote { 
        padding: 2.5rem 4rem 2.5rem 2.5rem; 
        border-left: 1px solid #e2e8f0; 
        border-right: 6px solid ${color}; 
      }
      [dir="rtl"] .article-body blockquote::before {
        left: auto;
        right: 1.5rem;
      }
      [dir="rtl"] .article-body blockquote cite::before {
        margin-right: 0;
        margin-left: 10px;
      }
      [dir="rtl"] .article-body .conclusion::before {
        left: auto;
        right: 0;
      }
    `}</style>
  );
}
