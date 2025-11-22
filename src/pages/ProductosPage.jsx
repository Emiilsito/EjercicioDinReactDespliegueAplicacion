import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { productos } from "../data/productos";

export default function ProductosPage() {
  return (
    <Layout>
      {/* Usamos un contenedor flex para centrar la tarjeta blanca en la pantalla */}
      <div className="min-h-screen flex items-center justify-center px-6" style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: 'calc(var(--footer-height) + 2rem)' }}>
        <section className="max-w-6xl bg-white rounded-2xl p-8 w-full" style={{ marginTop: '0' }} aria-labelledby="productos-heading">
          {/* Contenedor que usa todo el ancho disponible de la tarjeta blanca para que la rejilla no deje huecos */}
          <header className="mx-auto w-full text-center flex flex-col items-center">
            <h1 id="productos-heading"
              style={{
                fontSize: 'var(--heading-h1-font-size)',
                fontWeight: 'var(--heading-h1-font-weight)',
                color: 'var(--color-primary)'
              }}
              className="text-center mx-auto"
            >
              Nuestros Productos
            </h1>

            <p className="mt-4 mb-16 mx-auto max-w-4xl text-center" style={{ fontSize: 'var(--heading-h4-font-size)', color: 'var(--color-grey-2)', lineHeight: 1.4 }}>
              Nuestro compromiso es claro: <strong>Ofrecer calidad al mejor precio</strong>
            </p>

            {/* Rejilla de productos ahora vive dentro del mismo contenedor para asegurar alineación */}
            <div className="w-full mt-8">
              <ProductList items={productos} onSelect={(p) => console.log('Producto seleccionado:', p.id)} />
            </div>
          </header>
        </section>
      </div>
    </Layout>
  );
}
