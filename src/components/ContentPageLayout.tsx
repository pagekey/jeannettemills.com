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

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-top">
        <Link className="wordmark" to="/">
          <span>Jeannette</span>
          <strong>Mills</strong>
        </Link>
        <div className="footer-credentials">
          <p>Executive Leadership Strategist</p>
          <p>
            Author of <em>Tomme’s Girl</em>, Creator of LEAD BOLDLY™, Speaker
            &amp; Trainer
          </p>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-services">
          <span>Leadership Development</span>
          <span>Executive Coaching</span>
          <span>Corporate Training</span>
          <span>Keynotes</span>
          <span>Books &amp; Leadership Tools</span>
        </div>
        <Link className="button button-dark" to="/contact">
          Book a consultation <ArrowRight size={15} />
        </Link>
      </div>
      <div className="footer-bottom">
        <span>
          <em>Tomme’s Girl</em> | LEAD BOLDLY™ Leadership Workbook
        </span>
        <span>&copy; Jeannette Mills. All Rights Reserved.</span>
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
      <SiteFooter />
    </>
  );
}
