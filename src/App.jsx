import "./App.css"
import { AgeNameFunc } from "./AgeNameFunc"
import AgeNameClass from "./AgeNameClass"

function App() {
  return (
    <>
      <div className="div-text">Function component</div>
      <AgeNameFunc />
      <br />
      <div className="div-text">Class component</div>
      <AgeNameClass />
    </>
  )
}

export default App
