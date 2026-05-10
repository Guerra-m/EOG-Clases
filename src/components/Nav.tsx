export const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white shadow flex justify-between items-center px-6 py-4 fixed top-0 left-0 w-full z-50">
      
      {/* Logo */}
      <div className="font-bold text-xl">
        EOG-Clases
      </div>

      {/* Links */}
      <div className="flex gap-6">
        <a href="/" className="hover:text-gray-200 transition">
          Inicio
        </a>

        <a href="#contacto" className="hover:text-gray-200 transition">
          Contacto
        </a>

        <a href="/videos" className="hover:text-gray-200 transition">
          Videos
        </a>
      </div>

    </nav>
  );
};