export const CTA = () => {
  return (
    <section
      id="contacto"
      className="p-15 bg-blue-600 text-white text-center"
    >
      <h2 className="text-3xl font-bold">
        ¿Empezamos con las clases?
      </h2>

      <p className="mt-2 text-blue-100">
        Elegí cómo querés contactarme
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">

        <button
          onClick={() =>
            window.open(
              "https://wa.me/5492616683291?text=Hola%20quiero%20info%20de%20las%20clases",
              "_blank"
            )
          }
          className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded"
        >
          WhatsApp
        </button>

        <a
          href="mailto:eogm1959@gmail.com?subject=Clases%20de%20matemática"
          className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded"
        >
          Email
        </a>

      </div>
    </section>
  );
};