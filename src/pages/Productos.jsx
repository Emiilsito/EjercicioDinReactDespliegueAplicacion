import ProductList from "../components/ProductList";

function Productos() {
  return (
    <article
      className="min-h-screen flex flex-col items-center px-6 py-12"
      style={{ backgroundColor: "var(--color-grey-4)", color: "var(--color-black-1)" }}
    >
      {/* Título principal */}
      <h1
        className="text-center mb-2"
        style={{
          fontSize: "var(--heading-h1-font-size)",
          fontWeight: "var(--heading-h1-font-weight)",
          lineHeight: "var(--heading-h1-line-height)",
          letterSpacing: "var(--heading-h1-letter-spacing)",
          fontStyle: "var(--heading-h1-font-style)",
          color: "var(--color-primary)",
        }}
      >
        Nuestros Productos
      </h1>

      {/* Subtítulo */}
      <p
        className="text-center mb-10 max-w-2xl"
        style={{
          fontSize: "var(--heading-h4-font-size)", 
          color: "var(--color-grey-2)" 
        }}
      >
        Nuestro compromiso es claro:
      </p>

      <p
        className="text-center mb-10 max-w-4xl"
        style={{
          fontSize: "var(--heading-h4-font-size)", 
          color: "var(--color-grey-2)" 
        }}
        >
        <strong>Ofrecer calidad al mejor precio para nuestros clientes.</strong>
      </p>

      {/* Lista de productos */}
        <ProductList />
    </article>
  );
}

export default Productos;
