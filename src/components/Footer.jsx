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
export default function Footer() {
  return (
    <footer className="site-footer" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' }}>
      <div className="text-center footer-text font-medium w-full px-6 py-4">
        © 2025 GameZone. Todos los derechos reservados.
      </div>
    </footer>
  );
}
