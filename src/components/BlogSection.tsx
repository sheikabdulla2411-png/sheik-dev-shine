import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

const BLOG_URL = "https://seotipsforbeginners2026.blogspot.com";

const posts = [
  { title: "What is Technical SEO and Why It Matters in 2025", meta: "SEO Tips for Beginners" },
  { title: "How to Use Google Search Console as a Beginner", meta: "SEO Tips for Beginners" },
  { title: "AEO vs SEO — What's the Difference in 2025", meta: "SEO Tips for Beginners" },
];

const BlogSection = () => {
  return (
    <SectionShell
      id="blog"
      number="05"
      heading="LATEST INSIGHTS"
      leftNote={<p>From my personal SEO blog</p>}
    >
      <Reveal>
        <div className="lg:-mt-2">
          {posts.map((post, i) => (
            <a
              key={post.title}
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <article
                className="editorial-row"
                style={i === 0 ? { borderTop: "1px solid hsl(var(--accent) / 0.15)" } : undefined}
              >
                <span className="text-muted-foreground text-sm sm:text-base font-body">{String(i + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <h3 className="row-title">{post.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{post.meta}</p>
                </div>
                <span className="hidden md:block" aria-hidden="true" />
                <span className="hidden md:block" aria-hidden="true" />
                <span className="row-arrow whitespace-nowrap text-xs sm:text-sm text-accent">Read More →</span>
              </article>
            </a>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
};

export default BlogSection;
