import Producto from "./Producto"

function App() {
  return (
    <>
      <Producto nombre="Teclado" precio={150} onAgregar={() => console.log("Click")} />


    </>
  )
}

export default App
