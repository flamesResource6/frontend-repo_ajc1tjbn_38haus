import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Skull, Zap, Ghost, GlobeLock, Bitcoin, Server, CircuitBoard, Sparkles, ArrowDown } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Section = ({ children, className = '' }) => (
  <section className={`relative w-full max-w-6xl mx-auto px-6 ${className}`}>{children}</section>
)

const PulseDot = () => (
  <span className="relative inline-flex h-2.5 w-2.5">
    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_12px_2px_rgba(16,185,129,0.9)]"></span>
  </span>
)

const NeonTitle = ({ children }) => (
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-emerald-300 drop-shadow-neon mb-4"
  >
    {children}
  </motion.h1>
)

const NeonSub = ({ children }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.1 }}
    className="text-emerald-200/90 text-lg sm:text-xl md:text-2xl drop-shadow-neon-soft"
  >
    {children}
  </motion.p>
)

const StatCard = ({ Icon, title, text }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="group relative overflow-hidden rounded-xl border border-emerald-500/20 bg-black/40 backdrop-blur-md p-5 sm:p-6 shadow-[0_0_24px_rgba(16,185,129,0.15)] hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] transition"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(16,185,129,0.18),transparent_50%)]" />
    <div className="flex items-start gap-4">
      <div className="mt-1 text-emerald-400 drop-shadow-neon">
        <Icon className="h-7 w-7" />
      </div>
      <div>
        <h3 className="text-emerald-300 font-semibold text-lg drop-shadow-neon-soft">{title}</h3>
        <p className="text-emerald-100/80 leading-relaxed text-sm sm:text-base">{text}</p>
      </div>
    </div>
    <div className="mt-4 flex items-center gap-2 text-emerald-400/80 text-xs">
      <PulseDot />
      <span>glow: active</span>
    </div>
  </motion.div>
)

const StoryParagraph = ({ children, delay = 0 }) => (
  <motion.p
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay }}
    className="text-emerald-100/85 leading-8 md:leading-9 text-base md:text-lg drop-shadow-neon-soft"
  >
    {children}
  </motion.p>
)

function App() {
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll('.group')
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty('--x', `${x}px`)
      card.style.setProperty('--y', `${y}px`)
    })
  }

  return (
    <div onMouseMove={handleMouseMove} className="min-h-screen bg-[#030b0a] relative text-white">
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 bg-[linear-gradient(rgba(22,101,52,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(22,101,52,0.15)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay bg-noise" />

      {/* Nav */}
      <nav className="relative z-10 w-full">
        <Section className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_24px_rgba(16,185,129,0.6)]">
              <Ghost className="h-5 w-5 text-emerald-300 drop-shadow-neon" />
            </div>
            <div className="leading-tight">
              <div className="text-emerald-300 font-semibold tracking-wide drop-shadow-neon-soft">BRUXO</div>
              <div className="text-emerald-200/70 text-xs">The Ghost in the Code</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-emerald-300/80">
            <Skull className="h-5 w-5 drop-shadow-neon-soft" />
            <Shield className="h-5 w-5 drop-shadow-neon-soft" />
            <CircuitBoard className="h-5 w-5 drop-shadow-neon-soft" />
          </div>
        </Section>
      </nav>

      {/* Hero with Spline */}
      <header className="relative h-[80vh] sm:h-[85vh] md:h-[90vh]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030b0a] via-[#030b0a]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />

        <Section className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/40 px-3 py-1 text-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.4)]">
              <PulseDot />
              <span className="text-xs sm:text-sm">STATUS: ONLINE — ACCESS GRANTED</span>
            </div>
          </motion.div>
          <div className="mt-5">
            <NeonTitle>Bruxo</NeonTitle>
            <NeonSub>The Ghost in the Code</NeonSub>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-emerald-300/90">
            <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-black/40 px-3 py-2">
              <GlobeLock className="h-4 w-4" />
              <span className="text-sm">Government Firewalls</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-black/40 px-3 py-2">
              <Server className="h-4 w-4" />
              <span className="text-sm">Global Bank Servers</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-black/40 px-3 py-2">
              <Bitcoin className="h-4 w-4" />
              <span className="text-sm">Bitcoin Scams Exposed</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-black/40 px-3 py-2">
              <Zap className="h-4 w-4" />
              <span className="text-sm">No System is Safe</span>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3 text-emerald-300/80">
            <ArrowDown className="h-5 w-5 animate-bounce drop-shadow-neon-soft" />
            <span className="text-xs">Scroll to decrypt the legend</span>
          </div>
        </Section>
      </header>

      {/* Quick facts */}
      <main className="relative z-10">
        <Section className="py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard Icon={Skull} title="Alias" text="Bruxo — Portuguese for sorcerer. A phantom in networks, unseen and unfollowed." />
            <StatCard Icon={Shield} title="Occupation" text="Black hat hacker, cyber criminal, digital phantom." />
            <StatCard Icon={Server} title="Known For" text="Breaching banks, dismantling surveillance, shattering illusions of control." />
            <StatCard Icon={Bitcoin} title="Reputation" text="Exposed million-dollar Bitcoin scams. To some: criminal. To others: legend." />
          </div>
        </Section>

        {/* Story */}
        <Section className="pb-10 md:pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 drop-shadow-neon">Biography</h2>
          </motion.div>

          <div className="space-y-6">
            <StoryParagraph delay={0.05}>
              They call him Bruxo — the word means sorcerer in Portuguese, and that’s exactly what he is in the world of zeros and ones. No one knows his real face, his real name, or even his real voice. He exists only as a flicker on dark web forums, a glitch in government firewalls, and a whisper in cybercrime task forces.
            </StoryParagraph>
            <StoryParagraph delay={0.1}>
              Bruxo started as an anonymous coder in underground hacker groups. By his twenties, he had already infiltrated multiple financial institutions, not for money — but for chaos, truth, and power. His hacks were never random. Each one carried a message: “No system is safe. No power is absolute.”
            </StoryParagraph>
            <StoryParagraph delay={0.15}>
              He dismantled corrupt Bitcoin scam networks worth millions, exposed secret databases of government surveillance, and erased the digital footprints of whistleblowers and rebels. To the system, he is a criminal. To the underground, he’s a legend.
            </StoryParagraph>
            <StoryParagraph delay={0.2}>
              Authorities from five countries have tried to trace him — but every lead ends in smoke. His digital fingerprint changes with every attack. Some say he’s a collective, not a person. Others believe he’s a rogue AI he built himself.
            </StoryParagraph>
            <StoryParagraph delay={0.25}>
              All we know is one thing — when you hear “Bruxo was here” flashing across your screen, it’s already too late.
            </StoryParagraph>
          </div>
        </Section>

        {/* Footer */}
        <Section className="py-12">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-black/40 p-6 md:p-8 text-center shadow-[0_0_40px_rgba(16,185,129,0.25)]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_60%)]" />
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/30 bg-black/40 text-emerald-300 drop-shadow-neon-soft"
              >
                <Sparkles className="h-4 w-4" />
                <span className="text-sm tracking-wide">Bruxo was here</span>
              </motion.div>
              <div className="mt-4 text-emerald-200/90 text-sm">
                © {new Date().getFullYear()} Digital Phantom. All signals encrypted.
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}

export default App
