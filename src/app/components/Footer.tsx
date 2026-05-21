import { useI18n } from '../../i18n/I18nProvider';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col items-start leading-tight">
              <span className="text-sm font-medium tracking-wide text-white">RESBRA</span>
              <span className="text-xs text-gray-500">{t.footer.brandSubtitle}</span>
            </div>
            <p className="text-sm leading-relaxed">{t.footer.description}</p>
          </div>

          {/* Links - Institucional */}
          <div>
            <h3 className="text-white font-medium mb-4">{t.footer.institutional.title}</h3>
            <ul className="space-y-3 text-sm">
              {t.footer.institutional.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Serviços */}
          <div>
            <h3 className="text-white font-medium mb-4">{t.footer.services.title}</h3>
            <ul className="space-y-3 text-sm">
              {t.footer.services.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Suporte */}
          <div>
            <h3 className="text-white font-medium mb-4">{t.footer.support.title}</h3>
            <ul className="space-y-3 text-sm">
              {t.footer.support.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">{t.footer.copyright}</p>
          <div className="flex items-center gap-6 text-sm">
            {t.footer.legalLinks.map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
