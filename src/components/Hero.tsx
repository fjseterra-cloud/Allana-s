
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroSideImage from '../assets/images/regenerated_image_1794988606836.jpg';
import { useLocale } from '../context/LocaleContext';

export default function Hero() {
  const { t } = useLocale();
  return (
    <section className="relative min-h-screen flex items-center bg-paper overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="https://imgur.com/a/d9oCsMQ"
            alt="Modern Architecture" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-paper/50 via-paper/80 to-paper"></div>
        <div className="absolute inset-0 wood-texture-overlay opacity-5"></div>
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-[0.05]">
        <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(to right, var(--ink) 1px, transparent 1px), linear-gradient(to bottom, var(--ink) 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-wood"></div>
                <span className="text-ink font-mono text-xs uppercase tracking-[0.4em] opacity-80">
                  Allana Jeanne Baloy
                </span>
              </div>
              
              <h1 className="text-ink font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-8 tracking-tight">
                {t.hero.titleLine1} <br />
                <span className="text-wood italic">{t.hero.titleLine2}</span>
              </h1>
              
              <p className="text-ink/60 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-12 border-l border-ink/10 pl-6">
                {t.hero.subtitleBefore}
                <span className="text-ink font-medium">{t.hero.subtitleEstimates}</span>
                {t.hero.subtitleMiddle}
                <span className="text-ink font-medium">{t.hero.subtitleVisuals}</span>
                {t.hero.subtitleAfter}
              </p>
              
              <div className="flex flex-wrap gap-6">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#portfolio"
                  className="bg-wood text-white px-10 py-4 rounded-sm text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-3 shadow-2xl shadow-wood/20 hover:bg-wood-light transition-all"
                >
                  {t.hero.viewProjects}
                  <ArrowRight size={16} />
                </motion.a>
                <a 
                  href="#contact"
                  className="text-ink/80 hover:text-ink px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-3 transition-colors group"
                >
                  {t.hero.contactMe}
                  <div className="w-0 group-hover:w-8 h-[1px] bg-wood transition-all duration-300"></div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Side Visual / Balanced Element */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative pr-8"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden border border-ink/5 relative z-10 translate-x-3 -translate-y-3 shadow-2xl">
                <img 
                  src={heroSideImage} 
                  alt="Modern Design Detail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-wood/10"></div>
              </div>
              {/* Decorative Frame */}
              <div className="absolute inset-0 border border-wood translate-y-3 -translate-x-3"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side Color Panel */}
      <div className="absolute right-0 top-0 h-full w-[2px] bg-wood/20 hidden md:block"></div>
    </section>
  );
}
