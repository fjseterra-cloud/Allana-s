
import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Mail, Phone, MapPin, Send, Check, MessageCircle } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

const RECIPIENT_EMAIL = 'ar.allanabaloy@gmail.com';
const WHATSAPP_NUMBER = '639954337242';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type ContactField = 'fullName' | 'email' | 'message';
type FieldFlags = Partial<Record<ContactField, boolean>>;

export default function Contact() {
  const { t } = useLocale();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Architectural Rendering');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldFlags>({});
  const [shakingFields, setShakingFields] = useState<FieldFlags>({});
  const [gmailHref, setGmailHref] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const shakeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (shakeTimerRef.current !== null) {
        window.clearTimeout(shakeTimerRef.current);
      }
    };
  }, []);

  const triggerShake = (invalid: FieldFlags) => {
    if (shakeTimerRef.current !== null) {
      window.clearTimeout(shakeTimerRef.current);
    }
    setShakingFields({});
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setShakingFields(invalid);
      });
    });
    shakeTimerRef.current = window.setTimeout(() => {
      setShakingFields({});
    }, 480);
  };

  const clearFieldError = (field: ContactField) => {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: false }));
    }
    if (error) {
      setError('');
    }
  };

  const buildGmailHref = () => {
    const subject = encodeURIComponent(
      `Architectural Inquiry: ${projectType} — ${fullName.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${fullName.trim()}\nEmail: ${email.trim()}\nProject Type: ${projectType}\n\nMessage:\n${message.trim()}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(RECIPIENT_EMAIL)}&su=${subject}&body=${body}`;
  };

  const buildWhatsAppHref = () => {
    const parts = [
      `Hi Allana, I'm reaching out regarding ${projectType}.`,
      fullName.trim() ? `Name: ${fullName.trim()}` : '',
      email.trim() ? `Email: ${email.trim()}` : '',
      message.trim() ? `Message: ${message.trim()}` : '',
    ].filter(Boolean);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(parts.join('\n'))}`;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const isNameMissing = !trimmedName;
    const isEmailMissing = !trimmedEmail;
    const isEmailInvalid = !isEmailMissing && !EMAIL_REGEX.test(trimmedEmail);
    const isMessageMissing = !trimmedMessage;

    if (isNameMissing || isEmailMissing || isEmailInvalid || isMessageMissing) {
      const invalid: FieldFlags = {
        fullName: isNameMissing,
        email: isEmailMissing || isEmailInvalid,
        message: isMessageMissing,
      };
      setFieldErrors(invalid);
      setError(
        !isNameMissing && !isMessageMissing && isEmailInvalid
          ? t.contact.invalidEmailError
          : t.contact.validationError
      );
      triggerShake(invalid);
      return;
    }

    setError('');
    setFieldErrors({});
    const href = buildGmailHref();
    setGmailHref(href);

    const link = document.createElement('a');
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyMessage = async () => {
    const summary = `To: ${RECIPIENT_EMAIL}\nName: ${fullName.trim()}\nEmail: ${email.trim()}\nProject Type: ${projectType}\n\n${message.trim()}`;
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API unavailable
    }
  };

  return (
    <section id="contact" className="py-24 bg-paper relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 wood-texture-overlay opacity-[0.03]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Info Side */}
          <div className="w-full lg:w-1/3 text-ink">
            <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />
            <p className="text-ink/60 text-lg mb-12 font-light leading-relaxed">
              {t.contact.intro}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-3 bg-wood/10 rounded-sm text-wood group-hover:bg-wood group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-wood font-medium mb-1">{t.contact.emailLabel}</p>
                  <a href={`mailto:${RECIPIENT_EMAIL}`} className="text-base opacity-80 hover:text-wood transition-colors">
                    {RECIPIENT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-3 bg-wood/10 rounded-sm text-wood group-hover:bg-wood group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-wood font-medium mb-1">{t.contact.phoneLabel}</p>
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-base opacity-80 hover:text-wood transition-colors">
                    +63 (995) 433-7242
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-3 bg-wood/10 rounded-sm text-wood group-hover:bg-wood group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-wood font-medium mb-1">{t.contact.locationLabel}</p>
                  <p className="text-base opacity-80 leading-relaxed">
                    {t.contact.locationLine1} <br /> {t.contact.locationLine2}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3 bg-paper p-8 md:p-12 rounded-sm shadow-xl shadow-ink/5 border border-ink/5">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`space-y-2 ${shakingFields.fullName ? 'contact-field-shake' : ''}`}>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">{t.contact.fullNameLabel}</label>
                  <input 
                    type="text" 
                    required
                    aria-invalid={Boolean(fieldErrors.fullName)}
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      clearFieldError('fullName');
                    }}
                    placeholder={t.contact.fullNamePlaceholder}
                    className={`w-full px-4 py-3 bg-paper border outline-none transition-all text-sm ${
                      fieldErrors.fullName
                        ? 'border-red-500/70 focus:border-red-500'
                        : 'border-ink/5 focus:border-wood'
                    }`}
                  />
                </div>
                <div className={`space-y-2 ${shakingFields.email ? 'contact-field-shake' : ''}`}>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">{t.contact.emailAddressLabel}</label>
                  <input 
                    type="email" 
                    required
                    aria-invalid={Boolean(fieldErrors.email)}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearFieldError('email');
                    }}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 bg-paper border outline-none transition-all text-sm ${
                      fieldErrors.email
                        ? 'border-red-500/70 focus:border-red-500'
                        : 'border-ink/5 focus:border-wood'
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">{t.contact.projectTypeLabel}</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3 bg-paper border border-ink/5 focus:border-wood outline-none transition-all text-sm appearance-none"
                >
                  <option value="Architectural Rendering">{t.gallery.categories['Architectural Rendering']}</option>
                  <option value="Cost Estimates">{t.gallery.categories['Cost Estimates']}</option>
                  <option value="Roadway Design">{t.gallery.categories['Roadway Design']}</option>
                  <option value="CAD Drafting">{t.gallery.categories['Plans & Drafting']}</option>
                </select>
              </div>

              <div className={`space-y-2 ${shakingFields.message ? 'contact-field-shake' : ''}`}>
                <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">{t.contact.messageLabel}</label>
                <textarea 
                  rows={6}
                  required
                  aria-invalid={Boolean(fieldErrors.message)}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    clearFieldError('message');
                  }}
                  placeholder={t.contact.messagePlaceholder}
                  className={`w-full px-4 py-3 bg-paper border outline-none transition-all text-sm resize-none ${
                    fieldErrors.message
                      ? 'border-red-500/70 focus:border-red-500'
                      : 'border-ink/5 focus:border-wood'
                  }`}
                ></textarea>
              </div>

              {error && (
                <p role="alert" className="text-xs text-red-500 font-medium">{error}</p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-wood text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-wood-light transition-all rounded-sm shadow-xl shadow-wood/20 cursor-pointer"
                >
                  {t.contact.sendButton}
                  <Send size={16} />
                </motion.button>

                <motion.a
                  href={buildWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 border border-wood/40 hover:border-wood text-ink hover:bg-wood hover:text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all rounded-sm"
                >
                  <span>{t.contact.whatsappButton}</span>
                  <MessageCircle size={16} />
                </motion.a>
              </div>

              {gmailHref && (
                <div className="p-4 border border-wood/30 bg-wood/5 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-ink/80">
                  <span>
                    {t.contact.openingGmail} <strong className="text-ink">{RECIPIENT_EMAIL}</strong>
                  </span>
                  <div className="flex items-center gap-4 shrink-0">
                    <a
                      href={gmailHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uppercase tracking-widest font-bold text-wood hover:underline"
                    >
                      {t.contact.openInGmail}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="uppercase tracking-widest font-bold text-ink/70 hover:text-wood flex items-center gap-1 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check size={13} className="text-wood" /> {t.contact.copied}
                        </>
                      ) : (
                        t.contact.copyDetails
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
