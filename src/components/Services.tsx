
import { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES, PROJECTS, Project, ServiceItem } from '../constants';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import * as Icons from 'lucide-react';
import { Maximize2 } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

export default function Services() {
  const { t } = useLocale();
  const [selectedServiceProject, setSelectedServiceProject] = useState<Project | null>(null);
  const [openLightboxDirectly, setOpenLightboxDirectly] = useState(false);

  const buildServiceShowcase = (service: ServiceItem): Project => {
    const localizedService = t.services.items[service.category];
    const matchingProjects = PROJECTS.filter((p) => p.category === service.category);
    const serviceImages = Array.from(
      new Set(
        matchingProjects.flatMap((p) =>
          p.images && p.images.length > 0 ? p.images : [p.imageUrl]
        )
      )
    );

    return {
      id: `service-${service.category}`,
      title: localizedService?.title || service.title,
      description: localizedService?.description || service.description,
      category: service.category,
      imageUrl: serviceImages[0] || '',
      images: serviceImages,
      location: t.projectModal.remoteLocation,
    };
  };

  const handleOpenService = (service: ServiceItem, directLightbox = false) => {
    setOpenLightboxDirectly(directLightbox);
    setSelectedServiceProject(buildServiceShowcase(service));
  };

  return (
    <section id="services" className="py-24 bg-paper relative overflow-hidden border-t border-ink/5">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wood/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {SERVICES.map((service, idx) => {
            const Icon = (Icons as any)[service.icon] || Icons.HelpCircle;
            const localized = t.services.items[service.category];
            const serviceTitle = localized?.title || service.title;
            const serviceDesc = localized?.description || service.description;
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={service.category}
                onClick={() => handleOpenService(service, false)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenService(service, false);
                  }
                }}
                className="group bg-paper p-8 md:p-12 hover:bg-wood/5 transition-all duration-500 border border-ink/5 cursor-pointer flex flex-col relative"
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenService(service, true);
                  }}
                  aria-label={`${serviceTitle} - ${t.projectModal.expand}`}
                  className="absolute top-5 right-5 p-2 text-ink/40 hover:text-wood transition-colors md:opacity-0 md:group-hover:opacity-100"
                >
                  <Maximize2 size={16} />
                </button>
                <div className="text-wood mb-8 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">
                  <Icon size={40} strokeWidth={1} />
                </div>
                <h3 className="text-ink font-serif text-2xl mb-4 leading-tight">
                  {serviceTitle}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed group-hover:text-ink/80 transition-colors">
                  {serviceDesc}
                </p>
                <div className="mt-auto pt-8">
                  <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-wood/80 group-hover:text-wood transition-colors mb-3">
                    <span>{t.services.viewSamples}</span>
                    <Maximize2 size={12} />
                  </span>
                  <div className="h-[1px] w-0 bg-wood group-hover:w-full transition-all duration-700"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-ink/60 font-mono text-[10px] uppercase tracking-widest"
          >
            <div className="h-[1px] w-8 bg-ink/20"></div>
            {t.services.footerTag}
            <div className="h-[1px] w-8 bg-ink/20"></div>
          </motion.div>
        </div>
      </div>

      <ProjectModal
        project={selectedServiceProject}
        initialLightbox={openLightboxDirectly}
        onClose={() => {
          setSelectedServiceProject(null);
          setOpenLightboxDirectly(false);
        }}
      />
    </section>
  );
}
