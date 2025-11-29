import { TrendingDown, AlertCircle, Users } from "lucide-react"

export default function Context() {
  return (
    <section id="contexto" className="py-16 md:py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por qué es importante <span className="text-primary">tu postura</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La realidad de los estudiantes universitarios en la era digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Estadística 1 */}
          <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">61%</h3>
            <p className="text-foreground font-semibold mb-2">Inactividad Física</p>
            <p className="text-sm text-muted-foreground">
              de estudiantes universitarios son físicamente inactivos según la Revista Médica de Chile
            </p>
          </div>

          {/* Estadística 2 */}
          <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
              <TrendingDown className="text-accent" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-accent mb-2">80%+</h3>
            <p className="text-foreground font-semibold mb-2">Molestias Musculoesqueléticas</p>
            <p className="text-sm text-muted-foreground">
              Alta prevalencia en estudiantes de informática y carreras tecnológicas
            </p>
          </div>

          {/* Estadística 3 */}
          <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
              <AlertCircle className="text-secondary" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">6-8h+</h3>
            <p className="text-foreground font-semibold mb-2">Horas Diarias</p>
            <p className="text-sm text-muted-foreground">
              Estudiantes pasan 6 a 8+ horas frente a pantallas sin pausas adecuadas
            </p>
          </div>
        </div>

        {/* Problema principal */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-foreground">El Problema:</h3>
          <ul className="space-y-3 text-foreground">
            <li className="flex gap-3 items-start">
              <span className="text-primary font-bold text-lg">•</span>
              <span>
                <strong>Sedentarismo:</strong> Largas horas en la misma posición debilita músculos
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-accent font-bold text-lg">•</span>
              <span>
                <strong>Malas posturas:</strong> Cuello adelantado, espalda redondeada afecta la columna
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary font-bold text-lg">•</span>
              <span>
                <strong>Falta de descansos:</strong> Sin pausas activas, los músculos se tensan
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-accent font-bold text-lg">•</span>
              <span>
                <strong>Afectación académica:</strong> Dolor reduce concentración y rendimiento
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
