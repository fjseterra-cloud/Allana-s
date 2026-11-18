import { motion } from 'motion/react';
import { useLocale } from '../context/LocaleContext';

const TOOLS = [
  "Slack", "Shopify", "GHL", "Google Workspace", "Canva", 
  "Pipeline", "CapCut", "PaintScout", "Construct Connect", 
  "Google Gemini", "ChatGPT"
];

export default function SoftwareStack() {
  const { t } = useLocale();

  return (
    <section className="py-8 bg-paper overflow-hidden border-y border-ink/5">
      <div className="container mx-auto px-6 mb-4 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-ink/40">
          {t.softwareStack.heading}
        </span>
      </div>
      
      <div className="relative flex overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none"></div>

        <motion.div
          animate={{ x: [0, -1035] }} // Note: you might need to adjust this value based on actual width
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20
          }}
          className="flex whitespace-nowrap"
        >
          {/* Double the list to create seamless loop effect */}
          {[...TOOLS, ...TOOLS, ...TOOLS].map((tool, idx) => (
            <div key={idx} className="flex items-center px-8 text-ink/30 hover:text-wood transition-colors duration-300">
              <span className="font-serif text-2xl font-bold italic">{tool}</span>
              <div className="w-2 h-2 rounded-full bg-wood/30 ml-8"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
