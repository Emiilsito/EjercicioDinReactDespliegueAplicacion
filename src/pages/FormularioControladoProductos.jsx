import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useActions } from "../hooks/useActions";

export default function FormularioControladoProductos() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "",
    imagen: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const { create, loading, error } = useActions()  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.descripcion.trim() || formData.descripcion.length < 10) 
      newErrors.descripcion = "La descripción debe tener al menos 10 caracteres.";
    if (!formData.precio || isNaN(formData.precio) || formData.precio <= 0)
      newErrors.precio = "El precio debe ser un número mayor que 0.";
    if (!formData.categoria.trim()) newErrors.categoria = "La categoría es obligatoria.";
    if (!formData.imagen.trim() || !isValidUrl(formData.imagen))
      newErrors.imagen = "La URL de la imagen no es válida.";
    return newErrors;
  };

  const isValidUrl = (s) => { try { new URL(s); return true; } catch (_) { return false; } };

const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = validateForm();
  if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

  const ok = await create(formData)

  if (ok){
    alert("Producto creado con exito.")
  }
  navigate("/productos")

};
  return (
    <Layout pageBg={'var(--color-grey-1)'}>
      <div className="form_card">
        <h2 className="heading_h2 mb-8 text-center">Agregar Nuevo Producto</h2>

        {successMessage && (
          <div className="success_message" role="alert">
            {successMessage}
          </div>
        )}
        
        {errors.server && (
          <div className="error_message mb-4" role="alert" style={{ color: 'var(--color-error)' }}>
            {errors.server}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form_group">
            <label htmlFor="nombre" className="form_label">Nombre del Producto *</label>
            <input
              type="text"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Metal Gear Solid Delta"
              className={`form_input ${errors.nombre ? 'form_input_error_state' : 'form_input_base'}`}
              aria-invalid={!!errors.nombre}
            />
            {errors.nombre && <span className="error_message">{errors.nombre}</span>}
          </div>

          <div className="form_group">
            <label htmlFor="descripcion" className="form_label">Descripción *</label>
            <textarea
              id="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              rows="3"
              className={`form_input ${errors.descripcion ? 'form_input_error_state' : 'form_input_base'}`}
              aria-invalid={!!errors.descripcion}
            />
            {errors.descripcion && <span className="error_message">{errors.descripcion}</span>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form_group">
              <label htmlFor="precio" className="form_label">Precio *</label>
              <input
                type="text"
                id="precio"
                value={formData.precio}
                onChange={handleChange}
                placeholder="0.00"
                className={`form_input ${errors.precio ? 'form_input_error_state' : 'form_input_base'}`}
                aria-invalid={!!errors.precio}
              />
              {errors.precio && <span className="error_message">{errors.precio}</span>}
            </div>

            <div className="form_group">
              <label htmlFor="categoria" className="form_label">Categoría *</label>
              <select
                id="categoria"
                value={formData.categoria}
                onChange={handleChange}
                className={`form_input ${errors.categoria ? 'form_input_error_state' : 'form_input_base'}`}
                aria-invalid={!!errors.categoria}
              >
                <option value="">Seleccionar...</option>
                <option value="Juegos">Juegos</option>
                <option value="Pantallas">Pantallas</option>
                <option value="Perifericos">Perifericos</option>
              </select>
              {errors.categoria && <span className="error_message">{errors.categoria}</span>}
            </div>
          </div>

          <div className="form_group">
            <label htmlFor="imagen" className="form_label">URL de la Imagen *</label>
            <input
              type="url"
              id="imagen"
              value={formData.imagen}
              onChange={handleChange}
              className={`form_input ${errors.imagen ? 'form_input_error_state' : 'form_input_base'}`}
              aria-invalid={!!errors.imagen}
            />
            {errors.imagen && <span className="error_message">{errors.imagen}</span>}
          </div>

          <button type="submit" className="form_button">
            Agregar Producto
          </button>
        </form>
      </div>
    </Layout>
  );
}