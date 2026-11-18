
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import aboutPortraitImage from '../assets/images/regenerated_image_1794988608130.jpg';
import { useLocale } from '../context/LocaleContext';

export default function About() {
  const { t } = useLocale();
  return (
    <section id="about" className="py-24 bg-paper relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          
          {/* Image side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img 
                src={aboutPortraitImage} 
                alt="Allana Jean Baloy" 
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 border-[20px] border-paper/10 pointer-events-none"></div>
            </motion.div>
            
            {/* Decorative block */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 w-64 h-48 bg-wood hidden md:block -z-10"
            ></motion.div>
          </div>

          {/* Content side */}
          <div className="w-full lg:w-1/2">
            <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />
            
            <div className="space-y-6 text-ink/70 leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl font-serif text-ink italic"
              >
                {t.about.quote}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {t.about.bio1}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {t.about.bio2}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-8 grid grid-cols-2 gap-8 border-t border-ink/10"
              >
                <div>
                  <h4 className="font-serif text-2xl text-wood mb-1">5+</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold">{t.about.yearsLabel}</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-wood mb-1">120+</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold">{t.about.projectsLabel}</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
