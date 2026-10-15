import "./Carrito.css"

function Carrito ({cantidad, onQuitar}) {
    return (
        <section className="carrito">
            <span className="carrito__icono">🛒</span>
            <p className="carrito__texto">
                <span className="carrito__cantidad">{cantidad}</span>
                {cantidad === 1 ? "Producto" : "Productos"}
            </p>
            <button className="carrito__boton" onClick={onQuitar} disabled={cantidad === 0} >Eliminar producto</button>
        </section>
    )
}

export default Carrito