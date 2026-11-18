
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Linkedin, Mail, Download, Moon, Sun, Globe, ChevronDown, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLocale } from '../context/LocaleContext';
import { RESUME_URL, RESUME_FILENAME } from '../constants';
import { LOCALE_OPTIONS } from '../translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLangMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentLocaleOption = LOCALE_OPTIONS.find((opt) => opt.code === locale) || LOCALE_OPTIONS[0];

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#portfolio' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`group font-serif text-2xl font-bold tracking-tight transition-all duration-300 hover:scale-105 active:scale-95 ${scrolled ? 'text-wood' : 'text-ink'}`}>
          AJB<span className={`transition-colors duration-300 ${scrolled ? 'text-ink' : 'text-wood'} group-hover:text-wood-light`}>.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className={`group text-sm font-medium uppercase tracking-widest transition-colors duration-300 relative ${
                scrolled ? 'text-ink/70 hover:text-ink' : 'text-ink/80 hover:text-ink'
              }`}
            >
              <span>{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-wood transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className={`w-[1px] h-4 ${scrolled ? 'bg-ink/20' : 'bg-ink/10'}`}></div>
          <a 
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            download={RESUME_FILENAME}
            aria-label={t.nav.resume}
            className={`group text-sm font-medium uppercase tracking-widest transition-colors duration-300 flex items-center gap-2 relative ${
              scrolled ? 'text-ink/70 hover:text-ink' : 'text-ink/80 hover:text-ink'
            }`}
          >
            <span>{t.nav.resume}</span>
            <Download size={14} className="transition-transform group-hover:-translate-y-1 group-hover:text-wood" />
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-wood transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Language Switcher Dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              type="button"
              onClick={() => setLangMenuOpen((prev) => !prev)}
              aria-label={t.nav.language}
              aria-expanded={langMenuOpen}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border border-ink/10 hover:border-wood/50 text-xs font-mono uppercase tracking-wider text-ink/80 hover:text-ink transition-colors cursor-pointer"
            >
              <Globe size={14} className="text-wood" />
              <span>{currentLocaleOption.short}</span>
              <ChevronDown size={13} className={`transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                  className="absolute right-0 mt-2 w-52 bg-paper border border-ink/10 rounded-sm shadow-2xl shadow-ink/10 py-1.5 z-50"
                  role="menu"
                >
                  {LOCALE_OPTIONS.map((opt) => {
                    const isActive = opt.code === locale;
                    return (
                      <button
                        key={opt.code}
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setLocale(opt.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-xs flex items-center justify-between transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-wood/10 text-wood font-semibold'
                            : 'text-ink/80 hover:bg-ink/5 hover:text-ink'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {isActive && <Check size={13} className="text-wood shrink-0" />}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-300 hover:bg-ink/5 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a 
            href="#contact" 
            className="bg-wood hover:bg-wood-light text-white px-6 py-2.5 rounded-sm text-sm font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-wood/20"
          >
            {t.nav.letsTalk}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden transition-colors text-ink"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-paper shadow-xl border-t border-ink/5 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <div className="flex justify-between items-center border-b border-ink/5 pb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-ink/40">{t.nav.theme}</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-ink/5 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              </div>

              {/* Mobile Language Switcher */}
              <div className="border-b border-ink/5 pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-ink/40 flex items-center gap-1.5">
                    <Globe size={13} className="text-wood" />
                    {t.nav.language}
                  </span>
                  <span className="text-xs font-mono text-wood">{currentLocaleOption.label}</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {LOCALE_OPTIONS.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      onClick={() => {
                        setLocale(opt.code);
                        setIsOpen(false);
                      }}
                      className={`py-1.5 px-2 text-[11px] font-mono rounded-sm border transition-colors ${
                        locale === opt.code
                          ? 'bg-wood border-wood text-white font-semibold'
                          : 'border-ink/10 text-ink/70 hover:border-wood/50'
                      }`}
                    >
                      {opt.short}
                    </button>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  className="text-lg font-serif text-ink border-b border-ink/5 pb-2 transition-colors hover:text-wood"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                download={RESUME_FILENAME}
                aria-label={t.nav.resume}
                className="text-lg font-serif text-ink border-b border-ink/5 pb-2 transition-colors hover:text-wood flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                <span>{t.nav.resume}</span>
                <Download size={18} className="text-wood" />
              </a>
              <div className="flex gap-4 pt-4">
                <a href="#" className="text-wood hover:scale-110 transition-transform"><Instagram size={20} /></a>
                <a href="#" className="text-wood hover:scale-110 transition-transform"><Linkedin size={20} /></a>
                <a href="#" className="text-wood hover:scale-110 transition-transform"><Mail size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
