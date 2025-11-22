// components/Footer.jsx
/**
 * Footer
 * Pie de página de la aplicación.
 * Props: (ninguno requerido)
 *  - children?: ReactNode  // contenido adicional opcional
 *
 * Accesibilidad:
 *  - Contiene texto descriptivo y está marcado con <footer>.
 */
export default function Footer({ children }) {
  return (
    <footer className="site-footer" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' }}>
      <div className="text-center footer-text font-medium" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1rem', paddingBottom: '1rem' }}>
        © 2025 GameZone. Todos los derechos reservados.
      </div>
    </footer>
  );
}
