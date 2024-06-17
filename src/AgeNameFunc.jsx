import { useState } from "react"

export function AgeNameFunc() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <div className="card">
        <button
          className="btn btn-accent"
          onClick={() => setAge((age) => age - 1)}
        >
          -
        </button>
        <label>{age}</label>
        <button
          className="btn btn-accent"
          onClick={() => setAge((age) => age + 1)}
        >
          +
        </button>
      </div>
      <div className="div-text">
        My name is {name} and I am {age} years old
      </div>
    </>
  )
}
