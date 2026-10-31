import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-board">
        <header className="options-header">
          <span className="options-brand">PageKey</span>
          <span>Jeannette Mills website</span>
        </header>
        <div className="not-found-content">
          <p className="options-eyebrow">404 / Lost page</p>
          <h1>That page is not part of the presentation.</h1>
          <p>Return to the project overview to choose a direction.</p>
          <Link className="options-action" to="/">
            <ArrowLeft size={16} /> Back to options
          </Link>
        </div>
        <footer className="options-footer">
          <span>PageKey</span>
          <span>Website presentation</span>
        </footer>
      </section>
    </main>
  );
}
