import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./options.css";

export default function Options() {
  return (
    <main className="options-page">
      <section className="options-board">
        <header className="options-header">
          <span className="options-brand">PageKey</span>
          <span>Website presentation / 01</span>
        </header>
        <div className="options-intro">
          <p className="options-eyebrow">Jeannette Mills</p>
          <h1>
            Two directions.
            <br />
            One strong story.
          </h1>
          <p>
            Each route below presents a distinct visual point of view for your
            new website.
          </p>
        </div>
        <div className="options-list">
          <article className="option-card">
            <span className="option-number">01</span>
            <div>
              <h2>Executive editorial</h2>
              <p>
                Deep green, high-contrast backgrounds, large editorial
                typography, strong geometric layouts and section numbers.
                Prominent portrait photography for a confident,
                corporate-executive feel.
              </p>
            </div>
            <Link className="options-action" to="/option-1">
              View Option 1 <ArrowRight size={16} />
            </Link>
          </article>
          <article className="option-card">
            <span className="option-number">02</span>
            <div>
              <h2>Quiet luxury</h2>
              <p>
                Warm white, charcoal, restrained serif typography, generous
                whitespace, subtle dividers, and beautiful portrait photography.
                Thoughtful, established, confident.
              </p>
            </div>
            <Link className="options-action" to="/option-2">
              View Option 2 <ArrowRight size={16} />
            </Link>
          </article>
        </div>
        <footer className="options-footer">
          <span>Prepared for Jeannette Mills</span>
          <span>Steve G. / PageKey</span>
        </footer>
      </section>
    </main>
  );
}
