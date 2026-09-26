import Header from './Header';
import Footer from './Footer';
export default function Layout({ children }) {
  return <><a className="skip" href="#main">본문으로 이동</a><Header /><main id="main">{children}</main><Footer /></>;
}
