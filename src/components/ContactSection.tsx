import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

// TODO: replace with the real Web3Forms access key
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_KEY";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const data = new FormData(form);
      const json = Object.fromEntries(data.entries());
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(json),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-divider section-block">
      <div className="container-editorial">
        <span className="section-label block mb-10 sm:mb-14">06 —</span>
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[45%_1fr]">
          {/* Left */}
          <Reveal>
            <div>
              <h2 className="font-heading font-bold text-primary leading-[0.95] text-5xl sm:text-6xl md:text-7xl">
                LET'S WORK
                <br />
                TOGETHER.
              </h2>
              <p className="mt-8 text-sm sm:text-base text-foreground/80 leading-relaxed max-w-md">
                Open to freelance SEO projects, content collaborations, and consulting. Based in India. Working with UK
                clients.
              </p>
              <a
                href="mailto:sheikabdulla.co@gmail.com"
                className="hover-underline inline-block mt-8 font-heading font-bold text-xl sm:text-2xl text-primary break-all"
              >
                sheikabdulla.co@gmail.com
              </a>
              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-accent">
                <a href="https://www.linkedin.com/in/sheikabdulla-dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn ↗
                </a>
                <span className="text-muted-foreground" aria-hidden="true">·</span>
                <a href="https://www.instagram.com/seowithsheik" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Instagram ↗
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Portfolio Contact — Sheik Abdulla" />

              <div>
                <label htmlFor="cf-name" className="form-label">Name</label>
                <input id="cf-name" name="name" type="text" required placeholder="Your name" className="form-input" />
              </div>
              <div>
                <label htmlFor="cf-email" className="form-label">Email</label>
                <input id="cf-email" name="email" type="email" required placeholder="you@example.com" className="form-input" />
              </div>
              <div>
                <label htmlFor="cf-subject" className="form-label">Subject</label>
                <input id="cf-subject" name="subject_display" type="text" placeholder="What's this about?" className="form-input" />
              </div>
              <div>
                <label htmlFor="cf-message" className="form-label">Message</label>
                <textarea id="cf-message" name="message" required rows={4} placeholder="Tell me about your project…" className="form-input resize-none" />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-gold-outline w-full disabled:opacity-60"
              >
                {status === "sending" ? "SENDING…" : "SEND MESSAGE →"}
              </button>

              {status === "success" && (
                <p className="text-accent text-sm" role="status">✅ Message sent! I'll reply within 24 hours.</p>
              )}
              {status === "error" && (
                <p className="text-destructive text-sm" role="alert">❌ Something went wrong. Please try again.</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
