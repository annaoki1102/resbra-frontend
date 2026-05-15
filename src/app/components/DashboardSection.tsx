import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Activity, MapPin, Radio } from 'lucide-react';

export function DashboardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="plataforma" ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-6">
            Centro de controle geoespacial
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            Interface unificada para monitoramento, anÃ¡lise e gestÃ£o de operaÃ§Ãµes espaciais brasileiras
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Dashboard Container */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
            {/* Dashboard Header */}
            <div className="bg-gray-900 px-8 py-6 flex items-center border-b border-gray-800">
              <span className="text-white font-medium tracking-wide">RESBRA</span>
            </div>

            {/* Dashboard Content */}
            <div className="p-8">
              {/* Stats Cards */}
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
                    <span className="text-sm text-gray-500">Ã“rbitas</span>
                  </div>
                  <div className="text-3xl font-light text-gray-900">18</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Radio className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-500">EstaÃ§Ãµes</span>
                  </div>
                  <div className="text-3xl font-light text-gray-900">34</div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg border border-gray-200 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwaW50ZXJmYWNlJTIwY2xlYW58ZW58MXx8fHwxNzc4NzczNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dashboard interface"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <Globe className="w-16 h-16 text-blue-900/20 mx-auto" />
                    <p className="text-gray-400 text-sm">VisualizaÃ§Ã£o geoespacial integrada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-16 -right-16 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
