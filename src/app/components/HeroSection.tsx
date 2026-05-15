import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[64vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Layer */}
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-4 md:space-y-5"
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-[1.1] tracking-tight max-w-5xl mx-auto">
            Registro e governança das atividades espaciais brasileiras
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed text-justify">
            Plataforma nacional de monitoramento, licenciamento e governança de operações espaciais.
            Gestão integrada de ativos orbitais brasileiros.
          </p>
            <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors rounded">
              Conheça o RESBRA
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
