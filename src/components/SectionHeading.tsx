
import { motion } from 'motion/react';

interface Props {
  title: string;
  subtitle: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light = false }: Props) {
  return (
    <div className="mb-16">
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`font-mono text-xs uppercase tracking-[0.3em] mb-3 block ${light ? 'text-white/50' : 'text-wood/60'}`}
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-serif text-4xl md:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="h-1 bg-wood mt-6"
      ></motion.div>
    </div>
  );
}
