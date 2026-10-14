function Carrito ({cantidad}) {
    return (
        <section className="carrito">
            <p>{cantidad} {cantidad === 1 ? "Producto" : "Productos"} </p>
        </section>
    )
}

export default Carrito