import Layout from "../components/Layout";

/**
 * AdminPage
 * Página de administración (placeholder).
 * Props: ninguno.
 * Uso:
 *  - Esta página sirve como contenedor para futuras herramientas de administración.
 */
export default function AdminPage() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <section className="max-w-4xl w-full bg-white rounded-2xl p-8 text-center" aria-labelledby="admin-heading">
          <h1 id="admin-heading" style={{ fontSize: 'var(--heading-h2-font-size)', fontWeight: 700, color: 'var(--color-primary)' }}>
            Página para Admins
          </h1>
          <p className="mt-6 text-gray-600">Aquí irán las herramientas de administración (vacío por ahora).</p>
        </section>
      </div>
    </Layout>
  );
}
