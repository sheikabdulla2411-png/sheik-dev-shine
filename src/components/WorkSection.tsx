import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

interface WorkItem {
  name: string;
  type: string;
  meta: string;
  year: string;
  href?: string;
  badge?: string;
}

const workItems: WorkItem[] = [
  {
    name: "Unified Web Services (UWS)",
    type: "SEO Executive · Blog Content · Backlink Strategy",
    meta: "Essex, UK",
    year: "2025–Present",
    badge: "Employed",
  },
  {
    name: "Sha Fitness",
    type: "Local SEO · Blog Content · Personal Training",
    meta: "Chigwell, UK",
    year: "2025",
  },
  {
    name: "Build4Cast.ai",
    type: "SaaS SEO · Content Strategy · Construction Tech",
    meta: "UK",
    year: "2025",
  },
  {
    name: "Zenera Limited",
    type: "Technical SEO · Blog Content",
    meta: "UK Software Dev",
    year: "2025",
  },
  {
    name: "SEO Pulse Blog",
    type: "Personal SEO Blog · Vite + React",
    meta: "Netlify",
    year: "2025",
    href: "https://seopulse-sheik.netlify.app/",
  },
  {
    name: "SEO Tips for Beginners 2026",
    type: "Personal Blog · Blogspot · SEO Practice",
    meta: "Blogspot",
    year: "2025",
    href: "https://seotipsforbeginners2026.blogspot.com",
  },
];

const WorkSection = () => {
  return (
    <SectionShell
      id="work"
      number="02"
      heading="SELECTED WORK"
      leftNote={<p className="lg:pl-0">Real SEO work. Real UK clients. Real results.</p>}
    >
      <Reveal>
        <div className="lg:-mt-2">
          {workItems.map((item, i) => {
            const row = (
              <article
                className="editorial-row"
                style={i === 0 ? { borderTop: "1px solid hsl(var(--accent) / 0.15)" } : undefined}
              >
                <span className="text-muted-foreground text-sm sm:text-base font-body">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="row-title">
                    {item.name}
                    {item.badge && (
                      <span className="tag-pill ml-3 align-middle text-[10px] sm:text-xs">{item.badge}</span>
                    )}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground md:hidden">
                    {item.type} · {item.meta}
                  </p>
                </div>
                <p className="hidden md:block text-xs lg:text-sm text-muted-foreground">{item.type}</p>
                <div className="hidden md:flex md:flex-col text-xs lg:text-sm text-muted-foreground">
                  <span>{item.meta}</span>
                  <span>{item.year}</span>
                </div>
                <span className="row-arrow" aria-hidden="true">→</span>
              </article>
            );

            return item.href ? (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="block group">
                {row}
              </a>
            ) : (
              <div key={item.name}>{row}</div>
            );
          })}
        </div>
      </Reveal>
    </SectionShell>
  );
};

export default WorkSection;
