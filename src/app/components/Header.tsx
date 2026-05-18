import { ChevronDown, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoAEB from '../../imports/logoaeb_1.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 leading-none">
            <img
              src={logoAEB}
              alt="Agência Espacial Brasileira"
              className="w-32"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                onMouseEnter={() => setActiveDropdown('sobre')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Sobre o RESBRA
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                onMouseEnter={() => setActiveDropdown('registro')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Registro Espacial
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                onMouseEnter={() => setActiveDropdown('servicos')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Serviços
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                onMouseEnter={() => setActiveDropdown('dados')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Dados e Estatísticas
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                onMouseEnter={() => setActiveDropdown('imprensa')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Imprensa
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            {/* Language Selector */}
            <div className="flex items-center gap-3">
              <button className="text-sm font-medium text-gray-900">PT</button>
              <button className="text-sm text-gray-400 hover:text-gray-600 transition-colors">EN</button>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Buscar ..."
                className="w-32 text-sm text-gray-400 bg-transparent border-none outline-none placeholder:text-gray-400"
              />
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#sobre" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Sobre o RESBRA
              </a>
              <a href="#registro" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Registro Espacial
              </a>
              <a href="#servicos" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Serviços
              </a>
              <a href="#dados" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Dados e Estatísticas
              </a>
              <a href="#imprensa" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Imprensa
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
