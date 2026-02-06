import { useState, useEffect } from "react";
import { productService } from "../services/productService";

export function useProductDetail(id) {
    const [ loading, setLoading ] = useState(false)
    const [ producto, setProducto ] = useState([])
    const [ error, setError ] = useState(null)
    
    const loadProductDetail = async () => {
        try {
            setLoading(true)
            const data = await productService.getOne(id)
            setProducto(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadProductDetail()
    }, [id])

    return { producto, loading, error }

}