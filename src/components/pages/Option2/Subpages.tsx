import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import executivePortrait from "@/assets/jeannette-exec-portrait-2.jpg";
import gardenPortrait from "@/assets/jeannette-garden-2.jpg";
import tommesGirl from "@/assets/tommes-girl-cover.png";
import "./option2.css";

function Header() {
  return (
    <header className="o2-header">
      <Link className="o2-wordmark" to="/option-2">
        Jeannette Mills
      </Link>
      <nav className="o2-nav">
        <Link to="/option-2/about">About</Link>
        <Link to="/option-2/work-with-jeannette">Work with Jeannette</Link>
        <Link to="/option-2/books">Books</Link>
        <Link to="/option-2/contact">Contact</Link>
      </nav>
      <Link className="o2-header-link" to="/option-2/contact">
        Book a consultation
      </Link>
    </header>
  );
}

function Footer() {
  return (
    <footer className="o2-footer">
      <Link className="o2-wordmark" to="/option-2">
        Jeannette Mills
      </Link>
      <div>
        <a href="mailto:hello@jeannettemills.com">hello@jeannettemills.com</a>
        <Link to="/option-2">Home</Link>
      </div>
      <small>© 2026 Jeannette Mills. All rights reserved.</small>
    </footer>
  );
}

function Page({
  eyebrow,
  title,
  children,
  image = executivePortrait,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  image?: string;
}) {
  return (
    <main className="option-two">
      <Header />
      <section className="o2-subpage-hero">
        <div>
          <p className="o2-kicker">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <img src={image} alt="Jeannette Mills" />
      </section>
      <section className="o2-subpage-content">{children}</section>
      <Footer />
    </main>
  );
}

export function OptionTwoAbout() {
  return (
    <Page
      eyebrow="The leader behind the work"
      title={
        <>
          Experience with <em>perspective.</em>
        </>
      }
    >
      <p className="o2-subpage-lead">
        Jeannette Mills has spent her career leading within complex
        organizations where decisions, relationships, and results matter.
      </p>
      <p>
        Her leadership journey includes senior executive roles at Tennessee
        Valley Authority, board service, mentoring, speaking, and the
        development of emerging and established leaders.
      </p>
    </Page>
  );
}

export function OptionTwoWork() {
  return (
    <Page
      eyebrow="Leadership development"
      title={
        <>
          Work grounded in <em>real experience.</em>
        </>
      }
      image={gardenPortrait}
    >
      <p className="o2-subpage-lead">
        Leadership becomes most important when circumstances become difficult.
      </p>
      <p>
        Jeannette's training, coaching, and speaking engagements give leaders
        practical ways to communicate clearly, build trust, develop people, and
        sustain performance.
      </p>
      <Link className="o2-button" to="/option-2/contact">
        Start a conversation <ArrowRight size={16} />
      </Link>
    </Page>
  );
}

export function OptionTwoBooks() {
  return (
    <Page
      eyebrow="Stories that shape leaders"
      title={
        <>
          Lessons to carry <em>forward.</em>
        </>
      }
    >
      <div className="o2-subpage-books">
        <img src={tommesGirl} alt="Tomme's Girl book cover" />
        <div>
          <p className="o2-subpage-lead">
            <em>Tomme's Girl</em> tells the story behind the leader.
          </p>
          <p>
            Alongside the LEAD BOLDLY(TM) Leadership Workbook, it creates a
            meaningful experience for people ready to reflect and apply what
            they learn.
          </p>
          <Link className="o2-button" to="/option-2/contact">
            Purchase information <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Page>
  );
}

export function OptionTwoContact() {
  return (
    <Page
      eyebrow="An invitation"
      title={
        <>
          Build leadership <em>that lasts.</em>
        </>
      }
    >
      <p className="o2-subpage-lead">
        If your organization is ready to strengthen its leaders and develop its
        people, the conversation starts here.
      </p>
      <p>
        Jeannette creates thoughtful, customized experiences for organizations,
        teams, and professionals.
      </p>
      <a
        className="o2-button"
        href="mailto:hello@jeannettemills.com?subject=Consultation%20Inquiry"
      >
        Email Jeannette <ArrowRight size={16} />
      </a>
    </Page>
  );
}
