import { useEffect, useState } from "react";

import img1 from "../../assets/AlumnosEstudiando1.jpg";
import img2 from "../../assets/AlumnosEstudiando2.jpg";
import img3 from "../../assets/AlumnosEstudiando3.jpg";
import img4 from "../../assets/AlumnosEstudiando4.jpg";

export default function StudentsSection() {
  const images = [img1, img2, img3,img4];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">

      {/* Fondo dinámico */}
      <img
        src={images[index]}
        alt="Alumnos estudiando matemáticas"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <div className="relative text-center px-4">
        <h2 className="text-3xl font-bold">
          Aprendé Matemáticas con Confianza
        </h2>

        <p className="mt-2 text-gray-200">
          Clases personalizadas para cada estudiante
        </p>
      </div>

    </section>
  );
}