import contactPortrait from "@/assets/JeanetteMills-Finals-160.jpg";
import ContactForm from "@/components/ContactForm";
import { ContentPageLayout, PageIntro } from "@/components/ContentPageLayout";

export default function ContactPage() {
  return (
    <ContentPageLayout>
      <PageIntro
        eyebrow="Let's start a conversation"
        title={
          <>
            Ready to lead <em>more boldly?</em>
          </>
        }
        image={contactPortrait}
        alt="Jeannette Mills"
      />
      <section className="contact-section">
        <div>
          <p className="eyebrow">Work with Jeannette</p>
          <h2 style={{ lineHeight: 1.1 }}>
            Build a leadership culture capable of producing{" "}
            <em>sustainable performance.</em>
          </h2>
        </div>
        <div>
          <p>
            Jeannette works with organizations to create conversations that
            continue after the training ends. Training may also incorporate{" "}
            <em>Tomme’s Girl</em> and the LEAD BOLDLY™ Leadership Workbook to
            create an integrated learning experience that allows participants to
            read, reflect, discuss, and apply the principles long after the
            session concludes.
          </p>
          <p>
            If your organization is ready to strengthen its leaders, develop its
            people, and build a leadership culture capable of producing
            sustainable performance, the conversation starts here.
          </p>
          <ContactForm />
        </div>
      </section>
    </ContentPageLayout>
  );
}
