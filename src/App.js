import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import backspace from './backspace.svg';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      curr: "",
      prev: "",
      operator: ""
    }
  }

  addToInput = val => {
    // Appends a number to the input
    this.setState({
      input: this.state.input + val
    })
  }

  addZero = val => {
    // Appends the number 0 to input if 0 is not the first number
    if (this.state.input !== "") {
    this.setState({input: this.state.input + val})
    }
  }

  addDecimal = val => {
    // Sets decimal point if decimal point has not been set
    if (this.state.input.indexOf(".") === -1) {
      this.setState({input: this.state.input + val})
      }
  }

  clearAll = () => {
    // Clears all states
    this.setState({
      input: "",
      curr: "",
      prev: "",
      operator: ""
    })
  }

  clearOne = () => {
    // Clear the last number from input
    this.setState({
      input: this.state.input.substr(0, this.state.input.length - 1)
    })
  }

  add = () => {
    // Addition operator
    this.setState({
      prev: this.state.input,
      input: "",
      operator: "+"
    });
  }

  sub = () => {
    // Subtraction operator
    this.setState({
      prev: this.state.input,
      input: "",
      operator: "-"
    });
  }

  mul = () => {
    // Multiplication operator
    this.setState({
      prev: this.state.input,
      input: "",
      operator: "*"
    });
  }

  div = () => {
    // Division operator
    this.setState({
      prev: this.state.input,
      input: "",
      operator: "/"
    });
  }

  evaluate = () => {
    // Evaluate the equation
    this.setState({curr: this.state.input}, ()=> {
      if (this.state.operator === "+") {
        this.setState({
          input : (parseFloat(this.state.prev) + parseFloat (this.state.curr))
        })
      } else if (this.state.operator === "-") {
        this.setState({
          input : (parseFloat(this.state.prev) - parseFloat (this.state.curr))
        })
      } else if (this.state.operator === "/") {
        this.setState({
          input : (parseFloat(this.state.prev) / parseFloat (this.state.curr))
        })
      } else if (this.state.operator === "*") {
        this.setState({
          input : (parseFloat(this.state.prev) * parseFloat (this.state.curr))
        })
      }
    })
  }

  percentage = () => {
    // Evaluate the equation in percentage
    this.setState({curr: this.state.input}, ()=> {
      if (this.state.operator === "+") {
        this.setState({
          input : (parseFloat(this.state.prev) + parseFloat (this.state.prev*(this.state.curr/100)))
        })
      } else if (this.state.operator === "-") {
        this.setState({
          input : (parseFloat(this.state.prev) - parseFloat (this.state.prev*(this.state.curr/100)))
        })
      } else if (this.state.operator === "/") {
        this.setState({
          input : (parseFloat(this.state.prev) / parseFloat (this.state.prev*(this.state.curr/100)))
        })
      } else if (this.state.operator === "*") {
        this.setState({
          input : (parseFloat(this.state.prev) * parseFloat (this.state.prev*(this.state.curr/100)))
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>
              <div>{this.state.prev}{this.state.operator}{this.state.curr}</div>
              <div>{this.state.input}</div>
            </Input>
          </div>
          <div className="row">
            <Button handleClick={this.clearAll}>AC</Button>
            <Button handleClick={this.clearOne}><img src={backspace} className='backspace-icon' alt="icon"/></Button>
            <Button handleClick={() => this.percentage()}>%</Button>
            <Button handleClick={this.div}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.mul}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.sub}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button></Button>
            <Button handleClick={this.addZero}>0</Button>
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={() => this.evaluate()}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
