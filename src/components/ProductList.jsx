import ProductCard from "./ProductCard";
import { productos as defaultProductos } from "../data/productos";

/**
 * ProductList
 * Lista reutilizable de productos mostrada en una cuadrícula.
 * Props:
 *  - items?: Array<Producto>  -> lista de productos a mostrar. Si no se proporciona, usa los datos de `src/data/productos`.
 *  - onSelect?: (producto) => void -> callback opcional ejecutado cuando el usuario hace click en un producto (antes de la navegación).
 *
 * Notas de accesibilidad:
 *  - El contenedor es un `section` con `aria-labelledby="productos-heading"` y `role="region"`.
 */
function ProductList({ items = defaultProductos, onSelect }) {
  return (
    <section id="main-content" role="region" tabIndex={-1} className="w-full" aria-labelledby="productos-heading">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch" role="list" aria-label="Lista de productos">
        {items.map((p) => (
          <ProductCard key={p.id} producto={p} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
