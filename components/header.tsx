"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
              ✓
            </div>
            <span className="text-xl font-bold text-primary">Postura y Pausa</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#contexto" className="text-foreground hover:text-primary transition-colors">
              Contexto
            </a>
            <a href="#objetivos" className="text-foreground hover:text-primary transition-colors">
              Objetivos
            </a>
            <a href="#consejos" className="text-foreground hover:text-primary transition-colors">
              Consejos
            </a>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Más Info
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#contexto" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              Contexto
            </a>
            <a href="#objetivos" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              Objetivos
            </a>
            <a href="#consejos" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              Consejos
            </a>
            <button className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Más Info
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
