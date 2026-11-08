import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link className="wordmark" to="/">
        <span>Jeannette</span>
        <strong>Mills</strong>
      </Link>
      <button
        className="menu-button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={25} />}
      </button>
      <nav className={menuOpen ? "open" : ""} aria-label="Primary navigation">
        <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/work-with-jeannette" onClick={closeMenu}>Work With Jeannette</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/books" onClick={closeMenu}>Books</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/contact" onClick={closeMenu}>Contact</NavLink>
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
            Author of <em>Tomme’s Girl</em> &bull; Creator of LEAD BOLDLY™ &bull; Speaker
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
        <span className="footer-legal">
          <span className="footer-credit">
            Website by{" "}
            <a href="https://pagekey.io" target="_blank" rel="noreferrer">
              PageKey
            </a>
          </span>
          &copy; Jeannette Mills. All Rights Reserved.
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
  imageClassName,
}: {
  eyebrow: string;
  title: React.ReactNode;
  image: string;
  alt: string;
  imageClassName?: string;
}) {
  return (
    <section className="page-intro">
      <div>
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <img className={imageClassName} src={image} alt={alt} />
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
