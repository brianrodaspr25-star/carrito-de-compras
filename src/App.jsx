import Producto from "./Producto"
import Carrito from "./Carrito"
import "./App.css"
import { useState } from "react"

const productos = [
  {nombre: "Teclado", precio: 150, icono:"⌨️"},
  {nombre: "Mouse", precio: 75, icono:"🖱️"},
  {nombre: "Audífonos", precio: 200, icono:"🎧"}
]

function App() {

  const [carrito, setCarrito] = useState([])
  const [nombreTienda, setNombreTienda] = useState("Tienda de Brian")
  const [textoInput, setTextoInput] = useState("")

  let total = 0
  let cantidadTotal = 0

  carrito.forEach( (producto) => {

    cantidadTotal += producto.cantidad

    total += producto.precio * producto.cantidad
  })

  function agregarProducto (producto, cantidad) {

    const productoExistente = carrito.find((item) => item.nombre === producto.nombre)

    if (!productoExistente) {
      const nuevoProducto = {...producto, cantidad: cantidad}
      const nuevoCarrito = [...carrito]
      nuevoCarrito.push(nuevoProducto)
      setCarrito(nuevoCarrito)
      return
    }

    const nuevoCarrito = carrito.map( (item) => {
      if (item.nombre === producto.nombre) {
        const itemActualizado = {...item, cantidad: item.cantidad + cantidad}
        return itemActualizado
      }
      return item
    })

    setCarrito(nuevoCarrito)
    
  }

  function restarProducto (producto) {

    const productoExistente = carrito.find((item) => item.nombre === producto.nombre)
    
    if (productoExistente && productoExistente.cantidad > 1) {

      const nuevoCarrito = carrito.map( (item) => {
        if (item.nombre === producto.nombre) {
          const itemActualizado = {...item, cantidad: item.cantidad - 1}
          return itemActualizado
        }
        return item
      })
      setCarrito(nuevoCarrito)
      return
    }

    eliminarProducto(producto)
  }

  function eliminarProducto (producto) {

    const nuevoCarrito = carrito.filter((item) => {
      return item.nombre !== producto.nombre
    } )

    setCarrito(nuevoCarrito)
  }

  function vaciarCarrito () {

    setCarrito([])
  }

  function actualizarTexto(evento) {

    const nombre = evento.target.value

    setTextoInput(nombre)
  }

  function guardarNombre () {

    const nombre = textoInput.trim()

    if (nombre === ""){
      return
    }

    setNombreTienda(nombre)

    setTextoInput("")

  }

  return (
    <main className="tienda" >

      <header className="tienda__header">
        <h1 className="tienda__titulo" >{nombreTienda}</h1>
        <p className="tienda__subtitulo" >Accesorios para tu computadora</p>
        <div className="tienda__formulario">
          <input 
            className="tienda__input"
            type="text" 
            placeholder="Escribe el nombre de tu tienda"
            value={textoInput}
            onChange={actualizarTexto}
          />
          <button className="tienda__boton" onClick={guardarNombre}>Confirmar</button>
        </div>
      </header>

      <section className="tienda__productos">
        {productos.map( (producto) => (
        <Producto 
          key={producto.nombre}
          nombre={producto.nombre}
          precio={producto.precio}
          icono={producto.icono}
          onAgregar={(cantidad) => agregarProducto(producto, cantidad)}
        />
      ) )}
      </section>

      <Carrito 
      items={carrito} 
      cantidad={cantidadTotal}
      total={total} 
      onSumar={agregarProducto} 
      onVaciar={vaciarCarrito} 
      onRestar={restarProducto}
      onQuitar={eliminarProducto}
      />

    </main>
  )
}

export default App
