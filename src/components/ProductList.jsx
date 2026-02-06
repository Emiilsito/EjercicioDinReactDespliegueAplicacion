import { useMemo } from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

function ProductList({ searchTerm, onSelect }) {
  const { productos, setProductos, loading, error } = useProducts();

  const filteredItems = useMemo(() => {
    if (!productos) return [];
    if (!searchTerm) return productos;
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return productos.filter((p) =>
      p.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm, productos]);

  const handleDeleteFromState = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  if (loading) return <p className="text-center p-10 text_normal">Cargando productos...</p>;
  if (error) return <p className="text-center p-10 text-error">Error: {error}</p>;

  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">
        {filteredItems.map((p) => (
          <ProductCard 
            key={p.id} 
            producto={p} 
            onSelect={onSelect} 
            onDeleteSuccess={handleDeleteFromState} 
          />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center p-10 text-(--color-grey-3)">
          No hay productos que coincidan con tu búsqueda.
        </p>
      )}
    </section>
  );
}

export default ProductList;