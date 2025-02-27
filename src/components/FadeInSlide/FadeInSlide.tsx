import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface FadeInSlideProps {
  children: React.ReactNode;
  direction?: "left" | "right";
}

const FadeInSlide: React.FC<FadeInSlideProps> = ({ children, direction = "left" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reseta a animação quando o elemento sai da tela
        }
      },
      { threshold: 0.2 } // Ativa a animação quando 20% do elemento estiver visível
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: direction === "left" ? -100 : 100 }} // Reseta ao sair da tela
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSlide;
