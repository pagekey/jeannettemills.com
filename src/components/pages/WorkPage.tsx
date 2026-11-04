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
            Built for <em>today's world.</em>
          </>
        }
        image={gardenPortrait}
        alt="Jeannette Mills"
      />
      <section className="detail-section detail-split">
        <div className="detail-label">
          <span>02</span> My work
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
      <section className="service-detail-grid service-detail-grid-single">
        <article>
          <h2>
            Leadership
            <br />
            Training &amp; Speaking
          </h2>
          <div>
            <p>
              Customized leadership development experiences for organizations, leadership teams, and professionals who want practical strategies they can immediately apply.
            </p>
            <p>&nbsp;</p>
            <p>
              Alongside insightful, candid, and practical speaking on leadership, resilience, professional growth, navigating change, and the lessons that shape exceptional leaders.
            </p>
          </div>
        </article>
      </section>
      <section className="organization work-cta">
        <p className="eyebrow">Bring Lead Boldly™ to your organization</p>
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
