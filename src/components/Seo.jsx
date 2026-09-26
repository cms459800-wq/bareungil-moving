import Head from 'next/head';
import { SITE_URL } from '../site';
export default function Seo({ title, description, path = '/' }) {
  const url = new URL(path, `${SITE_URL}/`).toString();
  return <Head><title>{title}</title><meta name="description" content={description} /><meta name="robots" content="index,follow" /><meta property="og:type" content="website" /><meta property="og:locale" content="ko_KR" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><link rel="canonical" href={url} /><meta property="og:url" content={url} /></Head>;
}
