import { Link, useLocation } from "react-router-dom";

/**
 * Header
 * --------
 * Componente que representa el encabezado global de la aplicación.
 * Contiene la marca (GameZone) y la navegación principal en dos variantes
 * (menú pequeño en mobile y menú en la derecha en desktop).
 *
 * Props:
 *  - onNavigate?: (path: string) => void
 *      Callback opcional que se invoca con la ruta cuando el usuario hace
 *      click en un enlace. Útil para tracking o comportamiento adicional.
 *
 * Accesibilidad:
 *  - Los enlaces de navegación usan `aria-current="page"` cuando corresponda
 *    para indicar la página activa.
 *  - La navegación de escritorio está marcada con `role="navigation"` y
 *    `aria-label` para que sea detectable por AT.
 *
 * Notas de implementación:
 *  - El componente usa variables de tema para colores (p. ej. `--color-white`).
 *  - Mantener el título dentro del flujo (no absoluto) facilita la navegación
 *    por teclado y evita problemas con el orden del DOM.
 */
export default function Header({ onNavigate }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="site-header shadow-custom relative flex items-center" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center">
        <div className="flex items-center mr-auto">
          <h1 className="text-h5 leading-none">
            GameZone
          </h1>
        </div>

        {/* Small-screen nav (inside the flow) */}
        <nav className="ml-auto md:hidden" role="navigation" aria-label="Navegación principal">
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/" onClick={() => onNavigate?.('/')} aria-current={path === '/' ? 'page' : undefined} className="px-3 py-2 rounded text-lg">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos" onClick={() => onNavigate?.('/productos')} aria-current={path === '/productos' ? 'page' : undefined} className="px-3 py-2 rounded text-lg">
                Productos
              </Link>
            </li>
            <li>
              <Link to="/admin" onClick={() => onNavigate?.('/admin')} aria-current={path === '/admin' ? 'page' : undefined} className="px-3 py-2 rounded text-lg">
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Navigation placed at the far right of the viewport */}
      <nav className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block pr-3" role="navigation" aria-label="Navegación principal">
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/" aria-current={path === '/' ? 'page' : undefined} className="px-4 py-3 rounded hover:bg-white/10 transition text-lg md:text-xl">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" aria-current={path === '/productos' ? 'page' : undefined} className="px-4 py-3 rounded hover:bg-white/10 transition text-lg md:text-xl">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/admin" aria-current={path === '/admin' ? 'page' : undefined} className="px-4 py-3 rounded hover:bg-white/10 transition text-lg md:text-xl">
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
