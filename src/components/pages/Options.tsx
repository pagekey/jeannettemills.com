import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Options() {
  return (
    <main className="options-page">
      <div className="options-content">
        <p className="options-brand">PageKey</p>
        <p className="eyebrow">Jeannette Mills website</p>
        <h1>Hello, Jeannette.</h1>
        <p>We've created a few potential options for your site. Take a look!</p>
        <Link className="button button-dark" to="/option-1">
          View Option 1 <ArrowRight size={18} />
        </Link>
        <p className="options-signoff">Warm regards,<br /><strong>PageKey</strong></p>
      </div>
    </main>
  );
}
