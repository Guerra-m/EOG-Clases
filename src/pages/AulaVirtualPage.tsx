const recursos = [
  {
    id: 1,
    titulo: "Logarítmos",
    tipo: "PDF",
    link: "/materiales/logaritmos.pdf",
  },
  {
    id: 2,
    titulo: "Ejercicios función lineal",
    tipo: "PDF",
    link: "/materiales/ejercicio_funcion_lineal.pdf",
  },
  {
    id: 3,
    titulo: "Ejercicios con racionales",
    tipo: "PDF",
    link: "/materiales/ejercicios_con_racionales.pdf",
  },
  {
    id: 4,
    titulo: "Expresiones algebraicas racionales",
    tipo: "PDF",
    link: "/materiales/expresiones_algebraicas_racionales.pdf",
  },
  {
    id: 5,
    titulo: "Expresiones algebraicas fraccionarias",
    tipo: "PDF",
    link: "/materiales/expresiones_algebricas_fraccionarias.pdf",
  },
  { 
    id: 6,
    titulo: "Factoreo",
    tipo: "PDF",
    link: "/materiales/factoreo.pdf",
  },
  {
    id: 7,
    titulo: "Funcion exponencial",
    tipo: "PDF",
    link: "/materiales/funcion_exponencial.pdf",
  },
  {
    id: 8,
    titulo: "Funciones trigonometricas",
    tipo: "PDF",
    link: "/materiales/funciones_trigonometricas.pdf",
  },
  {
    id: 9,
    titulo: "Identidades trigonométricas",
    tipo: "PDF",
    link: "/materiales/identidades_trigonometricas.pdf",
  },
  {
    id: 10,
    titulo: "Ejercicios logarítmicos",
    tipo: "PDF",
    link: "/materiales/logaritmo_ejercicio.pdf",
  },
  {
    id: 11,
    titulo: "numeros imaginarios",
    tipo: "PDF",
    link: "/materiales/nros_imaginarios.pdf",
  },
  {
    id: 12,
    titulo: "Numeros naturales",
    tipo: "PDF",
    link: "/materiales/numeros_naturales.pdf",
  },
  {
    id: 13,
    titulo: "Numeros reales",
    tipo: "PDF",
    link: "/materiales/numeros_reales.pdf",
  }
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