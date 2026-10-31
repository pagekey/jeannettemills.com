import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import baltimorePolytech from "@/assets/jeannette-baltimore-polytech.jpg";
import executivePortrait from "@/assets/jeannette-exec-portrait-2.jpg";
import gardenPortrait from "@/assets/jeannette-garden-2.jpg";
import leadBoldlyMockup from "@/assets/lead-boldly-mockup.png";
import tommesGirlMockup from "@/assets/tommes-girl-mockup.png";

function SiteHeader() {
  return (
    <header className="site-header content-header">
      <Link className="wordmark" to="/option-1">
        <span>Jeannette</span>
        <strong>Mills</strong>
      </Link>
      <nav>
        <Link to="/option-1/about">About</Link>
        <Link to="/option-1/work-with-jeannette">Work With Jeannette</Link>
        <Link to="/option-1/books">Books</Link>
        <Link to="/option-1/contact">Contact</Link>
      </nav>
      <Link className="header-cta" to="/option-1/contact">
        Book a consultation <ArrowRight size={15} />
      </Link>
    </header>
  );
}

function PageIntro({
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

function PageFooter() {
  return (
    <footer>
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
        <Link to="/option-1/contact">Get in touch</Link>
        <Link to="/option-1/about">About Jeannette</Link>
        <Link to="/option-1/work-with-jeannette">Work with Jeannette</Link>
        <Link to="/option-1">
          Option 1 home <ArrowRight size={15} />
        </Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Jeannette Mills. All rights reserved.</span>
        <span>
          Website by <a href="https://pagekey.io">PageKey</a>
        </span>
      </div>
    </footer>
  );
}

function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <PageFooter />
    </>
  );
}

export function AboutPage() {
  return (
    <Page>
      <PageIntro
        eyebrow="The leader behind the work"
        title={
          <>
            From executive experience to <em>leadership impact.</em>
          </>
        }
        image={executivePortrait}
        alt="Jeannette Mills"
      />
      <section className="detail-section detail-split">
        <div className="detail-label">
          <span>01</span> About Jeannette
        </div>
        <div>
          <p className="lead-copy">
            Jeannette Mills has spent her career leading within complex
            organizations where decisions, relationships, and results{" "}
            <strong>matter.</strong>
          </p>
          <p>
            Her leadership journey ultimately included serving in senior
            executive roles at Tennessee Valley Authority, beginning her tenure
            as the Executive Vice President and Chief External Relations Officer
            and ultimately becoming the Executive Vice President and Chief
            Administrative Officer.
          </p>
          <p>
            Her experience extends beyond the executive suite through corporate
            and nonprofit board service, mentoring, speaking, and the
            development of emerging and established leaders.
          </p>
        </div>
      </section>
      <section className="quote-panel">
        <p>
          “Leadership is not only about what you accomplish; it is also about
          your enduring impact on people throughout the journey.”
        </p>
      </section>
      <section className="detail-section story-section">
        <img
          src={baltimorePolytech}
          alt="Jeannette Mills at Baltimore Polytechnic Institute"
        />
        <div>
          <p className="eyebrow">A legacy of impact</p>
          <h2>
            Stronger leadership creates <em>stronger organizations.</em>
          </h2>
          <p>
            Today, Jeannette brings those lessons directly to organizations,
            leadership teams, and professionals who understand that leadership
            is a practice, and people are its enduring purpose.
          </p>
          <Link className="button button-dark" to="/contact">
            Book a consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Page>
  );
}

