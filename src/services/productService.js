const API_URL = `${import.meta.env.VITE_API_URL}/productos`;

export const mapProductoFromAPI = (producto) => ({
    id: producto._id,
    nombre: producto.name,
    descripcion: producto.description,
    precio: producto.price,
    categoria: producto.category,
    imagen: producto.photo,
});

export const productService = {
    async getAll() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Error al obtener productos");

            const result = await response.json();

            const productosArray = result.data || result;

            if (Array.isArray(productosArray)) {
                return productosArray.map(mapProductoFromAPI);
            } else {
                console.error("No se encontró un array en la respuesta:", result);
                return [];
            }
        } catch (error) {
            console.error("Error en productService.getAll:", error);
            throw error;
        }
    },

    async remove(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Error al eliminar el producto");
            }

            return true; 
        } catch (error) {
            console.error("Error en productService.remove:", error);
            throw error;
        }
    },

    async create(nuevoProducto) {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: nuevoProducto.nombre,
                    description: nuevoProducto.descripcion,
                    price: Number(nuevoProducto.precio),
                    category: nuevoProducto.categoria,
                    photo: nuevoProducto.imagen
                }),
            });

            if (!response.ok) throw new Error("Error al insertar el producto");

            const data = await response.json();
            return mapProductoFromAPI(data.data || data);
        } catch (error) {
            console.error("Error en productService.create:", error);
            throw error;
        }
    },

    async getOne(id) {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error("Producto no encontrado");
        const result = await response.json();
        const data = result.data || result;
        return mapProductoFromAPI(data);
    }
};