import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const partners = [
  { name: 'AgÃªncia Espacial Brasileira', abbr: 'AEB' },
  { name: 'MinistÃ©rio da CiÃªncia e Tecnologia', abbr: 'MCTI' },
  { name: 'Instituto Nacional de Pesquisas Espaciais', abbr: 'INPE' },
  { name: 'ObservatÃ³rio Nacional', abbr: 'ON' },
  { name: 'Comando da AeronÃ¡utica', abbr: 'COMAER' },
  { name: 'AgÃªncia Nacional de TelecomunicaÃ§Ãµes', abbr: 'ANATEL' },
];

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="parceiros" ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-6">
            Rede institucional estratÃ©gica
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            IntegraÃ§Ã£o com agÃªncias governamentais, instituiÃ§Ãµes de pesquisa e operadores do setor espacial brasileiro
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8 md:mb-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.abbr}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center justify-center p-8 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 transition-all rounded-lg group"
            >
              <div className="w-16 h-16 bg-white border border-gray-200 rounded flex items-center justify-center mb-4 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                <span className="text-lg font-medium text-gray-700 group-hover:text-blue-900 transition-colors">
                  {partner.abbr}
                </span>
              </div>
              <p className="text-xs text-center text-gray-500 leading-tight">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