export function WorkPage() {
  return (
    <Page>
      <PageIntro
        eyebrow="Leadership development"
        title={
          <>
            Built for <em>the real world.</em>
          </>
        }
        image={gardenPortrait}
        alt="Jeannette Mills"
      />
      <section className="detail-section detail-split">
        <div className="detail-label">
          <span>02</span> How we work
        </div>
        <div>
          <p className="lead-copy">
            Leadership becomes most important when circumstances become
            difficult.
          </p>
          <p>
            Organizations need leaders who can communicate clearly, make sound
            decisions, navigate change, build trust, manage competing
            priorities, develop talent, and maintain performance without losing
            sight of the people responsible for producing the results.
          </p>
          <p>
            Jeannette’s training and coaching draw from decades of firsthand
            leadership experience rather than theory alone. Her programs help
            leaders examine how they show up, how they influence others, and how
            their everyday leadership behaviors affect organizational culture
            and performance.
          </p>
        </div>
      </section>
      <section className="service-detail-grid">
        <article>
          <span>01</span>
          <h2>
            Leadership
            <br />
            Training
          </h2>
          <p>
            Customized leadership development experiences for organizations,
            leadership teams, and professionals who want practical strategies
            they can immediately apply.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>
            Keynotes &<br />
            Speaking
          </h2>
          <p>
            Insightful, candid, and practical conversations about leadership,
            resilience, professional growth, navigating change, and the lessons
            that shape exceptional leaders.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>
            Books &<br />
            Leadership Tools
          </h2>
          <p>
            <em>Tomme’s Girl</em> and the LEAD BOLDLY(TM) Leadership Workbook
            combine lived experience, leadership lessons, reflection, and
            application to turn insight into action.
          </p>
        </article>
      </section>
      <section className="organization work-cta">
        <p className="eyebrow">Bring Lead Boldly to your organization</p>
        <h2>
          Conversations that continue <em>after the training ends.</em>
        </h2>
        <p>
          Programs can be customized around organizational priorities,
          leadership challenges, professional development initiatives, retreats,
          conferences, employee resource programs, and leadership development
          cohorts.
        </p>
        <Link className="button button-light" to="/contact">
          Start the conversation <ArrowRight size={18} />
        </Link>
      </section>
    </Page>
  );
}

export function BooksPage() {
  return (
    <Page>
      <PageIntro
        eyebrow="Stories that shape leaders"
        title={
          <>
            From <em>Tomme’s Girl</em> to leading boldly.
          </>
        }
        image={baltimorePolytech}
        alt="Jeannette Mills at Baltimore Polytechnic Institute"
      />
      <section className="book-page-grid">
        <div>
          <img src={tommesGirlMockup} alt="Tomme's Girl by Jeannette Mills" />
        </div>
        <div>
          <p className="eyebrow">Tomme’s Girl</p>
          <h2>
            The story behind
            <br />
            <em>the leader.</em>
          </h2>
          <p>
            Long before Jeannette Mills became a senior executive, she was
            Tomme’s girl. Her story began with humble roots and grew into a
            career marked by achievement, difficult decisions, persistence,
            leadership, and lessons that could never have been learned from a
            textbook alone.
          </p>
          <p>
            <em>Tomme’s Girl</em> tells the story behind the leader.
          </p>
          <Link className="button button-dark" to="/contact">
            Purchase information <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="book-page-grid workbook-page">
        <div>
          <p className="eyebrow">LEAD BOLDLY(TM) Workbook</p>
          <h2>
            Turn insight into <em>action.</em>
          </h2>
          <p>
            LEAD BOLDLY(TM) takes the leadership lessons within that story and
            turns them into practical principles leaders can examine and apply
            within their own lives, teams, and organizations.
          </p>
          <p>
            Together, the book and workbook create more than a memoir. They
            create a leadership development experience.
          </p>
          <Link className="button button-light" to="/contact">
            Purchase information <ArrowRight size={18} />
          </Link>
        </div>
        <div>
          <img
            src={leadBoldlyMockup}
            alt="LEAD BOLDLY Leadership Workbook by Jeannette Mills"
          />
        </div>
      </section>
    </Page>
  );
}

export function ContactPage() {
  return (
    <Page>
      <PageIntro
        eyebrow="Let's start a conversation"
        title={
          <>
            Ready to lead <em>more boldly?</em>
          </>
        }
        image={executivePortrait}
        alt="Jeannette Mills"
      />
      <section className="contact-section">
        <div>
          <p className="eyebrow">Work with Jeannette</p>
          <h2>
            Build a leadership culture capable of producing{" "}
            <em>sustainable performance.</em>
          </h2>
        </div>
        <div>
          <p>
            Jeannette works with organizations to create conversations that
            continue after the training ends. Training may also incorporate{" "}
            <em>Tomme’s Girl</em> and the LEAD BOLDLY(TM) Leadership Workbook to
            create an integrated learning experience that allows participants to
            read, reflect, discuss, and apply the principles long after the
            session concludes.
          </p>
          <p>
            If your organization is ready to strengthen its leaders, develop its
            people, and build a leadership culture capable of producing
            sustainable performance, the conversation starts here.
          </p>
          <a
            className="button button-dark"
            href="mailto:hello@jeannettemills.com?subject=Consultation%20Inquiry"
          >
            Email Jeannette <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </Page>
  );
}
