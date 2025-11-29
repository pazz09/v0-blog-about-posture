import { Target, Heart, Brain, Zap } from "lucide-react"

export default function Objectives() {
  const objectives = [
    {
      icon: <Target className="text-primary" size={32} />,
      title: "Prevención Temprana",
      description: "Detecta y evita afecciones musculoesqueléticas antes de que se vuelvan crónicas",
    },
    {
      icon: <Heart className="text-accent" size={32} />,
      title: "Bienestar Integral",
      description: "Mejora tu salud física y emocional con hábitos simples y sostenibles",
    },
    {
      icon: <Brain className="text-secondary" size={32} />,
      title: "Rendimiento Académico",
      description: "Un cuerpo sin dolor es una mente más enfocada y productiva",
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: "Autocuidado",
      description: "Desarrolla hábitos que te acompañarán toda la vida profesional",
    },
  ]

  return (
    <section id="objetivos" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros <span className="text-primary">Objetivos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Queremos impactar positivamente en tu vida como estudiante y profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all hover:border-primary/50"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-muted rounded-lg">
                {obj.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{obj.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{obj.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para cambiar tus hábitos?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Pequeñas acciones hoy pueden prevenir grandes problemas mañana. Empieza con nuestros consejos prácticos.
          </p>
          <button className="bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-white/90 transition-all hover:shadow-lg">
            Ver Consejos Ahora
          </button>
        </div>
      </div>
    </section>
  )
}
