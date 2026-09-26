const paths = ['/', '/guide', '/checklist', '/about'];
export async function getServerSideProps({ res }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  if (!base) { res.statusCode = 503; res.end('사이트 주소가 아직 설정되지 않았습니다.'); return { props: {} }; }
  const urls = paths.map(path => `  <url><loc>${new URL(path, `${base}/`).toString()}</loc></url>`).join('\n');
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.write(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`);
  res.end();
  return { props: {} };
}
export default function Sitemap() { return null; }
