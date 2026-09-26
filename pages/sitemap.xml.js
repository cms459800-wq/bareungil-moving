import { SITE_URL } from '../src/site';
const paths = ['/', '/guide', '/checklist', '/about'];
export async function getServerSideProps({ res }) {
  const urls = paths.map(path => `  <url><loc>${new URL(path, `${SITE_URL}/`).toString()}</loc></url>`).join('\n');
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.write(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`);
  res.end();
  return { props: {} };
}
export default function Sitemap() { return null; }
