export async function getServerSideProps({ res }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(`User-agent: *\nAllow: /\n${base ? `\nSitemap: ${base}/sitemap.xml\n` : ''}`);
  res.end();
  return { props: {} };
}
export default function Robots() { return null; }
