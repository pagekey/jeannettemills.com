import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteFooter } from "@/components/ContentPageLayout";
import "./option1.css";

export default function NotFound() {
  return (
    <main>
      <header className="site-header content-header">
        <Link className="wordmark" to="/" aria-label="Jeannette Mills home">
          <span>Jeannette</span>
          <strong>Mills</strong>
        </Link>
        <nav aria-label="Primary navigation">
          <Link to="/about">About</Link>
          <Link to="/work-with-jeannette">Work With Jeannette</Link>
          <Link to="/books">Books</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Link className="header-cta" to="/contact">
          Book a consultation <ArrowRight size={15} />
        </Link>
      </header>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow light">404 / Page not found</p>
            <h1>
              This page is
              <br />
              <em>not here.</em>
            </h1>
            <p className="hero-intro">
              The page you are looking for may have moved, changed, or no longer
              exists.
            </p>
            <Link className="button button-light" to="/">
              Return home <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-footnote">
          <span>Executive leadership. Human impact.</span>
          <ArrowRight size={20} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
