import { Link } from "react-router-dom";
import Layout from "../components/Layout";

/**
 * AdminPage
 * Página de administración adaptada a las clases semánticas del CSS global.
 */
export default function AdminPage() {
  return (
    <Layout pageBg={'var(--color-grey-1)'}>
      
      <section 
        className="form_card" 
        aria-labelledby="admin-heading"
      >
        <h1 id="admin-heading" className="heading_h1">
          Página para Admins
        </h1>

        <div className="mt-10">
          <Link
            to="/formulario-productos"
            aria-label="Formulario para agregar productos"
            className="cta_button"
          >
            Agregar producto
          </Link>
        </div>
      </section>

    </Layout>
  );
}