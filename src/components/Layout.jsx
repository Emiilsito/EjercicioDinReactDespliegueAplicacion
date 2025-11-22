// components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

/**
 * Layout
 * Contenedor global de la aplicación que incluye Header, Footer y el `main`.
 * Props:
 *  - children: ReactNode  // contenido de la página
 *
 * Accesibilidad:
 *  - Proporciona un enlace "Saltar al contenido" y asigna `id="page-main"` al main para facilitar la navegación por teclado.
 */
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip link visible on keyboard focus */}
      <a href="#page-main" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="page-main" className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
