import "./Carrito.css"

function Carrito ({cantidad, onQuitar, total, items, onSumar}) {
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
            <button className="carrito__boton" onClick={onQuitar} disabled={cantidad === 0} >Quitar producto</button>
            <ul>
                {items.map( (item) => (
                    <li key={item.nombre}>
                        <span>{item.icono}</span>
                        <span>{item.nombre}</span>
                        <span>Precio: Q{item.precio}</span>
                        <span>Cantidad: {item.cantidad} {item.cantidad === 1 ? "unidad" : "unidades"} </span>
                        <span> Subtotal: Q{item.cantidad * item.precio} </span>
                        <button onClick={() => onSumar(item)}>+</button>
                    </li>
                ))}
            </ul>

        </section>
    )
}

export default Carrito