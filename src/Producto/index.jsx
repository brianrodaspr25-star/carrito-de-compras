import { useState } from "react"
import "./Producto.css"

function Producto ({nombre, precio, onAgregar, icono}) {

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1)

    function actualizarCantidad(evento) {

    const cantidad = Number(evento.target.value)

    setCantidadSeleccionada(cantidad)
  }

  function agregarAlCarrito () {

    onAgregar(cantidadSeleccionada)
    setCantidadSeleccionada(1)
  }

    return (
        <article className="producto">
            <span className="producto__icono">{icono}</span>
            <h3 className="producto__nombre">{nombre}</h3>
            <p className="producto__precio">Q{precio}</p>
            <select className="producto__select" value={cantidadSeleccionada} onChange={actualizarCantidad}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button className="producto__boton" onClick={agregarAlCarrito}>Agregar al carrito</button>
        </article>
    )
}

export default Producto