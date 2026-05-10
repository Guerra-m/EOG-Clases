export const Classes = () => {
  return (
    <section className="p-10 bg-gray-100 text-center">

      <h2 className="text-3xl font-bold">
        Clases disponibles
      </h2>

      <p className="mt-2 text-gray-600">
        Adaptadas a cada nivel del estudiante
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg">Primaria</h3>
          <p className="text-sm text-gray-500 mt-2">
            Bases sólidas en matemáticas desde cero
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg">Secundaria</h3>
          <p className="text-sm text-gray-500 mt-2">
            Apoyo en temas escolares y preparación de exámenes
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg">Ingreso a la universidad</h3>
          <p className="text-sm text-gray-500 mt-2">
            Preparación intensiva para exámenes de ingreso
          </p>
        </div>

      </div>

    </section>
  );
};