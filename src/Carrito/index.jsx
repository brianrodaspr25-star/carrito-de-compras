import "./Carrito.css"

function Carrito ({cantidad}) {
    return (
        <section className="carrito">
            <span className="carrito__icono">🛒</span>
            <p className="carrito__texto">
                <span className="carrito__cantidad">{cantidad}</span>
                {cantidad} {cantidad === 1 ? "Producto" : "Productos"}
            </p>
        </section>
    )
}

export default Carrito