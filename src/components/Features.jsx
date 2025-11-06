import { Rocket, Sparkles, Shield, Cpu } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Launch faster',
    desc: 'Spin up full-stack projects in minutes with best-practice defaults.'
  },
  {
    icon: Sparkles,
    title: 'AI assisted',
    desc: 'Generate components, APIs, and tests with smart suggestions.'
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Hardened templates, auth patterns, and safe deploys built-in.'
  },
  {
    icon: Cpu,
    title: 'Performant',
    desc: 'Vite + React + FastAPI tuned for fast local and production builds.'
  }
]

function Features() {
  return (
    <section id="features" className="py-20 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Everything you need to move fast</h2>
          <p className="mt-3 text-gray-600">A curated toolkit that covers the full lifecycle, from idea to launch.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
