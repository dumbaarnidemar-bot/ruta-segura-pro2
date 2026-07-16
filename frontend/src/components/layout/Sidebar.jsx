import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/" },
  { name: "Expedientes", path: "/expedientes" },
  { name: "Entrevista IA", path: "/entrevista" },
  { name: "Cronología", path: "/cronologia" },
  { name: "Documentos", path: "/documentos" },
  { name: "Directorio", path: "/directorio" },
  { name: "Configuración", path: "/configuracion" }
];

export default function Sidebar() {

  return (

    <aside className="w-72 bg-slate-900 text-white flex flex-col">

      <div className="p-6 text-2xl font-bold border-b border-slate-700">

        Ruta Segura Pro

      </div>

      <nav className="flex-1 p-4">

        {menu.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 mb-2 transition ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.name}
          </NavLink>

        ))}

      </nav>

    </aside>

  );

}
