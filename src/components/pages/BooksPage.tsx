import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import booksPortrait from "@/assets/JeanetteMills-Finals-23.jpg";
// import leadBoldlyMockup from "@/assets/lead-boldly-mockup.png";
import tommesGirlMockup from "@/assets/tommes-girl-mockup.png";
import { ContentPageLayout, PageIntro } from "@/components/ContentPageLayout";

export default function BooksPage() {
  return (
    <ContentPageLayout>
      <PageIntro
        eyebrow="Stories that shape leaders"
        title={
          <>
            From <em>Tomme’s Girl</em> to leading boldly.
          </>
        }
        image={booksPortrait}
        alt="Jeannette Mills holding a copy of Tomme's Girl"
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
      {/*
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
      */}
    </ContentPageLayout>
  );
}
