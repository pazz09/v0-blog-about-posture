import { Heart, Mail, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-lg text-foreground">
                ✓
              </div>
              <span className="text-xl font-bold">Postura y Pausa</span>
            </div>
            <p className="text-white/70">Promoviendo el bienestar y autocuidado en estudiantes universitarios.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#contexto" className="hover:text-white transition">
                  Contexto
                </a>
              </li>
              <li>
                <a href="#objetivos" className="hover:text-white transition">
                  Objetivos
                </a>
              </li>
              <li>
                <a href="#consejos" className="hover:text-white transition">
                  Consejos
                </a>
              </li>
            </ul>
          </div>

          {/* CHANGE: Actualizar contacto con Instagram */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                <Instagram size={16} />
                <a href="https://instagram.com/posturaypausa.cl" target="_blank" rel="noopener noreferrer">
                  @posturaypausa.cl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>bienestar@posturaypausa.cl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© 2025 Postura y Pausa. Dedicado a tu bienestar.</p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Heart size={18} />
              <span>Cuidamos de tu salud</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
