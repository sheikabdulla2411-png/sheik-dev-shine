import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

interface CertItem {
  title: string;
  meta: string;
}

const certs: CertItem[] = [
  {
    title: "Google Digital Marketing Certification",
    meta: "ID: 381645427 · Issued by Google · 2024",
  },
  {
    title: "Google Analytics 4 (GA4) Certification",
    meta: "Google Skillshop · 2024",
  },
];

const CertificationsSection = () => {
  return (
    <SectionShell id="certifications" number="04" heading="CERTIFIED">
      <Reveal>
        <div className="lg:-mt-2">
          {certs.map((cert, i) => (
            <article
              key={cert.title}
              className="editorial-row"
              style={i === 0 ? { borderTop: "1px solid hsl(var(--accent) / 0.15)" } : undefined}
            >
              <span className="text-muted-foreground text-sm sm:text-base font-body">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <h3 className="row-title">{cert.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{cert.meta}</p>
              </div>
              <span className="hidden md:block" aria-hidden="true" />
              <span className="hidden md:block" aria-hidden="true" />
              <a
                href="#certifications"
                className="hover-underline text-xs sm:text-sm text-accent row-arrow !justify-self-end whitespace-nowrap"
                aria-label={`View ${cert.title} certificate (link coming soon)`}
              >
                View Certificate →
              </a>
            </article>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
};

export default CertificationsSection;
