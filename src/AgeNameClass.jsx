import React from "react"

export default class AgeNameClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = { age: 0, name: "" }
  }

  render() {
    const handleClickAbt = () => {
      this.setState((currentState) => {
        return { age: currentState.age - 1 }
      })
    }

    const handleClickSum = () => {
      this.setState((currentState) => {
        return { age: currentState.age + 1 }
      })
    }

    const handleNameChange = (e) => {
      this.setState({ name: e.target.value })
    }

    return (
      <>
        <input
          type="text"
          value={this.state.name}
          // onChange={(e) => this.state.name(e.target.value)}
          onChange={handleNameChange}
        />
        <br />
        <div className="card">
          <button className="btn btn-accent" onClick={handleClickAbt}>
            -
          </button>
          <label>{this.state.age}</label>
          <button className="btn btn-accent" onClick={handleClickSum}>
            +
          </button>
        </div>
        <div className="div-text">
          My name is {this.state.name} and I am {this.state.age} years old
        </div>
      </>
    )
  }
}
