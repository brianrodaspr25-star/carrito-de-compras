import Producto from "./Producto"
import Carrito from "./Carrito"

function App() {
  return (
    <>
      <Producto nombre="Teclado" precio={150} onAgregar={() => console.log("Click")} />

      <Carrito cantidad={1} />
    </>
  )
}

export default App
