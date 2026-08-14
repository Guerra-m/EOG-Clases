import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export const Hero = () => {

  // =====================================================
  // TIEMPO DE ANIMACIÓN
  // =====================================================

  const [t, setT] = useState(0)

  useEffect(() => {
    let animationFrame: number

    const start = performance.now()

    const animate = (time: number) => {
      const elapsed = (time - start) / 1000

      setT(elapsed)

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])


  // =====================================================
  // PARÁBOLA
  // =====================================================

  const parabolaT = (t % 4) / 4

  const parabolaX =
    100 + 400 * parabolaT

  const parabolaY =
    120 * Math.pow(1 - parabolaT, 2) +
    2 * 470 * (1 - parabolaT) * parabolaT +
    120 * Math.pow(parabolaT, 2)


  // =====================================================
  // SENO
  // =====================================================

  const sineT = (t % 5) / 5

  const sineX =
    55 + 480 * sineT

  const sineY =
    275 - 80 * Math.sin(4 * Math.PI * sineT)


  // =====================================================
  // COORDENADAS MATEMÁTICAS
  // =====================================================

  const parabolaCoordX =
    ((parabolaX - 300) / 50).toFixed(2)

  const parabolaCoordY =
    ((275 - parabolaY) / 50).toFixed(2)


  const sineCoordX =
    ((sineX - 300) / 50).toFixed(2)

  const sineCoordY =
    ((275 - sineY) / 50).toFixed(2)


  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >

        <div
          className="
            absolute
            -right-40
            top-1/2
            h-[600px]
            w-[600px]
            -translate-y-1/2
            rounded-full
            bg-blue-50
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-1/2
            opacity-[0.035]
          "
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

      </div>


      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          py-20
          md:px-12
          lg:px-16
        "
      >

        <div
          className="
            relative
            grid
            w-full
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          "
        >

          {/* =====================================================
              TEXTO
          ===================================================== */}

          <div className="relative z-20 max-w-2xl">

            {/* BADGE */}

            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-gray-200
                bg-white
                px-4
                py-2
                text-xs
                font-medium
                uppercase
                tracking-[0.15em]
                text-gray-500
                shadow-sm
                opacity-0
                animate-[fadeUp_0.8s_ease-out_forwards]
              "
            >

              <Sparkles
                size={13}
                className="text-violet-500"
              />

              Clases particulares

            </div>


            {/* TÍTULO */}

            <h1
              className="
                max-w-2xl
                font-serif
                text-5xl
                font-bold
                leading-tight
                text-gray-900
                md:text-6xl
              "
            >

              Clases de Matemática

              <br />

              <em className="font-normal text-gray-400">
                personalizadas
              </em>

            </h1>


            {/* DESCRIPCIÓN */}

            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-relaxed
                text-gray-500
                opacity-0
                animate-[fadeUp_1s_ease-out_0.35s_forwards]
                sm:text-lg
              "
            >

              Clases particulares de matemática para estudiantes de
              primaria, secundaria e ingreso universitario. Explicaciones
              claras, ejercicios prácticos y acompañamiento personalizado.

            </p>


            {/* =================================================
                INFORMACIÓN
            ================================================= */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-x-8
                gap-y-4
                border-t
                border-gray-100
                pt-6
                opacity-0
                animate-[fadeUp_1s_ease-out_0.75s_forwards]
              "
            >

              <div>

                <p className="text-2xl font-semibold text-gray-900">
                  30+
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                  Años de experiencia
                </p>

              </div>


              <div className="h-10 w-px bg-gray-200" />


              <div>

                <p className="text-2xl font-semibold text-gray-900">
                  3
                </p>

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


            {/* =================================================
                BOTONES
            ================================================= */}

            <div
              className="
                mt-40
                flex
                flex-wrap
                items-center
                gap-4
                opacity-0
                animate-[fadeUp_1s_ease-out_0.55s_forwards]
              "
            >

              <a
                href="#contacto"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-lg
                  bg-gray-900
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-gray-700
                  hover:shadow-lg
                "
              >

                Consultar disponibilidad

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </a>


              <a
                href="#clases"
                className="
                  px-5
                  py-3.5
                  text-sm
                  font-medium
                  text-gray-500
                  transition-colors
                  hover:text-gray-900
                "
              >

                Conocé las clases

              </a>

            </div>

          </div>


          {/* =====================================================
              ÁREA MATEMÁTICA
          ===================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[490px]
              z-0
              h-[360px]
              w-full
              -translate-x-1/2
              overflow-visible

              lg:relative
              lg:left-auto
              lg:top-auto
              lg:z-auto
              lg:h-[550px]
              lg:w-full
              lg:translate-x-0
            "
          >

            {/* =================================================
                HALO
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[380px]
                w-[380px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-50/60
                blur-3xl

                sm:h-[450px]
                sm:w-[450px]
              "
            />


            {/* =================================================
                CÍRCULO EXTERIOR
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[350px]
                w-[350px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-blue-100
                animate-[pulse_6s_ease-in-out_infinite]

                sm:h-[430px]
                sm:w-[430px]
              "
            />


            {/* =================================================
                MARCO DEL GRÁFICO
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-1/2

                h-[340px]
                w-[390px]

                -translate-x-1/2
                -translate-y-1/2

                sm:h-[490px]
                sm:w-[540px]

                lg:h-[570px]
                lg:w-[620px]

                rounded-2xl

                border-x-[8px]
                border-amber-400

                bg-white/20

                shadow-[0_0_30px_rgba(245,158,11,0.15)]
              "
            >

              {/* =================================================
                  SVG
              ================================================= */}

              <svg
                viewBox="0 0 600 550"
                className="
                  absolute
                  left-1/2
                  top-1/2

                  h-[320px]
                  w-[340px]

                  sm:h-[470px]
                  sm:w-[520px]

                  lg:h-[550px]
                  lg:w-[600px]

                  max-w-none

                  -translate-x-1/2
                  -translate-y-1/2

                  overflow-visible
                "
                aria-hidden="true"
              >

                <defs>

                  {/* =================================================
                      GRADIENTE TRAYECTORIA
                  ================================================= */}

                  <linearGradient
                    id="trajectoryGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >

                    <stop
                      offset="0%"
                      stopColor="#8b5cf6"
                      stopOpacity="0"
                    />

                    <stop
                      offset="30%"
                      stopColor="#8b5cf6"
                      stopOpacity="0.5"
                    />

                    <stop
                      offset="60%"
                      stopColor="#06b6d4"
                      stopOpacity="0.9"
                    />

                    <stop
                      offset="100%"
                      stopColor="#ec4899"
                      stopOpacity="0"
                    />

                  </linearGradient>


                  {/* =================================================
                      GRADIENTE SENO
                  ================================================= */}

                  <linearGradient
                    id="sineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >

                    <stop
                      offset="0%"
                      stopColor="#06b6d4"
                    />

                    <stop
                      offset="50%"
                      stopColor="#3b82f6"
                    />

                    <stop
                      offset="100%"
                      stopColor="#8b5cf6"
                    />

                  </linearGradient>


                  {/* =================================================
                      GLOW
                  ================================================= */}

                  <filter id="softGlow">

                    <feGaussianBlur
                      stdDeviation="5"
                      result="blur"
                    />

                    <feMerge>

                      <feMergeNode in="blur" />

                      <feMergeNode in="SourceGraphic" />

                    </feMerge>

                  </filter>


                  {/* =================================================
                      FLECHA X
                  ================================================= */}

                  <marker
                    id="arrowX"
                    markerWidth="8"
                    markerHeight="8"
                    refX="7"
                    refY="4"
                    orient="auto"
                  >

                    <path
                      d="M 0 0 L 8 4 L 0 8 Z"
                      fill="#64748b"
                    />

                  </marker>


                  {/* =================================================
                      FLECHA Y
                  ================================================= */}

                  <marker
                    id="arrowY"
                    markerWidth="8"
                    markerHeight="8"
                    refX="7"
                    refY="4"
                    orient="auto"
                  >

                    <path
                      d="M 0 0 L 8 4 L 0 8 Z"
                      fill="#64748b"
                    />

                  </marker>

                </defs>


                {/* =================================================
                    EJES
                ================================================= */}

                <line
                  x1="50"
                  y1="275"
                  x2="550"
                  y2="275"
                  stroke="#64748b"
                  strokeWidth="2"
                  markerEnd="url(#arrowX)"
                />

                <line
                  x1="300"
                  y1="500"
                  x2="300"
                  y2="35"
                  stroke="#64748b"
                  strokeWidth="2"
                  markerEnd="url(#arrowY)"
                />


                {/* =================================================
                    TICKS EJE X
                ================================================= */}

                {[100, 150, 200, 250, 350, 400, 450, 500].map((x) => (

                  <line
                    key={`x-${x}`}
                    x1={x}
                    y1="270"
                    x2={x}
                    y2="280"
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />

                ))}


                {/* =================================================
                    TICKS EJE Y
                ================================================= */}

                {[75, 125, 175, 225, 325, 375, 425, 475].map((y) => (

                  <line
                    key={`y-${y}`}
                    x1="295"
                    y1={y}
                    x2="305"
                    y2={y}
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />

                ))}


                {/* =================================================
                    ETIQUETAS EJES
                ================================================= */}

                <text
                  x="555"
                  y="268"
                  fill="#475569"
                  fontSize="18"
                  fontStyle="italic"
                >
                  x
                </text>

                <text
                  x="312"
                  y="40"
                  fill="#475569"
                  fontSize="18"
                  fontStyle="italic"
                >
                  y
                </text>


                {/* =================================================
                    TRAYECTORIA DEL ∫
                ================================================= */}

                <path
                  d="
                    M 35 500
                    C 70 410, 85 340, 150 285
                    C 220 225, 285 205, 350 165
                    C 430 115, 500 90, 565 45
                  "
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="6 9"
                  opacity="0.7"
                />


                {/* TRAZA DINÁMICA */}

                <path
                  d="
                    M 35 500
                    C 70 410, 85 340, 150 285
                    C 220 225, 285 205, 350 165
                    C 430 115, 500 90, 565 45
                  "
                  fill="none"
                  stroke="url(#trajectoryGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="0.18 0.82"
                  className="animate-[trajectory_5s_linear_infinite]"
                  filter="url(#softGlow)"
                />


                {/* =================================================
                    PARÁBOLA
                ================================================= */}

                <path
                  d="M 100 120 Q 300 470 500 120"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="4 7"
                />


                {/* TRAZA PARÁBOLA */}

                <path
                  d="M 100 120 Q 300 470 500 120"
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="5"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="0.18 0.82"
                  className="animate-[parabolaTrace_4s_linear_infinite]"
                  filter="url(#softGlow)"
                />


                {/* =================================================
                    PROYECCIONES PARÁBOLA
                ================================================= */}

                <line
                  x1={parabolaX}
                  y1={parabolaY}
                  x2={parabolaX}
                  y2="275"
                  stroke="#f43f5e"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.55"
                />

                <line
                  x1="300"
                  y1={parabolaY}
                  x2={parabolaX}
                  y2={parabolaY}
                  stroke="#f43f5e"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.55"
                />


                {/* =================================================
                    COORDENADA PARÁBOLA
                ================================================= */}

                <text
                  x={parabolaX + 12}
                  y={parabolaY - 14}
                  fill="#f43f5e"
                  fontSize="14"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  ({parabolaCoordX}, {parabolaCoordY})
                </text>


                {/* VALOR X */}

                <text
                  x={parabolaX}
                  y="295"
                  textAnchor="middle"
                  fill="#f43f5e"
                  fontSize="12"
                  fontFamily="monospace"
                >
                  {parabolaCoordX}
                </text>


                {/* VALOR Y */}

                <text
                  x="285"
                  y={parabolaY + 4}
                  textAnchor="end"
                  fill="#f43f5e"
                  fontSize="12"
                  fontFamily="monospace"
                >
                  {parabolaCoordY}
                </text>


                {/* PUNTO PARÁBOLA */}

                <circle
                  cx={parabolaX}
                  cy={parabolaY}
                  r="8"
                  fill="#f43f5e"
                  filter="url(#softGlow)"
                />


                {/* =================================================
                    FUNCIÓN SENO
                ================================================= */}

                <path
                  d="
                    M 55 275
                    C 95 195, 135 195, 175 275
                    C 215 355, 255 355, 295 275
                    C 335 195, 375 195, 415 275
                    C 455 355, 495 355, 535 275
                  "
                  fill="none"
                  stroke="#c4b5fd"
                  strokeWidth="2"
                  strokeDasharray="4 7"
                  opacity="0.7"
                />


                {/* TRAZA SENO */}

                <path
                  d="
                    M 55 275
                    C 95 195, 135 195, 175 275
                    C 215 355, 255 355, 295 275
                    C 335 195, 375 195, 415 275
                    C 455 355, 495 355, 535 275
                  "
                  fill="none"
                  stroke="url(#sineGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="0.15 0.85"
                  className="animate-[sineTrace_5s_linear_infinite]"
                />


                {/* =================================================
                    PROYECCIONES SENO
                ================================================= */}

                <line
                  x1={sineX}
                  y1={sineY}
                  x2={sineX}
                  y2="275"
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.55"
                />

                <line
                  x1="300"
                  y1={sineY}
                  x2={sineX}
                  y2={sineY}
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.55"
                />


                {/* =================================================
                    COORDENADA SENO
                ================================================= */}

                <text
                  x={sineX + 12}
                  y={sineY - 14}
                  fill="#06b6d4"
                  fontSize="14"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  ({sineCoordX}, {sineCoordY})
                </text>


                {/* VALOR X */}

                <text
                  x={sineX}
                  y="295"
                  textAnchor="middle"
                  fill="#06b6d4"
                  fontSize="12"
                  fontFamily="monospace"
                >
                  {sineCoordX}
                </text>


                {/* VALOR Y */}

                <text
                  x="285"
                  y={sineY + 4}
                  textAnchor="end"
                  fill="#06b6d4"
                  fontSize="12"
                  fontFamily="monospace"
                >
                  {sineCoordY}
                </text>


                {/* PUNTO SENO */}

                <circle
                  cx={sineX}
                  cy={sineY}
                  r="7"
                  fill="#06b6d4"
                  filter="url(#softGlow)"
                />


                {/* =================================================
                    ∫ VIAJANDO
                ================================================= */}

                <g filter="url(#softGlow)">

                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#8b5cf6"
                    fontFamily="serif"
                    fontSize="62"
                    fontStyle="italic"
                  >

                    ∫

                    <animateMotion
                      dur="5s"
                      repeatCount="indefinite"
                      rotate="auto"
                      path="
                        M 35 500
                        C 70 410, 85 340, 150 285
                        C 220 225, 285 205, 350 165
                        C 430 115, 500 90, 565 45
                      "
                    />

                    <animateTransform
                      attributeName="transform"
                      type="scale"
                      values="0.12;0.25;0.65;1;1.2;0.65;0.18"
                      keyTimes="0;0.12;0.25;0.42;0.58;0.78;1"
                      dur="5s"
                      repeatCount="indefinite"
                    />

                    <animate
                      attributeName="opacity"
                      values="0;0.25;0.8;1;1;0.7;0"
                      keyTimes="0;0.12;0.25;0.4;0.65;0.82;1"
                      dur="5s"
                      repeatCount="indefinite"
                    />

                  </text>

                </g>


                {/* =================================================
                    FÓRMULAS
                ================================================= */}

                <text
                  x="320"
                  y="105"
                  fill="#8b5cf6"
                  fontFamily="serif"
                  fontSize="18"
                  fontStyle="italic"
                  opacity="0.65"
                >
                  f(x) = x²
                </text>


                <text
                  x="410"
                  y="430"
                  fill="#06b6d4"
                  fontFamily="serif"
                  fontSize="18"
                  fontStyle="italic"
                  opacity="0.7"
                >
                  sen(x)
                </text>


                <text
                  x="70"
                  y="95"
                  fill="#f59e0b"
                  fontFamily="serif"
                  fontSize="17"
                  fontStyle="italic"
                  opacity="0.7"
                >
                  ∫ x² dx
                </text>


                <text
                  x="455"
                  y="180"
                  fill="#ec4899"
                  fontFamily="serif"
                  fontSize="16"
                  fontStyle="italic"
                  opacity="0.7"
                >
                  π ≈ 3.14159
                </text>


                <text
                  x="65"
                  y="440"
                  fill="#10b981"
                  fontFamily="serif"
                  fontSize="16"
                  fontStyle="italic"
                  opacity="0.7"
                >
                  a² + b² = c²
                </text>

              </svg>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SCROLL
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-[10px]
          uppercase
          tracking-[0.2em]
          text-gray-300
          md:flex
        "
      >

        <span>Scroll</span>

        <span
          className="
            h-8
            w-px
            bg-gray-200
            animate-pulse
          "
        />

      </div>

    </section>
  )
}