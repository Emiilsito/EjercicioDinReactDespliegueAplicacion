import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import { useProducts } from "../hooks/useProducts"; // Hook de la Actividad 2
import { useState, useMemo } from "react";

export default function ProductosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const { productos, loading, error } = useProducts();

  const filteredProductos = useMemo(() => {
    if (!productos) return [];
    if (!searchTerm) return productos;
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm, productos]);

  return (
    <Layout>
      <div className="w-full max-w-6xl mx-auto">
        
        <header className="w-full mb-12">
          <h1 id="productos-heading" className="heading_h1">
            Nuestros Productos
          </h1>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Buscar productos..."
          />

          <p className="heading_h4 mx-auto mt-6">
            Nuestro compromiso es claro: <strong>Ofrecer calidad al mejor precio</strong>
          </p>
        </header>

        <div className="w-full">
          <ProductList 
            items={filteredProductos} 
            loading={loading}
            error={error}
            onSelect={(p) => console.log('Producto seleccionado:', p.id)} 
          />
        </div>
        
      </div>
    </Layout>
  );
}