import { SITE_URL } from '../src/site';
export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  res.end();
  return { props: {} };
}
export default function Robots() { return null; }
