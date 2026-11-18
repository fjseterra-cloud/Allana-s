import { Linkedin } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import {
  ArchitecturalCompass,
  ClosingBlueprintBackground,
} from './ClosingBlueprint';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="relative overflow-hidden bg-[#141414] py-16 border-t border-white/5">
      <ClosingBlueprintBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-14">
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-serif text-3xl font-bold tracking-tight text-white mb-4 block"
            >
              AJB<span className="text-wood">.</span>
            </a>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex items-center gap-8 md:gap-10">
            <ArchitecturalCompass />

            <div className="flex items-center gap-4 group cursor-pointer">
              <a
                href="#"
                aria-label={t.footer.linkedin}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-wood hover:border-wood transition-all shrink-0"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="hidden lg:inline-block text-xs uppercase tracking-[0.2em] font-medium text-white/60 group-hover:text-wood transition-colors whitespace-nowrap shrink-0"
              >
                {t.footer.linkedin}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-[10px] uppercase tracking-widest font-bold">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

