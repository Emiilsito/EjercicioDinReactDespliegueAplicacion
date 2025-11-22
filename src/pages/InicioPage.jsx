import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function InicioPage() {
  return (
    <Layout>
      <div
        className="px-6 py-16 text-center"
        style={{ backgroundColor: "var(--color-grey-5)" }}
      >
        <h1
          style={{
            fontSize: "var(--heading-h1-font-size)",
            fontWeight: "var(--heading-h1-font-weight)",
            color: "var(--color-primary)",
          }}
        >
          Bienvenido a GameZone
        </h1>

        <div className="mt-6 flex justify-center">
          <p
            className="max-w-2xl text-center"
            style={{
              color: "var(--color-grey-2)",
              fontSize: "var(--text-large-font-size)",
              lineHeight: '1.6',
            }}
          >
            Encuentra lo mejor en gaming al mejor precio.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/productos"
            aria-label="Ir a Nuestros Productos"
            className="inline-block rounded-full font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              background: 'linear-gradient(180deg, rgba(6,110,204,1) 0%, rgba(3,60,114,1) 100%)',
              color: "var(--color-white)",
              padding: '10px 22px',
              boxShadow: '0 6px 20px rgba(4,80,151,0.25)'
            }}
          >
            Nuestros Productos
          </Link>
        </div>
      </div>

      {/* La página de inicio es simple: hero + enlace a /productos */}
    </Layout>
  );
}
