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

  const [cantidad, setCantidad] = useState(0)

  function agregarProducto () {
    const aumentar = cantidad + 1
    setCantidad(aumentar)
  }

  return (
    <main className="tienda" >

      <header className="tienda__header">
        <h1 className="tienda__titulo" >Mi tienda</h1>
        <p className="tienda__subtitulo" >Accesorios para tu computadora</p>
      </header>

      <section className="tienda__productos">
        {productos.map( (producto) => (
        <Producto 
          key={producto.nombre}
          nombre={producto.nombre}
          precio={producto.precio}
          icono={producto.icono}
          onAgregar={agregarProducto}
        />
      ) )}
      </section>

      <Carrito cantidad={cantidad} />

    </main>
  )
}

export default App
