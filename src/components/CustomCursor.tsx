import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        animate={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          width: 12, height: 12,
          background: "hsl(183 100% 50%)",
          boxShadow: "0 0 15px hsl(183 100% 50% / 0.6), 0 0 30px hsl(183 100% 50% / 0.3)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-primary/30"
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
        style={{ width: 40, height: 40 }}
      />
    </>
  );
};

export default CustomCursor;
