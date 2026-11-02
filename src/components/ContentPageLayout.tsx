import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function SiteHeader() {
  return (
    <header className="site-header content-header">
      <Link className="wordmark" to="/">
        <span>Jeannette</span>
        <strong>Mills</strong>
      </Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/work-with-jeannette">Work With Jeannette</Link>
        <Link to="/books">Books</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Link className="header-cta" to="/contact">
        Book a consultation <ArrowRight size={15} />
      </Link>
    </header>
  );
}

function PageFooter() {
  return (
    <footer>
      <div className="footer-top">
        <Link className="wordmark" to="/">
          <span>Jeannette</span>
          <strong>Mills</strong>
        </Link>
        <p>
          Lead boldly. Develop people.
          <br />
          Build performance that lasts.
        </p>
      </div>
      <div className="footer-links">
        <Link to="/contact">Get in touch</Link>
        <Link to="/about">About Jeannette</Link>
        <Link to="/work-with-jeannette">Work with Jeannette</Link>
        <Link to="/">
          Option 1 home <ArrowRight size={15} />
        </Link>
      </div>
      <div className="footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} Jeannette Mills. All rights
          reserved.
        </span>
        <span>
          Website by <a href="https://pagekey.io">PageKey</a>
        </span>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  image,
  alt,
}: {
  eyebrow: string;
  title: React.ReactNode;
  image: string;
  alt: string;
}) {
  return (
    <section className="page-intro">
      <div>
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <img src={image} alt={alt} />
    </section>
  );
}

export function ContentPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <PageFooter />
    </>
  );
}
