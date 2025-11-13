import { Children } from "react";

/**
 * ProductCard
 * Muestra los datos de un producto: imagen, nombre, descripción y precio.
 * Props:
 *  - producto: { id, nombre, precio, img, descripcion }
 *
 * Este componente no tiene estado. Solo recibe datos y los muestra.
 */
export default function ProductCard({ producto }) {
  return (
    <article
      tabIndex={0}
      className="rounded-2xl shadow-custom p-4 flex flex-col items-center hover:scale-105 transition-transform duration-200 ease-in-out"
      style={{
        backgroundColor: "var(--color-white)",
        border: `1px solid var(--color-grey-5)`
      }}
    >
  {/* Imagen: contenedor que recorta la imagen y la centra */}
      <figure
        className="w-full h-48 overflow-hidden rounded-xl mb-3 flex items-center justify-center"
        style={{ backgroundColor: "var(--color-white-2)" }}
      >
        <img
          src={producto.img}
          alt={producto.nombre}
          className="object-contain max-h-full max-w-full"
          loading="lazy"
        />
        <figcaption className="sr-only">{producto.Children}</figcaption>
      </figure>

  {/* Nombre: título del producto */}
      <h2
        className="text-lg font-semibold mb-1 text-center"
        style={{ color: "var(--color-grey-2)" }}
      >
        <strong>{producto.nombre}</strong>
      </h2>

  {/* Descripción breve del producto */}
      <h3
        className="text-sm mb-4 text-center"
        style={{ color: "var(--color-grey-3)" }}
      >
        {producto.descripcion}
      </h3>

  {/* Precio: destacado para llamar la atención */}
      <p
        className="text-base font-bold"
        style={{ color: "var(--color-primary)" }}
      >
        {producto.precio}
      </p>
    </article>
  );
}
