import { ArrowRight } from "lucide-react"

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-start px-14 overflow-hidden bg-white">

      {/* Símbolo decorativo de fondo */}
      <span
        aria-hidden
        className="absolute -top-5 -right-8 text-[220px] leading-none font-serif italic text-gray-100 select-none pointer-events-none"
      >
        ∫
      </span>

      {/* Fórmulas decorativas */}
      <div
        aria-hidden
        className="absolute bottom-10 right-14 text-right font-serif italic text-gray-200 leading-loose text-base select-none pointer-events-none"
      >
        <div>f(x) = ax² + bx + c</div>
        <div>∑ₙ = n(n+1)/2</div>
        <div>e<sup>iπ</sup> + 1 = 0</div>
      </div>

      {/* Etiqueta superior */}
      <p className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-gray-400 mb-6">
        <span className="w-7 h-px bg-gray-400 block" />
        Clases particulares
      </p>

      {/* Título */}
      <h1 className="font-serif text-5xl font-bold leading-tight text-gray-900 max-w-xl">
        Matemáticas
        <br />
        <em className="font-normal text-gray-400">simples y claras</em>
      </h1>

      {/* Subtítulo */}
      <p className="mt-5 mb-10 text-base font-light text-gray-500 max-w-sm leading-relaxed">
        Aprendé a tu ritmo, con explicaciones que realmente tienen sentido.
      </p>

      {/* CTA */}
      <button className="flex items-center gap-2.5 px-8 py-3 text-xs tracking-widest uppercase border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200">
        Contactar
        <ArrowRight size={14} />
      </button>

    </section>
  )
}