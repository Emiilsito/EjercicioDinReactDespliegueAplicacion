import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useProductDetail } from "../hooks/useProductDetail";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { state } = useLocation();

  const { producto, loading, error } = useProductDetail(id)
  if (loading) return <Layout><p className="text-center p-20">Cargando...</p></Layout>;
  
  if (error || !producto) {
    return (
      <Layout pageBg={'var(--color-white)'}>
        <div className="text-center">
          <h2 className="heading_h2">Producto no encontrado</h2>
          <Link to="/productos" className="cta_button mt-8">Volver a la tienda</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section 
        aria-labelledby={`product-title-${producto.id}`} 
        className="w-full max-w-6xl mx-auto"
      >
        <article className="background_color_white rounded-lg shadow-(--dropshadow) p-8 md:p-16">
          
          <div className="mb-12">
            <Link to="/productos" className="cta_button" aria-label="Volver">
              Volver
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex items-center justify-center">
              <div className="w-full rounded-lg p-6 border-2 border-(--color-grey-5) bg-white flex items-center justify-center">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="w-full object-contain max-h-[50vh]" 
                />
              </div>
            </div>

            <div className="flex flex-col items-start text-left">
              <h1 
                id={`product-title-${producto.id}`} 
                className="heading_h1"
                style={{ color: 'var(--color-black-2)' }}
              >
                {producto.nombre}
              </h1>

              <div className="mt-4">
                <span 
                  className="inline-block px-4 py-1.5 rounded-full text-white font-bold text_small"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  {producto.categoria || "General"}
                </span>
              </div>

              <p 
                className="text_normal mt-8" 
                style={{ color: 'var(--color-grey-3)', lineHeight: '1.8' }}
              >
                {producto.descripcion}
              </p>

              <div className="mt-10">
                <p 
                  className="heading_h2" 
                  style={{ color: 'var(--color-primary)' }}
                >
                  {producto.precio} €
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
}