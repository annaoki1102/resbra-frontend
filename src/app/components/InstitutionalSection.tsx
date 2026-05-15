import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function InstitutionalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight">
              RegulamentaÃ§Ã£o e governanÃ§a espacial
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
              <p className="text-lg">
                O RESBRA Ã© a infraestrutura nacional para registro, monitoramento e licenciamento
                de operaÃ§Ãµes espaciais brasileiras, desenvolvido pela AgÃªncia Espacial Brasileira
                em conformidade com tratados internacionais e marcos regulatÃ³rios nacionais.
              </p>
              <p>
                A plataforma integra dados de mÃºltiplas fontes governamentais, centros de pesquisa
                e operadores privados, fornecendo uma visÃ£o unificada dos ativos espaciais do Brasil
                e suas trajetÃ³rias orbitais.
              </p>
              <p>
                AtravÃ©s de tecnologias avanÃ§adas de anÃ¡lise geoespacial e inteligÃªncia de dados,
                o sistema garante a conformidade regulatÃ³ria, seguranÃ§a orbital e suporte Ã  tomada
                de decisÃµes estratÃ©gicas no setor espacial brasileiro.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-gray-200"></div>
              <span className="text-sm text-gray-400">AgÃªncia Espacial Brasileira</span>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1712512162392-d523620fbaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzYXRlbGxpdGUlMjBvcmJpdCUyMHNwYWNlJTIwdGVjaG5vbG9neSUyMG1pbmltYWx8ZW58MXx8fHwxNzc4NzczNTg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="SatÃ©lite sobre a Terra"
                className="w-full h-full object-cover opacity-75 contrast-110 saturate-110"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

