import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Satellite, Globe, FileCheck, Database, Network, BarChart3 } from 'lucide-react';

const capabilities = [
  {
    icon: FileCheck,
    title: 'Registro espacial',
    description: 'Cadastro oficial de satÃ©lites, estaÃ§Ãµes terrenas e operadores licenciados no territÃ³rio nacional.'
  },
  {
    icon: Satellite,
    title: 'Monitoramento orbital',
    description: 'Acompanhamento em tempo real de trajetÃ³rias, manobras e eventos de ativos espaciais brasileiros.'
  },
  {
    icon: Globe,
    title: 'Licenciamento',
    description: 'GestÃ£o de autorizaÃ§Ãµes e conformidade regulatÃ³ria para operaÃ§Ãµes espaciais no Brasil.'
  },
  {
    icon: Database,
    title: 'Dados geoespaciais',
    description: 'RepositÃ³rio centralizado de informaÃ§Ãµes orbitais, telemetria e parÃ¢metros tÃ©cnicos.'
  },
  {
    icon: Network,
    title: 'IntegraÃ§Ã£o institucional',
    description: 'Interface com agÃªncias governamentais, centros de pesquisa e operadores privados.'
  },
  {
    icon: BarChart3,
    title: 'InteligÃªncia analÃ­tica',
    description: 'AnÃ¡lises preditivas, detecÃ§Ã£o de anomalias e suporte Ã  decisÃ£o estratÃ©gica.'
  }
];

export function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capacidades" ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight">
            Plataforma integrada de gestÃ£o espacial
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

