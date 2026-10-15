import "./Producto.css"

function Producto ({nombre, precio, onAgregar, icono}) {
    return (
        <article className="producto">
            <span className="producto__icono">{icono}</span>
            <h3 className="producto__nombre">{nombre}</h3>
            <p className="producto__precio">Q{precio}</p>
                <button className="producto__boton" onClick={onAgregar}>Agregar al carrito</button>
        </article>
    )
}

export default Producto