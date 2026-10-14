function Producto ({nombre, precio, onAgregar}) {
    return (
        <article className="producto">
            <h3>{nombre}</h3>
            <p>Q{precio}</p>
            <button onClick={onAgregar}>Agregar al carrito</button>
        </article>
    )
}

export default Producto