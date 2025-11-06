import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
            <span className="font-semibold text-gray-900">Vibe Studio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#contact" className="bg-gray-900 text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100 text-gray-700" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
