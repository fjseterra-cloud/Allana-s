
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { PROJECTS, ProjectCategory, Project } from '../constants';
import { useState } from 'react';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import { useLocale } from '../context/LocaleContext';

const CATEGORIES: (ProjectCategory | 'All')[] = [
  'All',
  'Architectural Rendering',
  'Cost Estimates',
  'Roadway Design',
  'Plans & Drafting'
];

export default function Gallery() {
  const { t } = useLocale();
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openLightboxDirectly, setOpenLightboxDirectly] = useState(false);

  const getLocalizedProject = (project: Project): Project => {
    const localized = t.gallery.projects[project.id];
    if (!localized) return project;
    return {
      ...project,
      title: localized.title,
      description: localized.description,
      location: localized.location,
    };
  };

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-paper">
      <div className="container mx-auto px-6">
        <SectionHeading title={t.gallery.title} subtitle={t.gallery.subtitle} />

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-xs uppercase tracking-widest font-medium transition-all rounded-sm border cursor-pointer ${
                filter === cat 
                  ? 'bg-wood border-wood text-white shadow-lg shadow-wood/20' 
                  : 'border-ink/10 text-ink/60 hover:border-wood hover:text-wood'
              }`}
            >
              {cat === 'All' ? t.gallery.allFilter : t.gallery.categories[cat]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => {
            const localizedProject = getLocalizedProject(project);
            const localizedCategory = t.gallery.categories[project.category];

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer rounded-sm"
                onClick={() => {
                  setOpenLightboxDirectly(false);
                  setSelectedProject(localizedProject);
                }}
              >
                <img 
                  src={project.imageUrl} 
                  alt={localizedProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Quick Full-Screen Lightbox Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenLightboxDirectly(true);
                    setSelectedProject(localizedProject);
                  }}
                  aria-label={`${t.projectModal.expand} ${localizedProject.title}`}
                  className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 hover:bg-wood text-white rounded-sm backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 shadow-lg"
                >
                  <Maximize2 size={15} />
                </button>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-8 pointer-events-none">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="block text-white/75 font-mono text-[10px] uppercase tracking-[0.22em] mb-2">
                      {localizedCategory}
                    </span>
                    <h3 className="text-white font-serif text-2xl leading-snug mb-3 line-clamp-2">
                      {localizedProject.title}
                    </h3>
                    <div className="w-8 h-[1px] bg-white/75 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        initialLightbox={openLightboxDirectly}
        onClose={() => {
          setSelectedProject(null);
          setOpenLightboxDirectly(false);
        }} 
      />
    </section>
  );
}
