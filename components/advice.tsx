import { DollarSign, Zap } from "lucide-react"

export default function Advice() {
  const lowCostAdvice = [
    {
      title: "Regla 20-20-20",
      description:
        "Cada 20 minutos, toma un descanso de 20 segundos y mira algo a 20 pies de distancia. Reduce fatiga visual.",
      emoji: "👀",
    },
    {
      title: "Estira Cada Hora",
      description: "Levántate y camina 2-3 minutos cada hora. Estira cuello, hombros y espalda baja.",
      emoji: "🧘",
    },
    {
      title: "Posición Correcta",
      description: "Pies planos en el piso, rodillas a 90°, pantalla a la altura de los ojos, espalda recta.",
      emoji: "✓",
    },
    {
      title: "Almohada para Cuello",
      description: "Usa un cojín pequeño entre tu espalda y la silla para mejor soporte. Bajo costo (~$3.000 CLP).",
      emoji: "💺",
    },
    {
      title: "Ejercicios en Casa",
      description: "Flexiones de cuello, rotaciones de hombros, toques de punta. 10 minutos diarios.",
      emoji: "💪",
    },
    {
      title: "Hidratación",
      description: "Bebe agua regularmente. Mantente hidratado para mejor circulación y energía.",
      emoji: "💧",
    },
  ]

  const highCostAdvice = [
    {
      title: "Silla Ergonómica",
      description: "Invierte en una silla que soporte la curvatura natural de tu espina. Precio: $80.000-300.000 CLP",
      emoji: "🪑",
      price: "$80K-300K",
    },
    {
      title: "Monitor Elevado",
      description: "Compra un soporte para llevar el monitor a la altura de los ojos. Precio: $15.000-50.000 CLP",
      emoji: "🖥️",
      price: "$15K-50K",
    },
    {
      title: "Escritorio Ajustable",
      description: "Permite alternar entre estar sentado y de pie. Precio: $120.000-400.000 CLP",
      emoji: "🏢",
      price: "$120K-400K",
    },
    {
      title: "Teclado Ergonómico",
      description:
        "Reduce tensión en manos y muñecas. Mejora significativamente la comodidad. Precio: $30.000-100.000 CLP",
      emoji: "⌨️",
      price: "$30K-100K",
    },
    {
      title: "Reposamuñecas",
      description: "Proporciona soporte durante largas sesiones de trabajo. Precio: $10.000-30.000 CLP",
      emoji: "🖱️",
      price: "$10K-30K",
    },
    {
      title: "Masaje o Fisioterapia",
      description: "Sesiones regulares para aliviar tensión. Inversión en tu salud. Precio: $20.000-50.000 CLP/sesión",
      emoji: "🤲",
      price: "$20K-50K",
    },
  ]

  return (
    <section id="consejos" className="py-16 md:py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Consejos <span className="text-primary">Prácticos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones accesibles para todos los presupuestos
          </p>
        </div>

        {/* Bajo Costo */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
              <DollarSign className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Consejos Sin Costo o Bajo Costo</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lowCostAdvice.map((advice, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/50 transition-all"
              >
                <div className="text-4xl mb-4">{advice.emoji}</div>
                <h4 className="text-lg font-bold text-foreground mb-2">{advice.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{advice.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alto Costo */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
              <Zap className="text-accent" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Inversiones de Mayor Costo (Alto Impacto)</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highCostAdvice.map((advice, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border-2 border-accent/30 hover:shadow-lg hover:border-accent transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{advice.emoji}</div>
                  <span className="bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full">
                    {advice.price}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{advice.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{advice.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Tips */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-6">💡 Consejos Bonus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-foreground mb-2">🎯 Establece Alarmas</h4>
              <p className="text-sm text-muted-foreground">
                Configura alarmas cada 30 minutos para recordarte tomar pausas. Usa una app gratuita como
                &quot;Stretchly&quot;.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">🚶 Camina a Clases</h4>
              <p className="text-sm text-muted-foreground">
                Aprovecha los cambios entre clases para caminar. Extra: Sube escaleras cuando sea posible.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">🎮 Estudia en Grupos</h4>
              <p className="text-sm text-muted-foreground">
                Estudiar en la biblioteca o con amigos te obliga a cambiar de posición y a moverte más.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">😴 Duerme Bien</h4>
              <p className="text-sm text-muted-foreground">
                7-8 horas de sueño favorecen la recuperación muscular. Pon una almohada ergonómica.
              </p>
            </div>
          </div>
          {/* CHANGE: Agregar referencia a Instagram */}
          <div className="mt-8 pt-8 border-t border-primary/20">
            <p className="text-sm text-muted-foreground text-center">
              ¡Síguenos en Instagram! <span className="font-bold text-primary">@posturaypausa.cl</span> para más
              consejos diarios
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
