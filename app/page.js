'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container-wide">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
              <span className="text-xl font-bold text-gray-900">YAAI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition">
                Features
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition">
                About
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition">
                Contact
              </Link>
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Design, Build, Create
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              A modern website built with Claude Design principles. Elegant, responsive, and ready for your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium">
                Start Building
              </button>
              <button className="px-8 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 -z-10" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Features
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Everything you need to create beautiful, modern designs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Fast & Modern', desc: 'Built with Next.js and Tailwind CSS for optimal performance' },
              { title: 'Responsive Design', desc: 'Works perfectly on mobile, tablet, and desktop devices' },
              { title: 'Claude Design Ready', desc: 'Designed with AI-powered design principles in mind' },
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="mb-8 text-blue-100">
              Join us in creating something amazing with Claude Design.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium">
              Launch Project
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container-wide">
          <div className="flex items-center justify-between">
            <p>&copy; 2026 YAAI. All rights reserved.</p>
            <p className="text-sm">Built with Claude Design</p>
          </div>
        </div>
      </footer>
    </>
  )
}
