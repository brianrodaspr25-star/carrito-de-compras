import Producto from "./Producto"
import Carrito from "./Carrito"
import { useState } from "react"

const productos = [
  {nombre: "Teclado", precio: 150},
  {nombre: "Mouse", precio: 75},
  {nombre: "Audífonos", precio: 200}
]

function App() {

  const [cantidad, setCantidad] = useState(0)

  function agregarProducto () {
    const aumentar = cantidad + 1
    setCantidad(aumentar)
  }

  return (
    <>
      {productos.map( (producto) => (
        <Producto 
          key={producto.nombre}
          nombre={producto.nombre}
          precio={producto.precio}
          onAgregar={agregarProducto}
        />
      ) )}

      <Carrito cantidad={cantidad} />
    </>
  )
}

export default App
