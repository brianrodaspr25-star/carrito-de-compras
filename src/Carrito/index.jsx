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
                    <div className="modal__contenido">
                    <h2 className="modal__titulo">Tu carrito</h2>
                    <button className="modal__cerrar" onClick={cerrarModal}>X</button>
                    { items.length === 0 ? <p className="carrito__vacio">Tu carrito está vacío</p> :
                        <ul className="modal__lista">
                            {items.map( (item) => (
                                <li className="modal__item" 
                                    key={item.nombre}>
                                    <span className="modal__icono">{item.icono}</span>
                                    <div className="modal__info">
                                        <span className="modal__nombre">{item.nombre}</span>
                                        <span className="modal__precio">Q{item.precio} c/u</span>
                                    </div>
                                    <div className="modal__controles">
                                        <button className="modal__cantidad-boton" onClick={() => onRestar(item)}>-</button>
                                        <span className="modal__cantidad">{item.cantidad}</span>
                                        <button className="modal__cantidad-boton" onClick={() => onSumar(item, 1)}>+</button>
                                    </div>
                                    <span className="modal__subtotal">Q{item.cantidad * item.precio} </span>
                                    <button className="modal__eliminar" onClick={() => onQuitar(item)}>🗑️</button>
                                </li>
                            ))}
                        </ul>
                    }
                    <p className="modal__total">Total: Q{total}</p>
                    <button className="carrito__boton" onClick={onVaciar} disabled={cantidad === 0} >Vaciar carrito</button>
                    </div>
                </div>,
                document.body
            )}
        </section>
    )
}

export default Carrito