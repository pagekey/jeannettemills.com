import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import executivePortrait from "@/assets/jeannette-exec-portrait-1.jpg";
import gardenPortrait from "@/assets/jeannette-garden-3.jpg";
import blackAndWhitePortrait from "@/assets/jeannette-portrait-blackandwhite.jpg";
import tommesGirl from "@/assets/tommes-girl-cover.png";
import leadBoldly from "@/assets/lead-boldly-cover.png";
import "./option3.css";

const contactUrl = "/option-3/contact";

function Masthead() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="o3-masthead">
      <Link
        className="o3-mark"
        to="/option-3"
        aria-label="Jeannette Mills home"
      >
        Jeannette Mills
      </Link>
      <p className="o3-edition">Leadership, story &amp; lasting influence</p>
      <button
        className="o3-menu"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={21} />}
      </button>
      <nav
        className={menuOpen ? "o3-nav o3-nav-open" : "o3-nav"}
        aria-label="Primary navigation"
      >
        <Link to="/option-3/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/option-3/work-with-jeannette" onClick={closeMenu}>
          Work with Jeannette
        </Link>
        <Link to="/option-3/books" onClick={closeMenu}>
          Books
        </Link>
        <Link to={contactUrl} onClick={closeMenu}>
          Contact
        </Link>
      </nav>
      <Link className="o3-contact-link" to={contactUrl}>
        Begin a conversation <ArrowUpRight size={14} />
      </Link>
    </header>
  );
}

function Footer() {
  return (
    <footer className="o3-footer">
      <div>
        <p className="o3-folio">Jeannette Mills / 2026</p>
        <Link className="o3-footer-mark" to="/option-3">
          Jeannette Mills
        </Link>
      </div>
      <p>Leadership is the story we leave in other people.</p>
      <div className="o3-footer-links">
        <a href="mailto:hello@jeannettemills.com">hello@jeannettemills.com</a>
        <Link to="/option-3">Return to the beginning</Link>
      </div>
      <small>
        © 2026 Jeannette Mills. All rights reserved. Website by{" "}
        <a href="https://pagekey.io">PageKey</a>
      </small>
    </footer>
  );
}

