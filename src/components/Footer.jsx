function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Vibe Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
