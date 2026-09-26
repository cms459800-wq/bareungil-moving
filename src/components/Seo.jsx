import Head from 'next/head';
const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
export default function Seo({ title, description, path = '/' }) {
  const url = base ? new URL(path, `${base}/`).toString() : null;
  return <Head><title>{title}</title><meta name="description" content={description} /><meta name="robots" content="index,follow" /><meta property="og:type" content="website" /><meta property="og:locale" content="ko_KR" /><meta property="og:title" content={title} /><meta property="og:description" content={description} />{url && <><link rel="canonical" href={url} /><meta property="og:url" content={url} /></>}</Head>;
}
