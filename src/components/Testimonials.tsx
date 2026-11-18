import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Quote } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

export default function Testimonials() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-paper relative overflow-hidden" id="testimonials">
      {/* Decorative background element */}
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-ink/5 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-center md:text-left">
             <SectionHeading title={t.testimonials.title} subtitle={t.testimonials.subtitle} />
          </div>
          <div className="md:w-1/3 mb-4 md:mb-8 text-center md:text-right text-ink/70 text-sm leading-relaxed">
            <p>{t.testimonials.intro}</p>
          </div>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-paper p-10 rounded-sm shadow-xl shadow-ink/5 border border-ink/5 relative pt-12 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-6 left-8 bg-wood text-white p-3 rounded-full shadow-lg shadow-wood/20">
                <Quote size={20} className="fill-white" />
              </div>
              
              <p className="text-ink/70 leading-relaxed text-sm italic mb-8">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto">
                <div className="w-8 h-[1px] bg-wood/30 mb-4 group-hover:w-16 transition-all duration-300"></div>
                <h4 className="font-serif text-lg text-ink font-bold">{testimonial.author}</h4>
                <p className="text-[10px] uppercase tracking-widest text-ink/50 mt-1">
                  {testimonial.role} <span className="text-wood">@</span> {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
