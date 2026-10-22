import { useState } from "react"
import "./Producto.css"

const opcionesCantidad = Array(10).fill(null).map((_, indice) => indice + 1)

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
            <div className="producto__acciones">
                <select className="producto__select" value={cantidadSeleccionada} onChange={actualizarCantidad}>
                    {opcionesCantidad.map( (numero) => (
                        <option key={numero}  value={numero}>{numero}</option>
                    ))}
                </select>
            <button className="producto__boton" onClick={agregarAlCarrito}>Agregar al carrito</button>
            </div>
        </article>
    )
}

export default Producto