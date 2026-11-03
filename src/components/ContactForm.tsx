import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

const contactEndpoint =
  "https://0a1rbacrih.execute-api.us-east-1.amazonaws.com/default/jeannette-mills-signup";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");

    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          metadata: {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            company: formData.get("company"),
            comments: formData.get("comments"),
          },
        }),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="contact-form-status" role="status">
        Thank you for reaching out. Jeannette will be in touch soon.
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-name-fields">
        <label>
          First name
          <input name="firstName" autoComplete="given-name" required />
        </label>
        <label>
          Last name
          <input name="lastName" autoComplete="family-name" required />
        </label>
      </div>
      <label>
        Company or Organization
        <input name="company" autoComplete="organization" />
      </label>
      <label>
        Email address
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        How can we help?
        <textarea name="comments" rows={5} required />
      </label>
      <button
        className="button button-dark"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send message"}
        <ArrowRight size={18} />
      </button>
      <p className="contact-form-note" aria-live="polite">
        {status === "error" ? (
          <>
            We couldn&apos;t send your message. Please email{" "}
            <a href="mailto:boldgirlboss@gmail.com">boldgirlboss@gmail.com</a>.
          </>
        ) : (
          "Fields marked above are required."
        )}
      </p>
    </form>
  );
}
