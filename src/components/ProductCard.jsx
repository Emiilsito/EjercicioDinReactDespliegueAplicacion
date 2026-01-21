import { Link } from "react-router-dom";

export default function ProductCard({ producto, onSelect }) {
  return (
    <Link
      to={`/productos/${producto.id}`}
      state={{ producto }} 
      onClick={() => onSelect?.(producto)}
      aria-label={`Ver detalles de ${producto.nombre}`}
      role="listitem"
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 no-underline block"
    >
      <article
        className="rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200 ease-in-out bg-[var(--color-white-2)] border border-[var(--color-grey-5)] shadow-[var(--dropshadow)] h-full"
      >
        <figure
          className="w-full h-48 overflow-hidden rounded-xl mb-3 flex items-center justify-center bg-[var(--color-white-2)]"
        >
          <img
            src={producto.imagen} 
            alt={producto.nombre}
            className="object-contain max-h-full max-w-full"
            loading="lazy"
          />
          <figcaption className="sr-only">{producto.nombre}</figcaption>
        </figure>

        <h2
          id={`product-title-${producto.id}`}
          className="text_normal font-bold mb-2 text-center text-[var(--color-grey-2)]"
        >
          {producto.nombre}
        </h2>

        <p className="text_small mb-6 text-center text-[var(--color-grey-3)]">
          {producto.descripcion}
        </p>

        <p className="text_normal font-bold text-[var(--color-primary)] mt-auto">
          {producto.precio} €
        </p>
      </article>
    </Link>
  );
}