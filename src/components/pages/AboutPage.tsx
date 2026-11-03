import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import baltimorePolytech from "@/assets/jeannette-baltimore-polytech.jpg";
import executivePortrait from "@/assets/jeannette-exec-portrait-2.jpg";
import tommesGirlMockup from "@/assets/tommes-girl-mockup.png";
import { ContentPageLayout, PageIntro } from "@/components/ContentPageLayout";

export default function AboutPage() {
  return (
    <ContentPageLayout>
      <PageIntro
        eyebrow="Leadership is a practice"
        title={
          <>
            Lead boldly.™
            <br />
            Develop people.
            <br />
            Build performance that lasts.
          </>
        }
        image={executivePortrait}
        alt="Jeannette Mills"
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
            speaking, coaching, and the principles introduced in{" "}
            <em>Tomme’s Girl</em> and the LEAD BOLDLY™ Leadership Workbook,
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
          src={baltimorePolytech}
          alt="Jeannette Mills at Baltimore Polytechnic Institute"
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
            Her leadership journey ultimately included serving in senior
            executive roles at Tennessee Valley Authority, beginning her tenure
            as the Executive Vice President and Chief External Relations Officer
            ultimately becoming the Executive Vice President and Chief
            Administrative Officer. Her experience extends beyond the executive
            suite through corporate and nonprofit board service, mentoring,
            speaking, and the development of emerging and established leaders.
          </p>
          <p>
            Her work is grounded in a simple principle: leadership is not only
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
            <br />
            <em>the Real World.</em>
          </h2>
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
            <em>Tomme’s Girl</em> and the LEAD BOLDLY™ Leadership Workbook
            combine lived experience, leadership lessons, reflection, and
            application to help individuals and organizations turn insight into
            action.
          </p>
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
          <h2>
            From <em>Tomme's Girl</em> to Leading Boldly.
          </h2>
          <p>
            Long before Jeannette Mills became a senior executive, she was
            Tomme’s girl. Her story began with humble roots and grew into a
            career marked by achievement, difficult decisions, persistence,
            leadership, and lessons that could never have been learned from a
            textbook alone.
          </p>
          <p>
            <em>Tomme’s Girl</em> tells the story behind the leader. LEAD
            BOLDLY™ takes the leadership lessons within that story and turns
            them into practical principles leaders can examine and apply within
            their own lives, teams, and organizations.
          </p>
          <p>
            Together, they create more than a memoir. They create a leadership
            development experience.
          </p>
          <Link className="button button-dark" to="/books">
            Discover Tomme’s Girl &amp; LEAD BOLDLY™ <ArrowRight size={18} />
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
          Training may also incorporate <em>Tomme’s Girl</em> and the LEAD
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
