import { Link, useLocation } from "react-router-dom";

/**
 * Header
 * Header de la aplicación que contiene la marca y la navegación principal.
 * Props:
 *  - onNavigate?: (path: string) => void  // callback opcional cuando se pulsa un enlace de navegación
 *
 * Comportamiento:
 *  - Renderiza enlaces de navegación usando react-router `Link`.
 *  - Si se pasa `onNavigate`, se llama con la ruta cuando se hace click en un enlace.
 */
export default function Header({ onNavigate }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="site-header shadow-custom relative" style={{ backgroundColor: 'var(--color-primary)' }}>
  <div className="max-w-6xl mx-auto px-6 flex items-center">
          <div className="flex items-center mr-auto">
            <h1 className="text-h5 leading-none" style={{ color: 'var(--color-white)' }}>
              GameZone
            </h1>
          </div>

        {/* Small-screen nav (inside the flow) */}
        <nav className="ml-auto md:hidden" role="navigation" aria-label="Navegación principal">
          <ul className="flex items-center gap-4">
              <li>
                <Link to="/" onClick={() => onNavigate?.('/')} aria-current={path === '/' ? 'page' : undefined} className="px-3 py-2 rounded text-lg" style={{ color: 'var(--color-white)' }}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" onClick={() => onNavigate?.('/productos')} aria-current={path === '/productos' ? 'page' : undefined} className="px-3 py-2 rounded text-lg" style={{ color: 'var(--color-white)' }}>
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/admin" onClick={() => onNavigate?.('/admin')} aria-current={path === '/admin' ? 'page' : undefined} className="px-3 py-2 rounded text-lg" style={{ color: 'var(--color-white)' }}>
                  Admin
                </Link>
              </li>
          </ul>
        </nav>
      </div>

      {/* Navigation placed at the far right of the viewport */}
      <nav className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block" style={{ paddingRight: '12px' }} role="navigation" aria-label="Navegación principal">
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/" aria-current={path === '/' ? 'page' : undefined} className="px-4 py-3 rounded hover:bg-white/10 transition text-lg md:text-xl" style={{ color: 'var(--color-white)' }}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" aria-current={path === '/productos' ? 'page' : undefined} className="px-4 py-3 rounded hover:bg-white/10 transition text-lg md:text-xl" style={{ color: 'var(--color-white)' }}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/admin" aria-current={path === '/admin' ? 'page' : undefined} className="px-4 py-3 rounded hover:bg-white/10 transition text-lg md:text-xl" style={{ color: 'var(--color-white)' }}>
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
