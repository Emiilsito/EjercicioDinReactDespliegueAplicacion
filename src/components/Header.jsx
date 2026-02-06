import { Link, useLocation } from "react-router-dom";
import { useContext } from "react"; // 1. Importamos useContext
import { UserContext } from "../context/UserContext"; // 2. Importamos tu contexto

export default function Header({ onNavigate }) {
  const location = useLocation();
  const path = location.pathname;

  const { userLogged, logout } = useContext(UserContext);

  return (
    <header className="navigation_bar" role="banner">
      <div className="header_container">
        
        <Link 
          to="/" 
          className="logo_and_title heading_h5"
          aria-label="GameZone - Inicio"
        >
          GameZone
        </Link>

        <nav role="navigation">
          <ul className="navigation_links flex items-center"> {/* Añadido flex e items-center para alinear el botón */}
            <li>
              <Link 
                to="/" 
                className={`nav_link text_normal ${path === '/' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/productos" 
                className={`nav_link text_normal ${path === '/productos' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link 
                to="/admin" 
                className={`nav_link text_normal ${path === '/admin' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}
              >
                Admin
              </Link>
            </li>

            {userLogged && (
              <li>
                <button
                  onClick={logout}
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}