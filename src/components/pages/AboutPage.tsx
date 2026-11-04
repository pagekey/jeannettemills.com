import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import leadershipImpactPortrait from "@/assets/JeanetteMills-Finals-7.jpg";
import aboutPortrait from "@/assets/JeanetteMills-Finals-87.jpg";
import tommesGirlMockup from "@/assets/tommes-girl-mockup.png";
import { ContentPageLayout, PageIntro } from "@/components/ContentPageLayout";

export default function AboutPage() {
  return (
    <ContentPageLayout>
      <PageIntro
        eyebrow="Leadership is a practice"
        title={
          <>
            Lead Boldly™.
            <br />
            Develop people.
            <br />
            Build performance that lasts.
          </>
        }
        image={aboutPortrait}
        alt="Jeannette Mills"
        imageClassName="about-intro-image"
      />
      <section className="detail-section detail-split">
        <div className="detail-label">
          <span>01</span> The work
        </div>
        <div>
          <p className="lead-copy">
            Leadership is not simply about holding a position. It is about how
            you influence people, navigate difficult moments, make decisions,
            build trust, and create environments where others can succeed.
          </p>
          <p>
            Jeannette Mills brings decades of executive leadership experience,
            organizational insight, and lived wisdom to leaders and
            organizations ready to strengthen how they lead people and
            performance. Through executive training, leadership development,
            speaking, coaching, and the principles in{" "}
            <em>Tomme's Girl</em> and the LEAD BOLDLY™ Leadership Workbook,
            Jeannette helps leaders move beyond managing responsibilities to
            leading with greater clarity, confidence, accountability, and
            impact.
          </p>
          <Link className="button button-dark" to="/contact">
            Book a consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="detail-section story-section">
        <img
          src={leadershipImpactPortrait}
          alt="Jeannette Mills"
        />
        <div>
          <h2>
            From Executive Experience to <em>Leadership Impact.</em>
          </h2>
          <p>
            Jeannette Mills has spent her career leading within complex
            organizations where decisions, relationships, and results{" "}
            <strong>matter.</strong>
          </p>
          <p>
            Her leadership journey included serving in senior executive roles at large public and private organizations. Her experience extends beyond the executive
            suite through corporate and nonprofit board service, mentoring,
            speaking, and the development of emerging and established leaders.
          </p>
          <p>
            Her work is grounded in a simple rule: leadership is not only
            about what you accomplish; it is also about your enduring impact on
            people throughout the journey.
          </p>
          <p>
            Today, Jeannette brings those lessons directly to organizations,
            leadership teams, and professionals who understand that stronger
            leadership creates stronger organizations.
          </p>
          <Link className="button button-dark" to="/contact">
            Book a consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="detail-section detail-split">
        <div className="detail-label">
          <span>02</span> Leadership development
        </div>
        <div>
          <h2>
            Leadership Development Built for
            <em className="pl-4">Today's World.</em>
          </h2>
          <p>&nbsp;</p>
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
            Jeannette's training and coaching draw from decades of firsthand
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
          <p>&nbsp;</p>
          <Link className="button button-dark" to="/work-with-jeannette">
            Explore training &amp; coaching <ArrowRight size={18} />
          </Link>
        </article>
        <article>
          <span>02</span>
          <h2>
            Keynotes &amp;
            <br />
            Speaking
          </h2>
          <p>
            Insightful, candid, and practical conversations about leadership,
            resilience, professional growth, navigating change, and the lessons
            that shape exceptional leaders.
          </p>
          <p>&nbsp;</p>
          <Link className="button button-dark" to="/contact">
            Explore speaking <ArrowRight size={18} />
          </Link>
        </article>
        <article>
          <span>03</span>
          <h2>
            Books &amp;
            <br />
            Leadership Tools
          </h2>
          <p>
            <em>Tomme's Girl</em> and the LEAD BOLDLY™ Leadership Workbook
            combine lived experience, leadership lessons, reflection, and
            application to help individuals and organizations turn insight into
            action.
          </p>
          <p>&nbsp;</p>
          <Link className="button button-dark" to="/books">
            Explore products <ArrowRight size={18} />
          </Link>
        </article>
      </section>
      <section className="book-page-grid">
        <div>
          <img src={tommesGirlMockup} alt="Tomme's Girl by Jeannette Mills" />
        </div>
        <div>
          <h2 style={{ lineHeight: 1.2 }}>
            From <em className="book-title">Tomme's Girl</em> to{" "}
            <span className="book-title">Lead Boldly™</span>.
          </h2>
          <p>
            Long before Jeannette Mills became a senior executive, she was Tomme's girl. Her story began on the streets of Baltimore where survival was not guaranteed. By imagining a future beyond her circustances, Jeannette developed leadership skills and principles to create the life she'd always dreamed of with a few unexpected twists and turns.
          </p>
          <p>&nbsp;</p>
          <p>
            <em>Tomme's Girl</em> tells the story behind the leader. LEAD
            BOLDLY™ takes the leadership lessons within that story and turns
            them into practical principles leaders can examine and apply within
            their own lives, teams, and organizations.
          </p>
          <p>&nbsp;</p>
          <p>
            Together, they create more than a memoir. They create a leadership
            development experience.
          </p>
          <Link className="button button-dark" to="/books">
            Discover Tomme's Girl &amp; LEAD BOLDLY™ <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="organization work-cta">
        <p className="eyebrow">Bring LEAD BOLDLY™ to your organization</p>
        <h2>
          Leadership development should produce more than an inspiring
          afternoon.
        </h2>
        <p>
          Jeannette works with organizations to create conversations that
          continue after the training ends. Programs can be customized around
          organizational priorities, leadership challenges, professional
          development initiatives, retreats, conferences, employee resource
          programs, and leadership development cohorts.
        </p>
        <p>
          Training may also incorporate <em>Tomme's Girl</em> and the LEAD
          BOLDLY™ Leadership Workbook to create an integrated learning
          experience that allows participants to read, reflect, discuss, and
          apply the principles long after the session concludes.
        </p>
        <p>
          If your organization is ready to strengthen its leaders, develop its
          people, and build a leadership culture capable of producing
          sustainable performance, the conversation starts here.
        </p>
        <Link className="button button-light" to="/contact">
          Book a consultation <ArrowRight size={18} />
        </Link>
      </section>
    </ContentPageLayout>
  );
}
