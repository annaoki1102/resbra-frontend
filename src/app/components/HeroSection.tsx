import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[64vh] flex items-center justify-center overflow-hidden bg-[#f7f9fc]">
      {/* Institutional Background Illustration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(130%_80%_at_50%_50%,rgba(255,255,255,0.96)_0%,rgba(246,249,253,0.96)_36%,rgba(233,240,249,0.92)_100%)]" />

        {/* Orbital and geospatial lines */}
        <svg
          viewBox="0 0 1600 900"
          className="absolute inset-0 h-full w-full opacity-70"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="earthBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f274f" />
              <stop offset="58%" stopColor="#174a88" />
              <stop offset="100%" stopColor="#1e67ab" />
            </linearGradient>
            <radialGradient id="atmoGlow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="rgba(130,190,238,0.35)" />
              <stop offset="62%" stopColor="rgba(86,151,214,0.20)" />
              <stop offset="100%" stopColor="rgba(86,151,214,0)" />
            </radialGradient>
          </defs>

          {/* Left partial Earth */}
          <g transform="translate(-340 520)">
            <circle cx="0" cy="0" r="420" fill="url(#atmoGlow)" />
            <circle cx="0" cy="0" r="355" fill="url(#earthBlue)" />
            <path
              d="M-285 -38 C-208 -76 -124 -72 -50 -18 C18 30 70 92 120 158"
              stroke="rgba(191,224,246,0.28)"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M-250 82 C-168 26 -74 -8 34 -2 C112 2 176 30 236 74"
              stroke="rgba(191,224,246,0.22)"
              strokeWidth="1"
              fill="none"
            />
          </g>

          {/* Right lower partial Earth */}
          <g transform="translate(1600 970)">
            <circle cx="0" cy="0" r="360" fill="url(#atmoGlow)" />
            <circle cx="0" cy="0" r="290" fill="url(#earthBlue)" opacity="0.9" />
          </g>

          {/* Orbit lines around center, kept subtle for readability */}
          <ellipse
            cx="800"
            cy="520"
            rx="610"
            ry="240"
            fill="none"
            stroke="rgba(28,84,141,0.18)"
            strokeWidth="1.2"
          />
          <ellipse
            cx="800"
            cy="500"
            rx="520"
            ry="200"
            fill="none"
            stroke="rgba(28,84,141,0.14)"
            strokeWidth="1"
          />
          <ellipse
            cx="800"
            cy="470"
            rx="420"
            ry="165"
            fill="none"
            stroke="rgba(53,120,183,0.12)"
            strokeWidth="1"
          />

          {/* Monitoring nodes */}
          <g fill="rgba(40,111,173,0.32)">
            <circle cx="420" cy="520" r="3" />
            <circle cx="520" cy="452" r="2.5" />
            <circle cx="1010" cy="448" r="2.5" />
            <circle cx="1188" cy="530" r="3" />
            <circle cx="970" cy="605" r="2.5" />
            <circle cx="640" cy="608" r="2.5" />
          </g>
          <g stroke="rgba(120,178,223,0.22)" strokeWidth="0.9">
            <line x1="420" y1="520" x2="520" y2="452" />
            <line x1="520" y1="452" x2="640" y2="608" />
            <line x1="640" y1="608" x2="970" y2="605" />
            <line x1="970" y1="605" x2="1188" y2="530" />
            <line x1="1188" y1="530" x2="1010" y2="448" />
          </g>
        </svg>

        {/* Soft side vignettes to keep text legible */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.84)_28%,rgba(255,255,255,0.68)_46%,rgba(255,255,255,0.22)_72%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/24 via-transparent to-[#f7f9fc]/72" />
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
        </motion.div>
      </div>
    </section>
  );
}
