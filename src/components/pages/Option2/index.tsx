import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import executivePortrait from "@/assets/jeannette-exec-portrait-2.jpg";
import gardenPortrait from "@/assets/jeannette-garden-2.jpg";
import blackAndWhitePortrait from "@/assets/jeannette-portrait-blackandwhite.jpg";
import tommesGirl from "@/assets/tommes-girl-cover.png";
import leadBoldly from "@/assets/lead-boldly-cover.png";
import "./option2.css";

const consultationUrl = "/option-2/contact";

export default function OptionTwo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="option-two" id="top">
      <header className="o2-header">
        <Link
          className="o2-wordmark"
          to="/option-2"
          aria-label="Jeannette Mills home"
        >
          Jeannette Mills
        </Link>
        <button
          className="o2-menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={22} />}
        </button>
        <nav
          className={menuOpen ? "o2-nav open" : "o2-nav"}
          aria-label="Primary navigation"
        >
          <Link to="/option-2/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/option-2/work-with-jeannette" onClick={closeMenu}>
            Work with Jeannette
          </Link>
          <Link to="/option-2/books" onClick={closeMenu}>
            Books
          </Link>
          <Link to="/option-2/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
        <a className="o2-header-link" href={consultationUrl}>
          Book a consultation
        </a>
      </header>

      <section className="o2-hero">
        <div className="o2-hero-copy">
          <p className="o2-kicker">Executive leadership and development</p>
          <h1>
            Lead with clarity.
            <br />
            <em>Leave a lasting mark.</em>
          </h1>
          <p>
            Thoughtful leadership development for people and organizations ready
            to grow with purpose.
          </p>
          <a className="o2-button" href={consultationUrl}>
            Begin a conversation <ArrowRight size={16} />
          </a>
        </div>
        <div className="o2-hero-image">
          <img src={executivePortrait} alt="Jeannette Mills" />
        </div>
      </section>

      <section className="o2-intro" id="about">
        <p className="o2-kicker">A considered approach to leadership</p>
        <div className="o2-intro-grid">
          <h2>
            Leadership is not simply a position.
            <br />
            <em>It is an enduring influence.</em>
          </h2>
          <div>
            <p>
              How you influence people, navigate difficult moments, make
              decisions, and build trust shapes what an organization can become.
            </p>
            <p>
              Jeannette Mills brings decades of executive leadership experience,
              organizational insight, and lived wisdom to leaders ready to
              strengthen how they lead people and performance.
            </p>
            <Link className="o2-text-link" to="/option-2/work-with-jeannette">
              Learn about Jeannette's work <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="o2-profile">
        <div className="o2-profile-image">
          <img src={gardenPortrait} alt="Jeannette Mills" />
        </div>
        <div className="o2-profile-copy">
          <p className="o2-kicker">Experience with perspective</p>
          <h2>
            Wisdom earned
            <br />
            in the real world.
          </h2>
          <p>
            Jeannette has led within complex organizations where decisions,
            relationships, and results matter. Her career includes senior
            executive roles at Tennessee Valley Authority, board service,
            mentoring, and the development of emerging and established leaders.
          </p>
          <p>
            Her work is grounded in a simple principle: leadership is not only
            about what you accomplish; it is also about your enduring impact on
            people throughout the journey.
          </p>
        </div>
      </section>

      <section className="o2-services" id="work">
        <div className="o2-services-heading">
          <p className="o2-kicker">Ways to work together</p>
          <h2>
            For the work that
            <br />
            <em>matters most.</em>
          </h2>
        </div>
        <div className="o2-service-list">
          <article>
            <h3>Leadership Training</h3>
            <p>
              Customized leadership development experiences with practical
              strategies leaders can put to work immediately.
            </p>
            <a href={consultationUrl}>
              Explore training <ArrowRight size={15} />
            </a>
          </article>
          <article>
            <h3>Keynotes & Speaking</h3>
            <p>
              Insightful, candid conversations about leadership, resilience,
              professional growth, and navigating change.
            </p>
            <a href={consultationUrl}>
              Explore speaking <ArrowRight size={15} />
            </a>
          </article>
          <article>
            <h3>Executive Coaching</h3>
            <p>
              Thoughtful support for leaders who want to deepen their practice
              and expand their influence.
            </p>
            <a href={consultationUrl}>
              Start a conversation <ArrowRight size={15} />
            </a>
          </article>
        </div>
      </section>

      <section className="o2-books" id="books">
        <div className="o2-books-copy">
          <p className="o2-kicker">The story behind the work</p>
          <h2>
            Lessons made
            <br />
            <em>personal.</em>
          </h2>
          <p>
            From humble roots to the executive suite, <em>Tomme's Girl</em>{" "}
            tells the story behind the leader. The LEAD BOLDLY(TM) Leadership
            Workbook carries those lessons into reflection and action.
          </p>
          <a className="o2-text-link" href={consultationUrl}>
            Discover the collection <ArrowRight size={15} />
          </a>
        </div>
        <div className="o2-book-covers">
          <img src={tommesGirl} alt="Tomme's Girl book cover" />
          <img src={leadBoldly} alt="LEAD BOLDLY Leadership Workbook cover" />
        </div>
      </section>

      <section className="o2-quote">
        <img src={blackAndWhitePortrait} alt="Jeannette Mills" />
        <blockquote>
          “Stronger leadership creates stronger organizations.”
        </blockquote>
      </section>

      <section className="o2-contact" id="contact">
        <p className="o2-kicker">An invitation</p>
        <h2>
          Build the kind of leadership
          <br />
          <em>that lasts.</em>
        </h2>
        <a className="o2-button" href={consultationUrl}>
          Book a consultation <ArrowRight size={16} />
        </a>
      </section>

      <footer className="o2-footer">
        <Link className="o2-wordmark" to="/option-2">
          Jeannette Mills
        </Link>
        <div>
          <a href="mailto:hello@jeannettemills.com">hello@jeannettemills.com</a>
          <a href="#top">Back to top</a>
        </div>
        <small>© 2026 Jeannette Mills. All rights reserved.</small>
      </footer>
    </main>
  );
}
