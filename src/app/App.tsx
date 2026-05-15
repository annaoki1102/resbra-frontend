import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Satellite, Globe, FileCheck, Database, Network, BarChart3, Activity, MapPin, Radio } from 'lucide-react';
import resbra from '../imports/resbra.png';

const capabilities = [
  {
    icon: FileCheck,
    title: 'Registro espacial',
    description: 'Cadastro oficial de satélites, estações terrenas e operadores licenciados no território nacional.'
  },
  {
    icon: Satellite,
    title: 'Monitoramento orbital',
    description: 'Acompanhamento em tempo real de trajetórias, manobras e eventos de ativos espaciais brasileiros.'
  },
  {
    icon: Globe,
    title: 'Licenciamento',
    description: 'Gestão de autorizações e conformidade regulatória para operações espaciais no Brasil.'
  },
  {
    icon: Database,
    title: 'Dados geoespaciais',
    description: 'Repositório centralizado de informações orbitais, telemetria e parâmetros técnicos.'
  },
  {
    icon: Network,
    title: 'Integração institucional',
    description: 'Interface com agências governamentais, centros de pesquisa e operadores privados.'
  },
  {
    icon: BarChart3,
    title: 'Inteligência analítica',
    description: 'Análises preditivas, detecção de anomalias e suporte à decisão estratégica.'
  }
];

const partners = [
  { name: 'Agência Espacial Brasileira', abbr: 'AEB' },
  { name: 'Ministério da Ciência e Tecnologia', abbr: 'MCTI' },
  { name: 'Instituto Nacional de Pesquisas Espaciais', abbr: 'INPE' },
  { name: 'Observatório Nacional', abbr: 'ON' },
  { name: 'Comando da Aeronáutica', abbr: 'COMAER' },
  { name: 'Agência Nacional de Telecomunicações', abbr: 'ANATEL' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] md:min-h-[64vh] flex items-center justify-center overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <img
              // Temporary subtle Earth background. Replace with official AEB/NASA/ESA asset when available.
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
              alt="Terra vista do espaço"
              className="w-full h-full object-cover object-[72%_center] opacity-[0.75]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/8 to-white/18"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.24)_36%,rgba(255,255,255,0.14)_62%,rgba(255,255,255,0.02)_84%,rgba(255,255,255,0)_100%)]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-12 text-center">
            <div className="space-y-4 md:space-y-5">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-[1.1] tracking-tight max-w-5xl mx-auto">
                Registro e governança das atividades espaciais brasileiras
              </h1>

              <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed text-justify">
                Plataforma nacional de monitoramento, licenciamento e governança de operações espaciais.
                Gestão integrada de ativos orbitais brasileiros.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 md:pt-3">
                <button className="px-8 py-4 bg-blue-900 text-white hover:bg-blue-800 transition-all rounded">
                  Acessar plataforma
                </button>
                <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors rounded">
                  Conheça o RESBRA
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Institutional Section */}
        <section id="sobre" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight">
                  Regulamentação e governança espacial
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
                  <p className="text-lg">
                    O RESBRA é a infraestrutura nacional para registro, monitoramento e licenciamento
                    de operações espaciais brasileiras, desenvolvido pela Agência Espacial Brasileira
                    em conformidade com tratados internacionais e marcos regulatórios nacionais.
                  </p>
                  <p>
                    A plataforma integra dados de múltiplas fontes governamentais, centros de pesquisa
                    e operadores privados, fornecendo uma visão unificada dos ativos espaciais do Brasil
                    e suas trajetórias orbitais.
                  </p>
                  <p>
                    Através de tecnologias avançadas de análise geoespacial e inteligência de dados,
                    o sistema garante a conformidade regulatória, segurança orbital e suporte à tomada
                    de decisões estratégicas no setor espacial brasileiro.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="h-px flex-1 bg-gray-200"></div>
                  <span className="text-sm text-gray-400">Agência Espacial Brasileira</span>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1712512162392-d523620fbaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Satélite sobre a Terra"
                    className="w-full h-full object-cover opacity-75 contrast-110 saturate-110"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capacidades" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight">
                Plataforma integrada de gestão espacial
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="group p-8 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 rounded-lg"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <capability.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {capability.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section id="plataforma" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-6">
                Centro de controle geoespacial
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                Interface unificada para monitoramento, análise e gestão de operações espaciais brasileiras
              </p>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-gray-900 px-8 py-6 flex items-center border-b border-gray-800">
                  <span className="text-white font-medium tracking-wide">RESBRA</span>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Activity className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-500">Ativos ativos</span>
                      </div>
                      <div className="text-3xl font-light text-gray-900">247</div>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-500">Órbitas</span>
                      </div>
                      <div className="text-3xl font-light text-gray-900">18</div>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Radio className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-500">Estações</span>
                      </div>
                      <div className="text-3xl font-light text-gray-900">34</div>
                    </div>
                  </div>

                  <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg border border-gray-200 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Dashboard interface"
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <Globe className="w-16 h-16 text-blue-900/20 mx-auto" />
                        <p className="text-gray-400 text-sm">Visualização geoespacial integrada</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-16 -right-16 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section id="parceiros" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-6">
                Ecossistema espacial brasileiro
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                Integração com agências governamentais, instituições de pesquisa e operadores do setor espacial brasileiro
              </p>
            </div>

            {/* Ecosystem Diagram */}
            <div className="flex items-center justify-center mb-8 md:mb-12">
              <img
                src={resbra}
                alt="Ecossistema RESBRA - Agência Espacial Brasileira"
                className="max-w-3xl w-full h-auto"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

