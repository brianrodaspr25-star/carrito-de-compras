import { useState } from "react"
import { createPortal } from "react-dom"
import "./Carrito.css"

function Carrito ({cantidad, onQuitar, total, items, onSumar, onRestar, onVaciar}) {

    const [estaAbierto, setEstaAbierto] = useState(false)

    function abrirModal () {
        setEstaAbierto(true)
    }

    function cerrarModal () {
        setEstaAbierto(false)
    }

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
            <button className="carrito__boton" onClick={abrirModal}>Ver carrito</button>
            { estaAbierto && createPortal (
                <div className="modal">
                    <button onClick={cerrarModal}>X</button>
                    { items.length === 0 ? <p className="carrito__vacio">Tu carrito está vacío</p> :
                        <ul>
                            {items.map( (item) => (
                                <li key={item.nombre}>
                                    <span>{item.icono}</span>
                                    <span>{item.nombre}</span>
                                    <span>Precio: Q{item.precio}</span>
                                    <button onClick={() => onRestar(item)}>-</button>
                                    <span>Cantidad: {item.cantidad} {item.cantidad === 1 ? "unidad" : "unidades"} </span>
                                    <button onClick={() => onSumar(item)}>+</button>
                                    <span> Subtotal: Q{item.cantidad * item.precio} </span>
                                    <button onClick={() => onQuitar(item)}>🗑️</button>
                                </li>
                            ))}
                        </ul>
                    }
                    <button className="carrito__boton" onClick={onVaciar} disabled={cantidad === 0} >Vaciar carrito</button>
                </div>,
                document.body
            )}
        </section>
    )
}

export default Carrito