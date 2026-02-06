import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function ProductosPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Layout>
      <div className="w-full max-w-6xl mx-auto">
        <header className="w-full mb-12">
          <h1 className="heading_h1">Nuestros Productos</h1>

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
            searchTerm={searchTerm} 
            onSelect={(p) => console.log('Producto seleccionado:', p.id)} 
          />
        </div>
      </div>
    </Layout>
  );
}