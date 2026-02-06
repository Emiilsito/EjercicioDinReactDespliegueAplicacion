import { useState } from "react";
import { productService } from "../services/productService";

export function useActions() {
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const create = async (data) => {
        setLoading(true)
        try {
            await productService.create(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    };

    const remove = async (id) => {
        setLoading(true)
        try {
            await productService.remove(id);
            return true;
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { create, remove, loading, error };
}