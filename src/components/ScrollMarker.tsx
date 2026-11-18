import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { useLocale } from '../context/LocaleContext';

export default function ScrollMarker() {
  const { locale } = useLocale();
  const isRtl = locale === 'ar';
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  const activeProgress = prefersReducedMotion ? scrollYProgress : smoothProgress;

  const translateX = useTransform(activeProgress, (value) => {
    const offset = (value - 1) * 100;
    return `${isRtl ? -offset : offset}%`;
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 inset-x-0 h-[3.5px] z-[60] pointer-events-none overflow-hidden bg-ink/[0.06]"
    >
      <motion.div
        style={{ x: translateX }}
        className={`relative w-full h-full will-change-transform flex items-center ${
          isRtl ? 'justify-start' : 'justify-end'
        }`}
      >
        {/* Marker ink stroke */}
        <div
          className={`w-full h-full opacity-90 ${
            isRtl
              ? 'bg-gradient-to-l from-wood/60 via-wood-light to-[#c8102e]'
              : 'bg-gradient-to-r from-wood/60 via-wood-light to-[#c8102e]'
          }`}
        />
        {/* Chisel-tip marker nib at the leading edge */}
        <span
          className={`absolute top-0 h-full w-3 bg-[#c8102e] shadow-[0_0_8px_rgba(200,16,46,0.45)] ${
            isRtl ? 'left-0 skew-x-12' : 'right-0 -skew-x-12'
          }`}
        />
      </motion.div>
    </div>
  );
}
