export const Location = () => {
  const mapsEmbedUrl = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL
  const mapsUrl = import.meta.env.VITE_GOOGLE_MAPS_URL

  return (
    <section id="ubicacion" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Título */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider">
            Ubicación
          </span>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            ¿Dónde son las clases?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Encontrá la ubicación donde doy clases y consultá cómo llegar.
          </p>
        </div>

        {/* Contenido */}
        <div className="grid overflow-hidden rounded-2xl border bg-white shadow-sm md:grid-cols-2">
          {/* Información */}
          <div className="flex flex-col justify-center p-8 md:p-10">
            <h3 className="text-2xl font-semibold">
              Ubicación de las clases
            </h3>

            <div className="mt-8 space-y-6">
              {/* Dirección */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  📍
                </div>

                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="mt-1 text-gray-600">
                    Av. Ejemplo 1234
                    <br />
                    Mendoza, Argentina
                  </p>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  🕐
                </div>

                <div>
                  <p className="font-medium">Horarios</p>
                  <p className="mt-1 text-gray-600">
                    Lunes a sábados
                    <br />
                    8:00 - 20:00
                  </p>
                </div>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:opacity-80"
            >
              Cómo llegar
            </a>
          </div>

          {/* Google Maps */}
          <div className="min-h-[400px]">
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación"
            />
          </div>
        </div>
      </div>
    </section>
  )
}