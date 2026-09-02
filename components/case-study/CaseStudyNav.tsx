'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, ArrowLeft, Menu, X } from 'lucide-react';
import { useTheme } from '@/components/portfolio/ThemeProvider';
import { profile } from '@/lib/data';
import { cn } from '@/lib/utils';

const sectionLinks = [
  { label: 'Metrics', href: '#metrics' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'PEV Loop', href: '#pev-stepper' },
  { label: 'Innovations', href: '#innovations' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'Docker', href: '#docker' },
];

export function CaseStudyNav() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-nav border-b border-white/5'
            : 'bg-transparent'
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 group"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm group-hover:bg-blue-500 transition-colors duration-300">
                  <span className="text-[10px] font-bold text-white">
                    {profile.initials}
                  </span>
                </div>
                <span className="text-sm font-semibold text-white/80 hidden sm:block">
                  {profile.name}
                </span>
              </Link>

              <span className="hidden sm:block text-slate-700">|</span>

              <Link
                href="/#projects"
                className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                Projects
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-0.5">
              {sectionLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-30 bg-slate-950/98 backdrop-blur-md border-b border-white/5"
          >
            <div className="container-wide py-4">
              <nav className="flex flex-col gap-1">
                <Link
                  href="/#projects"
                  className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back to Projects
                </Link>
                {sectionLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
