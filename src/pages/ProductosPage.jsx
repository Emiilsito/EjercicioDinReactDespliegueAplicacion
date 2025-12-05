import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { productos } from "../data/productos";
import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";

/**
 * ProductosPage
 * ----------------
 * Página que muestra la lista de productos dentro de una tarjeta centrada.
 * - Usa `ProductList` para renderizar la rejilla de productos.
 * - Mantiene la tarjeta blanca centrada con padding y títulos.
 *
 * Nota: Solo se añade documentación inline aquí; no se modifica la lógica ni
 * el layout existente.
 */
export default function ProductosPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Usamos useMemo para memorizar la lista filtrada.
  // Solo se recalcula si 'searchTerm' cambia.
  const filteredProductos = useMemo(() => {
    if (!searchTerm) {
      return productos;
      // Si no hay término, devuelve la lista completa
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return productos.filter((producto) =>
      // Filtra por el nombre del producto
      producto.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);


  return (
    <Layout>
      {/* Contenedor que centra el contenido entre header y footer */}
      <div className="w-full px-6 bg-white flex items-center justify-center" style={{ minHeight: 'calc(100vh - var(--header-height, 0px) - var(--footer-height, 0px))', paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: 'calc(var(--footer-height) + 2rem)' }}>
        <div className="max-w-6xl w-full">
          <header className="w-full text-center">
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

            <p className="text-center mx-auto" style={{ fontSize: 'var(--heading-h4-font-size)', color: 'var(--color-grey-2)', lineHeight: 1.4 }}>
              Nuestro compromiso es claro: <strong>Ofrecer calidad al mejor precio</strong>
            </p>

            <div className="flex justify-center">
              <SearchBar
                className="mx-auto max-w-lg mb-6 mt-4"
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Buscar productos..."
              />
            </div>
          </header>

          <div className="w-full mt-14">
            <ProductList items={filteredProductos} onSelect={(p) => console.log('Producto seleccionado:', p.id)} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
