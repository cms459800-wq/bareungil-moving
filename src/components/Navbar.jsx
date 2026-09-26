import Link from 'next/link';
export default function Navbar() { return <div className="header-inner"><Link className="brand" href="/">바른길 <span>이사</span></Link><nav aria-label="주요 메뉴"><Link href="/">홈</Link><Link href="/guide">이사 준비</Link><Link href="/checklist">점검표</Link><Link href="/about">사이트 소개</Link></nav></div>; }
