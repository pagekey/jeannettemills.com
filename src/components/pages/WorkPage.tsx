import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gardenPortrait from "@/assets/jeannette-garden-2.jpg";
import { ContentPageLayout, PageIntro } from "@/components/ContentPageLayout";

export default function WorkPage() {
  return (
    <ContentPageLayout>
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
            Keynotes &amp;
            <br />
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
            Books &amp;
            <br />
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
    </ContentPageLayout>
  );
}