export default function OptionThree() {
  return (
    <main className="option-three" id="top">
      <Masthead />
      <section className="o3-hero">
        <div className="o3-hero-title">
          <p className="o3-kicker">A life in leadership</p>
          <h1>
            Here&apos;s my
            <br />
            <em>story.</em>
          </h1>
          <p className="o3-deck">
            The experiences, questions, and lessons that shaped a career devoted
            to helping people lead with purpose.
          </p>
          <Link className="o3-underlined-link" to="/option-3/about">
            Read the story <ArrowDown size={15} />
          </Link>
        </div>
        <div className="o3-hero-portrait">
          <img src={executivePortrait} alt="Jeannette Mills" />
        </div>
        <div className="o3-hero-side">
          <span>01</span>
          <span>Jeannette Mills</span>
          <span>Executive. Author. Guide.</span>
        </div>
      </section>

      <section className="o3-opening">
        <p className="o3-section-no">I.</p>
        <div>
          <p className="o3-kicker">The premise</p>
          <h2>
            What a leader does matters.
            <br />
            <em>Who she becomes matters, too.</em>
          </h2>
        </div>
        <div className="o3-body">
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
          <Link
            className="o3-underlined-link"
            to="/option-3/work-with-jeannette"
          >
            Work with Jeannette <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section className="o3-portrait-feature">
        <div className="o3-feature-image">
          <img src={gardenPortrait} alt="Jeannette Mills" />
        </div>
        <div className="o3-feature-copy">
          <p className="o3-kicker">Chapter one / Experience</p>
          <h2>
            A career of consequence,
            <br />
            <em>told with perspective.</em>
          </h2>
          <p>
            Jeannette has spent her career leading within complex organizations
            where decisions, relationships, and results matter. Her leadership
            journey included serving in senior executive roles at Tennessee
            Valley Authority, first as Executive Vice President and Chief
            External Relations Officer and ultimately as Executive Vice
            President and Chief Administrative Officer.
          </p>
          <p>
            Today, she brings those lessons to organizations, leadership teams,
            and professionals who understand that stronger leadership creates
            stronger organizations.
          </p>
          <span className="o3-caption">Portrait / A life of intention</span>
        </div>
      </section>

      <section className="o3-quote-spread">
        <span className="o3-quote-mark">“</span>
        <blockquote>
          Leadership is not only about what you accomplish; it is also about
          your enduring impact on people throughout the journey.
        </blockquote>
        <p>
          Jeannette Mills
          <br />
          On lasting leadership
        </p>
      </section>

      <section className="o3-services">
        <div>
          <p className="o3-section-no">II.</p>
          <p className="o3-kicker">A practical philosophy</p>
        </div>
        <h2>
          For the work that asks us to
          <br />
          <em>be more of ourselves.</em>
        </h2>
        <div className="o3-service-list">
          <article>
            <span>01</span>
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
          </article>
          <article>
            <span>02</span>
            <h3>
              Keynotes &amp;
              <br />
              Speaking
            </h3>
            <p>
              Insightful, candid, and practical conversations about leadership,
              resilience, professional growth, navigating change, and
              exceptional leaders.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>
              Books &amp;
              <br />
              Leadership Tools
            </h3>
            <p>
              Stories, reflection, and application designed to help individuals
              and organizations turn leadership insight into action.
            </p>
          </article>
        </div>
      </section>

      <section className="o3-books-feature">
        <div className="o3-books-intro">
          <p className="o3-section-no">III.</p>
          <p className="o3-kicker">The shelf</p>
          <h2>
            Stories to
            <br />
            <em>carry forward.</em>
          </h2>
          <p>
            Two books, one continuing conversation about where we come from, how
            we lead, and what remains with us.
          </p>
          <Link className="o3-underlined-link" to="/option-3/books">
            Explore the books <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="o3-book o3-book-one">
          <img src={tommesGirl} alt="Tomme's Girl by Jeannette Mills" />
          <div>
            <p>
              <em>Tomme&apos;s Girl</em>
            </p>
            <span>A memoir / The story behind the leader</span>
          </div>
        </div>
        <div className="o3-book o3-book-two">
          <img
            src={leadBoldly}
            alt="LEAD BOLDLY Leadership Workbook by Jeannette Mills"
          />
          <div>
            <p>
              LEAD BOLDLY<sup>TM</sup>
            </p>
            <span>A workbook / Reflection into action</span>
          </div>
        </div>
      </section>

      <section className="o3-closing">
        <img src={blackAndWhitePortrait} alt="Jeannette Mills" />
        <div>
          <p className="o3-kicker">The next chapter</p>
          <h2>
            Let&apos;s make the work
            <br />
            <em>matter.</em>
          </h2>
          <p>
            For organizations ready to strengthen leaders, develop people, and
            build performance that lasts.
          </p>
          <Link className="o3-dark-link" to={contactUrl}>
            Begin a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export function OptionThreePage({
  type,
}: {
  type: "about" | "work" | "books" | "contact";
}) {
  const content = {
    about: {
      kicker: "The story behind the work",
      title: (
        <>
          A life shaped by
          <br />
          <em>what matters most.</em>
        </>
      ),
      text: "Jeannette Mills has spent her career leading within complex organizations where decisions, relationships, and results matter.",
      image: gardenPortrait,
    },
    work: {
      kicker: "Leadership development",
      title: (
        <>
          Wisdom for the
          <br />
          <em>real world.</em>
        </>
      ),
      text: "Leadership becomes most important when circumstances become difficult. Jeannette's training and coaching draw from decades of firsthand leadership experience rather than theory alone.",
      image: executivePortrait,
    },
    books: {
      kicker: "Stories that shape leaders",
      title: (
        <>
          The pages behind
          <br />
          <em>the practice.</em>
        </>
      ),
      text: "Long before Jeannette Mills became a senior executive, she was Tomme's girl. Her story began with humble roots and grew into a career marked by achievement, difficult decisions, persistence, and lessons that could never have been learned from a textbook alone.",
      image: blackAndWhitePortrait,
    },
    contact: {
      kicker: "An invitation",
      title: (
        <>
          The conversation
          <br />
          <em>starts here.</em>
        </>
      ),
      text: "If your organization is ready to strengthen its leaders, develop its people, and build a leadership culture capable of producing sustainable performance, the conversation starts here.",
      image: executivePortrait,
    },
  }[type];
  return (
    <main className="option-three o3-subpage">
      <Masthead />
      <section className="o3-subhero">
        <div>
          <p className="o3-kicker">{content.kicker}</p>
          <h1>{content.title}</h1>
          <p>{content.text}</p>
          {type === "contact" ? (
            <a
              className="o3-dark-link"
              href="mailto:hello@jeannettemills.com?subject=Consultation%20Inquiry"
            >
              Email Jeannette <ArrowUpRight size={16} />
            </a>
          ) : (
            <Link className="o3-underlined-link" to={contactUrl}>
              Begin a conversation <ArrowUpRight size={15} />
            </Link>
          )}
        </div>
        <img src={content.image} alt="Jeannette Mills" />
      </section>
      {type === "books" && (
        <section className="o3-sub-books">
          <img src={tommesGirl} alt="Tomme's Girl book cover" />
          <img src={leadBoldly} alt="LEAD BOLDLY Leadership Workbook cover" />
        </section>
      )}
      <Footer />
    </main>
  );
}
