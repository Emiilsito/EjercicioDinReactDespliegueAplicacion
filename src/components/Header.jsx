import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const { userLogged, logout } = useContext(UserContext);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navigation_bar relative" role="banner">
      <div className="header_container flex justify-between items-center">
        
        <Link 
          to="/" 
          className="logo_and_title heading_h5"
          onClick={() => setIsMenuOpen(false)}
        >
          GameZone
        </Link>

        <button 
          className="md:hidden p-2 border border-white rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav 
          role="navigation"
          className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            md:flex absolute md:relative top-full left-0 w-full md:w-auto 
            bg-(--color-primary) md:bg-transparent flex-col md:flex-row 
            items-center p-4 md:p-0 z-50
          `}
        >
          <ul className="navigation_links flex flex-col md:flex-row items-center w-full md:w-auto gap-4 md:gap-0">
            <li>
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`nav_link text_normal ${path === '/' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/productos" 
                onClick={() => setIsMenuOpen(false)}
                className={`nav_link text_normal ${path === '/productos' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link 
                to="/admin" 
                onClick={() => setIsMenuOpen(false)}
                className={`nav_link text_normal ${path === '/admin' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}
              >
                Admin
              </Link>
            </li>

            {userLogged && (
              <li className="w-full md:w-auto flex justify-center">
                <button
                  onClick={() => { logout(); setIsMenuOpen(false); }}
                  className="md:ml-4 px-4 py-2 md:py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors w-full md:w-auto font-bold"
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