import "./Carrito.css"

function Carrito ({cantidad, onQuitar, total}) {
    return (
        <section className="carrito">
            <span className="carrito__icono">🛒</span>
            <div className="carrito__info">
                <p className="carrito__texto">
                    <span className="carrito__cantidad">{cantidad}</span>
                    {cantidad === 1 ? "Producto" : "Productos"}
                </p>
                <p className="carrito__total">Total: Q{total}</p>
            </div>
            <button className="carrito__boton" onClick={onQuitar} disabled={cantidad === 0} >Eliminar producto</button>
        </section>
    )
}

export default Carrito