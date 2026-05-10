import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Nav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow fixed top-0 left-0 w-full z-50">

      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="font-bold text-xl">
          EOG-Clases
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <a href="/" className="hover:text-gray-200">Inicio</a>

          {isHome ? (
            <a href="#contacto" className="hover:text-gray-200">
              Contacto
            </a>
          ) : (
            <Link to="/contacto" className="hover:text-gray-200">
              Contacto
            </Link>
          )}

          <a href="/videos" className="hover:text-gray-200">
            Videos
          </a>

          <a href="/recursos" className="hover:text-gray-200">
            Recursos
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">

          <a href="/" onClick={() => setOpen(false)}>Inicio</a>

          {isHome ? (
            <a href="#contacto" onClick={() => setOpen(false)}>
              Contacto
            </a>
          ) : (
            <Link to="/" onClick={() => setOpen(false)}>
              Contacto
            </Link>
          )}

          <a href="/videos" onClick={() => setOpen(false)}>
            Videos
          </a>

          <a href="/recursos" onClick={() => setOpen(false)}>
            Recursos
          </a>

        </div>
      )}

    </nav>
  );
};