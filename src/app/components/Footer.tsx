export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-semibold text-sm">RES</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">RESBRA</span>
                <span className="text-xs text-gray-500">Registro Espacial Brasileiro</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Plataforma nacional de monitoramento, licenciamento e governança de operações espaciais.
            </p>
          </div>

          {/* Links - Institucional */}
          <div>
            <h3 className="text-white font-medium mb-4">Institucional</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre o RESBRA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marco regulatório</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tratados internacionais</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Governança</a></li>
            </ul>
          </div>

          {/* Links - Serviços */}
          <div>
            <h3 className="text-white font-medium mb-4">Serviços</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Registro de ativos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licenciamento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Monitoramento orbital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dados geoespaciais</a></li>
            </ul>
          </div>

          {/* Links - Suporte */}
          <div>
            <h3 className="text-white font-medium mb-4">Suporte</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentação técnica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portal de atendimento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 RESBRA - Agência Espacial Brasileira. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-white transition-colors">Acessibilidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
