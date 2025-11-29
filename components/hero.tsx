export default function Hero() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-background">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenido - Estilo minimalista de la referencia */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
                Postura
                <br />
                <span className="relative inline-block">
                  y pausa
                  {/* Subrayado rojo/rosa tipo referencia */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 30" preserveAspectRatio="none">
                    <path
                      d="M 10 15 Q 50 5, 100 15 T 190 15"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-accent"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Subtítulo descriptivo */}
            <p className="text-lg text-foreground leading-relaxed max-w-md">
              Cómo evitar lesiones si pasas horas estudiando frente a la pantalla
            </p>

            {/* Meta descripción */}
            <p className="text-sm text-muted-foreground font-medium">
              Artículo de divulgación para el bienestar estudiantil
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg">
                Explorar Consejos
              </button>
              <button className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-all">
                Leer Más
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src="/images/captura-20de-20pantalla-202025-11-29-20a-20la-28s-29-2000.png"
              alt="Mujer con mala postura sentada en silla"
              className="w-96 h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
