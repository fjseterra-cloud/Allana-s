
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Project } from '../constants';
import { useEffect, useState } from 'react';
import { useLocale } from '../context/LocaleContext';

interface Props {
  project: Project | null;
  onClose: () => void;
  initialLightbox?: boolean;
}

export default function ProjectModal({ project, onClose, initialLightbox = false }: Props) {
  const { t } = useLocale();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      // Optionally toggle a class for extra targeting
      document.body.classList.add('modal-open');
      setCurrentImageIndex(0);
      setIsLightboxOpen(initialLightbox);
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      setIsLightboxOpen(false);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [project, initialLightbox]);

  // Determine images to show
  const images = project?.images && project.images.length > 0 ? project.images : (project?.imageUrl ? [project.imageUrl] : []);

  const nextImage = () => {
    if (images.length <= 1) return;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (images.length <= 1) return;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const closeLightbox = () => {
    if (initialLightbox) {
      setIsLightboxOpen(false);
      onClose();
    } else {
      setIsLightboxOpen(false);
    }
  };

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          closeLightbox();
        } else {
          onClose();
        }
      } else if (isLightboxOpen && images.length > 1) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, isLightboxOpen, images.length, initialLightbox]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/95 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-6xl max-h-[92vh] md:h-[85vh] bg-paper rounded-sm shadow-2xl flex flex-col md:flex-row overflow-y-auto md:overflow-hidden"
          >
            {/* Close Button - absolute on desktop, fixed-ish or top-right on mobile */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] bg-wood md:bg-paper/90 md:backdrop-blur-sm md:text-ink text-white p-2 rounded-sm hover:scale-110 md:hover:bg-wood md:hover:text-white transition-all shadow-lg"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-2/3 h-[45vh] min-h-[300px] md:min-h-0 md:h-full shrink-0 relative bg-ink group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={images[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  onClick={() => setIsLightboxOpen(true)}
                  className="w-full h-full object-cover absolute inset-0 cursor-zoom-in"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Expand to full-screen hint */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                aria-label={t.projectModal.expand}
                className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-2 bg-black/50 hover:bg-black/75 text-white text-[10px] uppercase tracking-widest font-medium rounded-sm backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100 transition-all"
              >
                <Maximize2 size={14} />
                <span className="hidden sm:inline">{t.projectModal.expand}</span>
              </button>
              
              {/* Carousel Controls */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/70 md:opacity-0 md:group-hover:opacity-100 transition-all z-10"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/70 md:opacity-0 md:group-hover:opacity-100 transition-all z-10"
                    aria-label="Next Image"
                  >
                    <ChevronRight size={24} />
                  </button>
                  {/* Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {images.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'}`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Optional gradient overlay on mobile for smooth transition to below */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-paper to-transparent md:hidden pointer-events-none z-10"></div>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/3 p-6 md:p-10 lg:p-12 flex flex-col shrink-0 md:h-full md:overflow-y-auto bg-paper relative z-10">
              <span className="font-mono text-xs uppercase tracking-widest text-wood mb-4 block">
                {t.gallery.categories[project.category] || project.category}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
                {project.title}
              </h2>
              
              {project.location && (
                <div className="flex items-center text-ink/60 mb-6 text-sm font-medium">
                  <MapPin size={16} className="mr-2 text-wood shrink-0" />
                  {project.location}
                </div>
              )}

              <div className="w-12 h-1 bg-wood mb-6 shrink-0"></div>
              
              <div className="text-ink/80 leading-relaxed space-y-4 mb-10 text-sm md:text-base">
                <p>{project.description}</p>
              </div>

              <div className="mt-auto pt-8 md:pt-12 border-t border-ink/10 shrink-0">
                <button 
                  onClick={onClose}
                  className="w-full py-4 bg-ink text-paper text-xs uppercase tracking-widest font-bold hover:bg-wood hover:text-white transition-all rounded-sm cursor-pointer"
                >
                  {t.projectModal.closePreview}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Full-screen Lightbox Modal */}
          <AnimatePresence>
            {isLightboxOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeLightbox}
                className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                role="dialog"
                aria-modal="true"
                aria-label={`${project.title} full-screen preview`}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                  aria-label="Close full-screen view"
                  className="fixed top-5 right-5 z-[130] p-3 bg-white/10 hover:bg-wood text-white rounded-full transition-colors cursor-pointer"
                >
                  <X size={22} />
                </button>

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      aria-label="Previous full-screen image"
                      className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[130] p-3 bg-white/10 hover:bg-wood text-white rounded-full transition-colors cursor-pointer"
                    >
                      <ChevronLeft size={26} />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      aria-label="Next full-screen image"
                      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[130] p-3 bg-white/10 hover:bg-wood text-white rounded-full transition-colors cursor-pointer"
                    >
                      <ChevronRight size={26} />
                    </button>
                  </>
                )}

                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-[95vw] max-h-[88vh] flex flex-col items-center cursor-default"
                >
                  <img
                    src={images[currentImageIndex]}
                    alt={`${project.title} - Full Resolution View ${currentImageIndex + 1}`}
                    className="max-w-full max-h-[82vh] w-auto h-auto object-contain rounded-sm shadow-2xl select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="mt-4 flex items-center gap-4 text-white/80 text-xs font-mono uppercase tracking-widest">
                    <span>{project.title}</span>
                    {images.length > 1 && (
                      <span className="text-white/50">
                        {currentImageIndex + 1} / {images.length}
                      </span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}
