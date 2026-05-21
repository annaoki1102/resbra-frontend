import { ChevronDown, Search, Menu, X, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import logoAEB from '../../imports/logoaeb_1.png';
import { useI18n } from '../../i18n/I18nProvider';
import type { Locale } from '../../i18n';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();
  const languageMenuRef = useRef<HTMLDivElement>(null);

  const languageOptions: Array<{ shortLabel: string; label: string; value: Locale }> = [
    { shortLabel: 'PT', label: 'Português', value: 'pt-BR' },
    { shortLabel: 'EN', label: 'English', value: 'en' },
    { shortLabel: 'ES', label: 'Español', value: 'es' },
  ];
  const currentLanguage = languageOptions.find((option) => option.value === locale) ?? languageOptions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    }

    if (languageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageMenuOpen]);

  const navItemClass =
    "relative flex items-center gap-1.5 px-4 py-2.5 text-sm text-gray-700 rounded-sm transition-colors duration-200 hover:text-gray-900 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300/60 before:content-[''] before:absolute before:left-4 before:right-4 before:-bottom-0.5 before:h-px before:bg-gray-800 before:origin-left before:scale-x-0 before:transition-transform before:duration-200 hover:before:scale-x-100 focus-visible:before:scale-x-100";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 leading-none">
            <img src={logoAEB} alt={t.header.logoAlt} className="w-32" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            <div className="relative group">
              <button className={navItemClass}>
                {t.header.nav.about}
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button className={navItemClass}>
                {t.header.nav.registry}
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button className={navItemClass}>
                {t.header.nav.services}
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button className={navItemClass}>
                {t.header.nav.data}
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            {/* Language Selector */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setLanguageMenuOpen((prev) => !prev)}
                className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                aria-haspopup="menu"
                aria-expanded={languageMenuOpen}
                aria-label="Selecionar idioma"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium text-gray-900">{currentLanguage.shortLabel}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-md border border-gray-200 bg-white shadow-sm py-1 z-50">
                  {languageOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setLocale(option.value);
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                        locale === option.value
                          ? 'text-gray-900 font-medium bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder={t.header.searchPlaceholder}
                className="w-32 text-sm text-gray-400 bg-transparent border-none outline-none placeholder:text-gray-400"
              />
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#sobre" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {t.header.nav.about}
              </a>
              <a href="#registro" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {t.header.nav.registry}
              </a>
              <a href="#servicos" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {t.header.nav.services}
              </a>
              <a href="#dados" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {t.header.nav.data}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
