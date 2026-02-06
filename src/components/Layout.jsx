// components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

/**
 * @component Layout
 * @description Componente de orden superior que define la estructura global de la aplicación.
 * Garantiza que el Header y Footer estén siempre presentes y que el contenido principal 
 * se ajuste dinámicamente al tamaño de la pantalla.
 * * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido que se renderizará dentro del área principal.
 * @param {string} [props.pageBg] - Variable CSS opcional para definir el fondo del contenido principal 
 * (ej: 'var(--color-white)').
 * * @example
 * <Layout pageBg="var(--color-white)">
 * <InicioPage />
 * </Layout>
 * * @accessibility
 * - Proporciona un `id="main-content"` para que el enlace de salto (skip-link) del Header funcione.
 * - Utiliza `tabIndex="-1"` en el elemento main para gestionar el foco tras la navegación por teclado.
 */
export default function Layout({ children, pageBg }) {
  // Mapeamos el prop pageBg a la clase definida en el CSS si coincide con blanco
  const bgClass = pageBg === 'var(--color-white)' ? 'background_color_white' : '';

  return (
    <div className="flex flex-col min-h-screen">
      {/* El Skip-link suele estar aquí o dentro del Header para accesibilidad */}
      
      <Header />
      
      <main 
        id="main-content" 
        className={`main_content ${bgClass}`}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}