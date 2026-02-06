import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useActions } from "../hooks/useActions";

export default function ProductCard({ producto, onSelect, onDeleteSuccess }) {
  const { userLogged } = useContext(UserContext);
  const { remove, loading } = useActions();

  const handleBorrar = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (window.confirm(`¿Estás seguro de que quieres eliminar ${producto.nombre}?`)) {
      const ok = await remove(producto.id);
      if (ok) {
        onDeleteSuccess(producto.id);
      }
    }
  };

  return (
    <Link
      to={`/productos/${producto.id}`}
      state={{ producto }} 
      onClick={() => onSelect?.(producto)}
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2 no-underline block relative group"
    >
      <article className="rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200 ease-in-out bg-(--color-white-2) border border-(--color-grey-5) shadow-(--dropshadow) h-full">
        {userLogged && (
          <button
            onClick={handleBorrar}
            disabled={loading}
            className={`absolute top-2 right-2 text-white p-2 rounded-full z-10 shadow-md transition-colors ${loading ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-700'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        )}

        <figure className="w-full h-48 overflow-hidden rounded-xl mb-3 flex items-center justify-center bg-(--color-white-2)">
          <img src={producto.imagen} alt={producto.nombre} className="object-contain max-h-full max-w-full" loading="lazy" />
        </figure>

        <h2 className="text_normal font-bold mb-2 text-center text-(--color-grey-2)">{producto.nombre}</h2>
        <p className="text_small mb-6 text-center text-(--color-grey-3) line-clamp-2">{producto.descripcion}</p>
        <p className="text_normal font-bold text-(--color-primary) mt-auto">{producto.precio} €</p>
      </article>
    </Link>
  );
}