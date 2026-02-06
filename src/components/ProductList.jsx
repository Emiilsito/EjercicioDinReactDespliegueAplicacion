import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

function ProductList({ onSelect }) {
  const { productos, setProductos, loading, error } = useProducts();

  const handleDeleteFromState = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  if (loading) return <p className="text-center p-10 text_normal">Cargando productos desde MongoDB...</p>;
  if (error) return <p className="text-center p-10 text-error">Error: {error}</p>;

  return (
    <section role="region" className="w-full max-w-6xl mx-auto" aria-labelledby="productos-heading">
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch" 
        role="list" 
        aria-label="Lista de productos"
      >
        {productos.map((p) => (
          <ProductCard 
            key={p.id} 
            producto={p} 
            onSelect={onSelect} 
            onDeleteSuccess={handleDeleteFromState} 
          />
        ))}
      </div>

      {productos.length === 0 && !loading && (
        <p className="text-center p-10 text-(--color-grey-3)">
          No hay productos que coincidan con tu búsqueda.
        </p>
      )}
    </section>
  );
}

export default ProductList;