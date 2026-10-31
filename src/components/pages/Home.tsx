import { ArrowDownRight, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import executivePortrait from "@/assets/jeannette-exec-portrait-1.jpg";
import baltimorePolytech from "@/assets/jeannette-baltimore-polytech.jpg";
import gardenPortrait from "@/assets/jeannette-garden.jpg";
import tommesGirlMockup from "@/assets/tommes-girl-mockup.png";
import leadBoldlyMockup from "@/assets/lead-boldly-mockup.png";

const consultationUrl = "/contact";

function ArrowLink({
  children,
  href = "/contact",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a className="arrow-link" href={href}>
      {children} <ArrowRight aria-hidden="true" size={17} strokeWidth={1.7} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" to="/option-1" aria-label="Jeannette Mills home">
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
          <a href="/about" onClick={closeMenu}>
            About
          </a>
          <a href="/work-with-jeannette" onClick={closeMenu}>
            Work With Jeannette
          </a>
          <a href="/books" onClick={closeMenu}>
            Books
          </a>
          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
        <a className="header-cta" href={consultationUrl}>
          Book a consultation <ArrowRight size={15} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow light">Leadership is a practice</p>
            <h1>
              Lead boldly.
              <br />
              <em>Build what lasts.</em>
            </h1>
            <p className="hero-intro">
              Develop people, strengthen performance, and create a leadership
              culture that endures.
            </p>
            <a className="button button-light" href={consultationUrl}>
              Start the conversation <ArrowRight size={18} />
            </a>
          </div>
          <div className="hero-image">
            <img src={executivePortrait} alt="Jeannette Mills" />
          </div>
        </div>
        <div className="hero-footnote">
          <span>Executive leadership. Human impact.</span>
          <ArrowDownRight size={20} />
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="section-label">
          <span>01</span> The work
        </div>
        <div className="intro-content">
          <div className="intro-image">
          <img src={gardenPortrait} alt="Jeannette Mills" />
          </div>
          <p className="eyebrow">Leadership is personal</p>
          <h2>
            Real leadership is measured in the people you{" "}
            <em>leave stronger.</em>
          </h2>
          <div className="body-copy">
            <p>
              Leadership is not simply about holding a position. It is about how
              you influence people, navigate difficult moments, make decisions,
              build trust, and create environments where others can succeed.
            </p>
            <p>
              Jeannette Mills brings decades of executive leadership experience,
              organizational insight, and lived wisdom to leaders and
              organizations ready to strengthen how they lead people and
              performance.
            </p>
            <a className="button button-dark" href={consultationUrl}>
              Book a consultation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="experience section">
        <div className="experience-image">
          <img src={baltimorePolytech} alt="Jeannette Mills at Baltimore Polytechnic Institute" />
        </div>
        <div className="experience-copy">
          <p className="eyebrow">A career of consequence</p>
          <h2>
            From executive experience to <em>leadership impact.</em>
          </h2>
          <p>
            Jeannette Mills has spent her career leading within complex
            organizations where decisions, relationships, and results{" "}
            <strong>matter.</strong>
          </p>
          <p>
            Her leadership journey included serving in senior executive roles at
            Tennessee Valley Authority, first as Executive Vice President and
            Chief External Relations Officer and ultimately as Executive Vice
            President and Chief Administrative Officer.
          </p>
          <p>
            Today, she brings those lessons directly to organizations,
            leadership teams, and professionals who understand that stronger
            leadership creates stronger organizations.
          </p>
          <ArrowLink href="/work-with-jeannette">Work with Jeannette</ArrowLink>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="services-heading">
          <div className="section-label">
            <span>02</span> How we work together
          </div>
          <div>
            <p className="eyebrow">Built for the real world</p>
            <h2>
              Practical wisdom for
              <br />
              <em>the moments that matter.</em>
            </h2>
          </div>
        </div>
        <p className="services-intro">
          Leadership becomes most important when circumstances become difficult.
          Jeannette's programs help leaders examine how they show up, how they
          influence others, and how their everyday behaviors affect culture and
          performance.
        </p>
        <div className="service-list">
          <article>
            <span className="service-number">01</span>
            <h3>
              Leadership
              <br />
              Training
            </h3>
            <p>
              Customized development experiences for organizations, leadership
              teams, and professionals who want practical strategies they can
              immediately apply.
            </p>
            <ArrowLink>Explore training & coaching</ArrowLink>
          </article>
          <article>
            <span className="service-number">02</span>
            <h3>
              Keynotes &<br />
              Speaking
            </h3>
            <p>
              Insightful, candid, and practical conversations about leadership,
              resilience, professional growth, navigating change, and
              exceptional leaders.
            </p>
            <ArrowLink>Explore speaking</ArrowLink>
          </article>
          <article>
            <span className="service-number">03</span>
            <h3>
              Books &<br />
              Leadership Tools
            </h3>
            <p>
              Stories, reflection, and application designed to help individuals
              and organizations turn leadership insight into action.
            </p>
            <ArrowLink href="/books">Explore products</ArrowLink>
          </article>
        </div>
      </section>

      <section className="books section" id="books">
        <div className="book-visuals">
          <img className="book-mockup tomme-mockup" src={tommesGirlMockup} alt="Tomme's Girl by Jeannette Mills" />
          <img className="book-mockup workbook-mockup" src={leadBoldlyMockup} alt="LEAD BOLDLY Leadership Workbook by Jeannette Mills" />
        </div>
        <div className="books-copy">
          <p className="eyebrow">The story behind the work</p>
          <h2>
            From <em>Tomme's Girl</em> to leading boldly.
          </h2>
          <p>
            Long before Jeannette Mills became a senior executive, she was
            Tomme's girl. Her story began with humble roots and grew into a
            career marked by achievement, difficult decisions, persistence, and
            lessons that could never have been learned from a textbook alone.
          </p>
          <p>
            <em>Tomme's Girl</em> tells the story behind the leader. The{" "}
            <strong>LEAD BOLDLY</strong>
            <sup>TM</sup> Leadership Workbook turns those lessons into practical
            principles leaders can examine and apply.
          </p>
          <p className="books-statement">
            Together, they create more than a memoir. They create a leadership
            development experience.
          </p>
          <ArrowLink href="/books">Discover the collection</ArrowLink>
        </div>
      </section>

      <section className="organization section">
        <div className="organization-top">
          <p className="eyebrow">For organizations ready to grow</p>
          <span className="round-mark">JM</span>
        </div>
        <h2>
          Bring <em>Lead Boldly</em>
          <sup>TM</sup> to your organization.
        </h2>
        <div className="organization-bottom">
          <p>
            Leadership development should produce more than an inspiring
            afternoon. Jeannette creates conversations that continue after the
            training ends, customized around your organization's priorities,
            challenges, and people.
          </p>
          <a className="button button-light" href={consultationUrl}>
            Book a consultation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-top">
          <Link className="wordmark" to="/option-1">
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
          <a href={consultationUrl}>hello@jeannettemills.com</a>
          <a href="#top">Instagram</a>
          <a href="#top">LinkedIn</a>
          <a href="/option-1">
            Back to top <ArrowRight size={15} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Jeannette Mills. All rights reserved.
          </span>
          <span>
            Website by <a href="https://pagekey.io">PageKey</a>
          </span>
        </div>
      </footer>
    </main>
  );
}
