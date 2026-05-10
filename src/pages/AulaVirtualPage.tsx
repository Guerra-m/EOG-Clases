const recursos = [
  {
    id: 1,
    titulo: "Logarítmos",
    tipo: "PDF",
    link: "/materiales/logaritmos.pdf",
  },
//   {
//     id: 2,
//     titulo: "Ecuaciones",
//     tipo: "Video",
//     link: "/videos/video4EOG.mp4",
//   },
];

export default function AulaVirtualPage() {
  return (
    <div className="p-18 min-h-screen bg-gray-50">

      <h1 className="text-3xl font-bold mb-6">
        Material de estudio
      </h1>

      <div className="grid md:grid-cols-2 gap-4">

        {recursos.map((r) => (
          <div
            key={r.id}
            className="bg-white p-4 rounded shadow"
          >
            <h2 className="font-semibold">{r.titulo}</h2>
            <p className="text-sm text-gray-500">{r.tipo}</p>

            <a
              href={r.link}
              target="_blank"
              className="inline-block mt-3 text-blue-600"
            >
              Abrir recurso
            </a>
          </div>
        ))}

      </div>

    </div>
  );
}