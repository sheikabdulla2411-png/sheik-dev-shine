import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Mail, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "686e28e4-2b8c-4cce-bfef-cef7624c85c0",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        toast({ title: "Thanks! I'll get back to you soon 🚀" });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast({ title: "Something went wrong, please try again!", variant: "destructive" });
      }
    } catch {
      toast({ title: "Something went wrong, please try again!", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
          <p className="text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <Rocket size={16} className="text-primary" />
            Open to Internships & Freelance Projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8 md:col-span-3 space-y-5"
          >
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                placeholder="Let's work together..."
              />
            </div>
            <button type="submit" disabled={sending} className="btn-primary-glow flex items-center gap-2 w-full justify-center disabled:opacity-50">
              <Send size={16} /> {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-6 md:p-8 md:col-span-2 flex flex-col items-center justify-center gap-6"
          >
            <p className="text-sm text-muted-foreground text-center">Connect with me</p>
            <div className="flex gap-4">
              <a href="https://github.com/sheikabdulla2411-png" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a <a href="https://www.linkedin.com/in/sheikabdulla-dev" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn"> target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sheikabdulla2411@gmail.com" className="social-icon-btn" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <div className="text-xs text-muted-foreground text-center mt-4">
              Pudukkottai, Tamil Nadu<br />India
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
