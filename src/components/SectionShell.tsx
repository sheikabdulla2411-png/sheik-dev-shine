import type { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  number: string;
  heading: string;
  leftNote?: ReactNode;
  children: ReactNode;
  divider?: boolean;
  headingClassName?: string;
}

const SectionShell = ({ id, number, heading, leftNote, children, divider = true, headingClassName = "" }: SectionShellProps) => {
  return (
    <section id={id} className={`${divider ? "section-divider" : ""} section-block`}>
      <div className="container-editorial">
        <span className="section-label block mb-10 sm:mb-14">{number} —</span>
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[35%_1fr]">
          <div>
            <h2 className={`display-heading text-4xl sm:text-5xl md:text-6xl leading-none ${headingClassName}`}>{heading}</h2>
            {leftNote && <div className="mt-5 text-sm text-muted-foreground">{leftNote}</div>}
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default SectionShell;
