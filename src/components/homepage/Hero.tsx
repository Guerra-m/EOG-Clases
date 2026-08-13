import { ArrowRight, Sparkles } from "lucide-react"

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Gradiente suave */}
        <div className="absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gray-50 blur-3xl" />

        {/* Grid matemático */}
        <div
          className="absolute right-0 top-0 h-full w-1/2 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 md:px-12 lg:px-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* ==================== TEXTO ==================== */}
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-gray-500 shadow-sm opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
              <Sparkles size={13} />
              Clases particulares
            </div>

            {/* Título */}
            <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl opacity-0 animate-[fadeUp_1s_ease-out_0.15s_forwards]">
              Entendé las
              <br />

              <span className="relative inline-block">
                matemáticas
                <span className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-gray-900 animate-[lineGrow_1s_ease-out_1s_forwards] scale-x-0" />
              </span>

              <br />

              <span className="font-normal italic text-gray-400">
                de otra manera.
              </span>
            </h1>

            {/* Descripción */}
            <p className="mt-7 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg opacity-0 animate-[fadeUp_1s_ease-out_0.35s_forwards]">
              Clases particulares de matemática para estudiantes de
              primaria, secundaria e ingreso universitario. Explicaciones
              claras, ejercicios prácticos y acompañamiento personalizado.
            </p>

            {/* Botones */}
            <div className="mt-9 flex flex-wrap items-center gap-4 opacity-0 animate-[fadeUp_1s_ease-out_0.55s_forwards]">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 rounded-lg bg-gray-900 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-700 hover:shadow-lg"
              >
                Consultar disponibilidad

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#clases"
                className="px-5 py-3.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
              >
                Conocé las clases
              </a>
            </div>

            {/* Información rápida */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-gray-100 pt-6 opacity-0 animate-[fadeUp_1s_ease-out_0.75s_forwards]">
              <div>
                <p className="text-2xl font-semibold text-gray-900">30+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                  Años de experiencia
                </p>
              </div>

              <div className="h-10 w-px bg-gray-200" />

              <div>
                <p className="text-2xl font-semibold text-gray-900">3</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                  Niveles educativos
                </p>
              </div>

              <div className="h-10 w-px bg-gray-200" />

              <div>
                <p className="text-2xl font-semibold text-gray-900">
                  100%
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                  Atención personalizada
                </p>
              </div>
            </div>
          </div>

          {/* ==================== MATEMÁTICAS ==================== */}
          <div className="relative hidden h-[550px] lg:block">

            {/* Círculo exterior */}
            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-100 animate-[pulse_6s_ease-in-out_infinite]" />

            {/* Círculo interior */}
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-100" />

            {/* Ejes */}
            <div className="absolute left-1/2 top-1/2 h-[380px] w-px -translate-x-1/2 -translate-y-1/2 bg-gray-200" />

            <div className="absolute left-1/2 top-1/2 h-px w-[380px] -translate-x-1/2 -translate-y-1/2 bg-gray-200" />

            {/* Puntos de los ejes */}
            <div className="absolute left-1/2 top-[calc(50%-190px)] h-2 w-2 -translate-x-1/2 rounded-full bg-gray-300" />
            <div className="absolute left-[calc(50%+190px)] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gray-300" />

            {/* Parábola aproximada */}
            <svg
              viewBox="0 0 400 400"
              className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 overflow-visible"
              aria-hidden
            >
              <path
                d="M 70 80 Q 200 350 330 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-gray-900"
                strokeLinecap="round"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset="1"
                style={{
                  animation:
                    "drawPath 2s ease-out 1s forwards",
                }}
              />
            </svg>

            {/* Fórmula principal */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-3xl italic text-gray-300">
              f(x) = x²
            </div>

            {/* Fórmulas flotantes */}
            <div className="absolute left-4 top-16 font-serif text-sm italic text-gray-300 animate-[float_5s_ease-in-out_infinite]">
              ∫ x² dx
            </div>

            <div className="absolute right-0 top-28 font-serif text-lg italic text-gray-300 animate-[float_6s_ease-in-out_1s_infinite]">
              π ≈ 3.14159
            </div>

            <div className="absolute bottom-20 left-12 font-serif text-sm italic text-gray-300 animate-[float_7s_ease-in-out_0.5s_infinite]">
              a² + b² = c²
            </div>

            <div className="absolute bottom-8 right-8 font-serif text-sm italic text-gray-300">
              ∑ n = n(n + 1) / 2
            </div>

            {/* Punto sobre la parábola */}
            <div className="absolute left-[48%] top-[38%] h-3 w-3 rounded-full bg-gray-900 shadow-[0_0_0_6px_rgba(0,0,0,0.05)] animate-pulse" />

            {/* Etiquetas de ejes */}
            <span className="absolute right-[7%] top-[47%] font-serif italic text-sm text-gray-300">
              x
            </span>

            <span className="absolute left-[52%] top-[12%] font-serif italic text-sm text-gray-300">
              y
            </span>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-300 md:flex">
        <span>Scroll</span>
        <span className="h-8 w-px bg-gray-200 animate-pulse" />
      </div>
    </section>
  )
}