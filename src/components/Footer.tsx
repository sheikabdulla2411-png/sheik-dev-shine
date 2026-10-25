const Footer = () => {
  return (
    <footer
      className="py-8 px-5 sm:px-8"
      style={{ borderTop: "1px solid hsl(var(--accent) / 0.3)" }}
    >
      <div className="container-editorial">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-muted-foreground">
          <p>© 2025 Sheik Abdulla — Junior SEO Executive</p>
          <a href="mailto:sheikabdulla.co@gmail.com" className="hover-underline">sheikabdulla.co@gmail.com</a>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/sheikabdulla-dev" target="_blank" rel="noopener noreferrer" className="hover-underline">LinkedIn</a>
            <a href="https://www.instagram.com/seowithsheik" target="_blank" rel="noopener noreferrer" className="hover-underline">Instagram</a>
          </div>
        </div>
        <p className="mt-4 text-center text-[10px] sm:text-xs text-muted-foreground/60">
          Built with React · Deployed on Netlify
        </p>
      </div>
    </footer>
  );
};

export default Footer;
