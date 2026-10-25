import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

interface SkillGroup {
  label: string;
  items: string[];
}

const groups: SkillGroup[] = [
  {
    label: "Technical SEO",
    items: [
      "Core Web Vitals",
      "Site Audits (Screaming Frog)",
      "Schema Markup & JSON-LD",
      "robots.txt & XML Sitemaps",
      "Crawlability & Indexation",
      "Page Speed Optimisation",
      "Mobile SEO",
    ],
  },
  {
    label: "On-Page SEO",
    items: [
      "Keyword Research",
      "Meta Tag Optimisation",
      "Internal Linking Strategy",
      "E-E-A-T Optimisation",
      "Title & Heading Structure",
      "Image Alt Tag Optimisation",
      "Content Gap Analysis",
    ],
  },
  {
    label: "SEO Tools",
    items: [
      "Google Search Console",
      "Google Analytics 4 (GA4)",
      "Ahrefs",
      "SEMrush",
      "Screaming Frog",
      "Google Tag Manager",
      "PageSpeed Insights",
      "Ubersuggest",
    ],
  },
  {
    label: "Content & AEO / GEO",
    items: [
      "SEO Blog Writing (1000–1500 words)",
      "Answer Engine Optimisation (AEO)",
      "Generative Engine Optimisation (GEO)",
      "FAQ Schema",
      "Featured Snippet Targeting",
      "Long-tail Keyword Strategy",
      "WordPress (Rank Math, 80+ score)",
      "Backlink Building (Medium, Substack, Blogger, JustPaste.it, Pearltrees)",
    ],
  },
];

const SkillGroupBlock = ({ group, index }: { group: SkillGroup; index: number }) => (
  <Reveal delay={index * 0.08}>
    <div>
      <h3 className="text-sm uppercase tracking-[0.2em] text-accent mb-5">{group.label}</h3>
      <ul className="space-y-3 text-sm sm:text-base text-foreground/85">
        {group.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-muted-foreground shrink-0" aria-hidden="true">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </Reveal>
);

const SkillsSection = () => {
  return (
    <SectionShell id="skills" number="03" heading="WHAT I DO">
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
        {groups.map((g, i) => (
          <SkillGroupBlock key={g.label} group={g} index={i} />
        ))}
      </div>
    </SectionShell>
  );
};

export default SkillsSection;
