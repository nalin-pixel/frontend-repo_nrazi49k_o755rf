import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center py-20">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Now in beta
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Build stunning apps with AI superpowers
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Design, code, and ship faster with an intelligent workspace that helps you at every step. No setup, no hassle.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800 transition-colors">Get started</a>
              <a href="#showcase" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-gray-900 font-medium border border-gray-200 hover:bg-gray-50 transition-colors">See showcase</a>
            </div>
            <p className="mt-3 text-sm text-gray-500">No credit card required</p>
          </div>

          <div className="h-[420px] rounded-2xl bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 border border-black/5 relative">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/7H2W6BIr7F0xW8c9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
