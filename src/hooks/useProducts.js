import { useState, useEffect } from "react";
import { productService } from "../services/productService";

export function useProducts() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProductos = async () => {
    try {
      setLoading(true);
      const data = await productService.getAll();
      setProductos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProductos();
  }, []);

  return { productos, loading, error, refresh: loadProductos, setProductos };
}