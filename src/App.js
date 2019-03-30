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
      operator: "",
      pressed: false
    }
  }

  addToInput = val => {
    // Appends a number to the input
    if (this.state.pressed === true){
      // Resets the calculator after completing a calculation
      this.clearAll();
      this.setState({
        input: val
      })
    } else {
      this.setState({
        input: this.state.input + val
      })
    }
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
      operator: "",
      pressed: false
    })
  }

  clearOne = () => {
    // Clear the last number from input
    if (this.state.pressed !== true) {
      this.setState({
        input: this.state.input.substr(0, this.state.input.length - 1)
      })
    }
  }

  add = () => {
    // Addition operator
    if (this.state.operator === "" && this.state.prev === "") {
      // Prints prev number if no number exists
      this.setState({
        prev: this.state.input,
        input: "",
        operator: "+"
      });
    } 
    else if (this.state.curr === "" && this.state.operator === "+"){
      // Adds number to prev if user presses '+' instead of '='
      this.setState({
        prev : (parseFloat(this.state.prev) + parseFloat (this.state.input)),
        input: "",
        operator: "+"
      })
    } 
    else if (this.state.operator !== "+" && this.state.curr === "" && this.state.input !== ""){
      // Calls the changeOperators function to complete the outstanding equation before changing to a new operator
      this.changeOperators();
      this.setState({
        operator: "+",
        input: ""
      })
    } 
    else if (this.state.operator !== "+" && this.state.curr === ""){
      // Changes operator to '+' if it is not already
      this.setState({
        operator: "+"
      })
    } 
    else {
      // Adds number to prev and resets the input and curr if the user used '=' previously
      this.setState({
        prev : this.state.input,
        curr: "",
        input: "",
        operator: "+",
        pressed: false
      })
    }
  }

  sub = () => {
    // Subtraction operator
    if (this.state.operator === "" && this.state.prev === "") {
      // Prints prev number if no number exists
      this.setState({
        prev: this.state.input,
        input: "",
        operator: "-"
      });
    } 
    else if (this.state.curr === "" && this.state.operator === "-"){
      // Subtracts number to prev if user presses '-' instead of '='
      this.setState({
        prev : (parseFloat(this.state.prev) - parseFloat (this.state.input)),
        input: "",
        operator: "-"
      })
    } 
    else if (this.state.operator !== "-" && this.state.curr === "" && this.state.input !== ""){
      // Calls the changeOperators function to complete the outstanding equation before changing to a new operator
      this.changeOperators();
      this.setState({
        operator: "-",
        input: ""
      })
    } 
    else if (this.state.operator !== "-" && this.state.curr === ""){
      // Changes operator to '-' if it is not already
      this.setState({
        operator: "-"
      })
    } 
    else {
      // Subtracts number to prev and resets the input and curr if the user used '=' previously
      this.setState({
        prev : this.state.input,
        curr: "",
        input: "",
        operator: "-",
        pressed: false
      })
    }
  }

  mul = () => {
    // Multiplication operator
    if (this.state.operator === "" && this.state.prev === "") {
      // Prints prev number if no number exists
      this.setState({
        prev: this.state.input,
        input: "",
        operator: "*"
      });
    } 
    else if (this.state.curr === "" && this.state.operator === "*"){
      // Multiplies number to prev if user presses '*' instead of '='
      this.setState({
        prev : (parseFloat(this.state.prev) * parseFloat (this.state.input)),
        input: "",
        operator: "*"
      })
    } 
    else if (this.state.operator !== "*" && this.state.curr === "" && this.state.input !== ""){
      // Calls the changeOperators function to complete the outstanding equation before changing to a new operator
      this.changeOperators();
      this.setState({
        operator: "*",
        input: ""
      })
    } 
    else if (this.state.operator !== "*" && this.state.curr === ""){
      // Changes operator to '*' if it is not already
      this.setState({
        operator: "*"
      })
    } 
    else {
      // Multiplies number to prev and resets the input and curr if the user used '=' previously
      this.setState({
        prev : this.state.input,
        curr: "",
        input: "",
        operator: "*",
        pressed: false
      })
    }
  }

  div = () => {
    // Division operator
    if (this.state.operator === "" && this.state.prev === "") {
      // Prints prev number if no number exists
      this.setState({
        prev: this.state.input,
        input: "",
        operator: "/"
      });
    } 
    else if (this.state.curr === "" && this.state.operator === "/"){
      // Divides number to prev if user presses '/' instead of '='
      this.setState({
        prev : (parseFloat(this.state.prev) / parseFloat (this.state.input)),
        input: "",
        operator: "/"
      })
    } 
    else if (this.state.operator !== "/" && this.state.curr === "" && this.state.input !== ""){
      // Calls the changeOperators function to complete the outstanding equation before changing to a new operator
      this.changeOperators();
      this.setState({
        operator: "/",
        input: ""
      })
    } 
    else if (this.state.operator !== "/" && this.state.curr === ""){
      // Changes operator to '/' if it is not already
      this.setState({
        operator: "/"
      })
    } 
    else {
      // Divides number to prev and resets the input and curr if the user used '=' previously
      this.setState({
        prev : this.state.input,
        curr: "",
        input: "",
        operator: "/",
        pressed: false
      })
    }
  }

  // Function that finishes evaluating the previous calculation before moving on to change into another operator
  changeOperators = () => {
    if (this.state.operator === "+") {
      this.setState({
        prev : (parseFloat(this.state.prev) + parseFloat (this.state.input))
      })
    } else if (this.state.operator === "-") {
      this.setState({
        prev : (parseFloat(this.state.prev) - parseFloat (this.state.input))
      })
    } else if (this.state.operator === "/") {
      this.setState({
        prev : (parseFloat(this.state.prev) / parseFloat (this.state.input))
      })
    } else if (this.state.operator === "*") {
      this.setState({
        prev : (parseFloat(this.state.prev) * parseFloat (this.state.input))
      })
    }
  }

  // Evaluate the equation according to operators used
  evaluate = () => {
    // Change pressed boolean to reset calculator after calculation
    this.setState({curr: this.state.input, pressed: true}, ()=> {

      if (this.state.operator === "+" && this.state.curr !== "") {
        this.setState({
          input : (parseFloat(this.state.prev) + parseFloat (this.state.curr))
        })
      } else if (this.state.operator === "-" && this.state.curr !== "") {
        this.setState({
          input : (parseFloat(this.state.prev) - parseFloat (this.state.curr))
        })
      } else if (this.state.operator === "/" && this.state.curr !== "") {
        this.setState({
          input : (parseFloat(this.state.prev) / parseFloat (this.state.curr))
        })
      } else if (this.state.operator === "*" && this.state.curr !== "") {
        this.setState({
          input : (parseFloat(this.state.prev) * parseFloat (this.state.curr))
        })
      } else {
        // Do nothing if curr value is blank (reset the pressed boolean to false)
        this.setState({
          pressed: false
        })
      }
    })
  }

  percentage = () => {
    // Evaluate the equation in percentage
    this.setState({curr: this.state.input}, ()=> {
      if (this.state.operator === "+") {
        this.setState({
          input : (parseFloat(this.state.prev) + parseFloat(this.state.prev*(this.state.curr/100)))
        })
      } else if (this.state.operator === "-") {
        this.setState({
          input : (parseFloat(this.state.prev) - parseFloat(this.state.prev*(this.state.curr/100)))
        })
      } else if (this.state.operator === "/") {
        this.setState({
          input : (parseFloat(this.state.prev) / parseFloat(this.state.curr/100))
        })
      } else if (this.state.operator === "*") {
        this.setState({
          input : (parseFloat(this.state.prev) * parseFloat(this.state.curr/100))
        })
      } else {
        return;
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
            <Button handleClick={() => this.clearOne()}><img src={backspace} className='backspace-icon' alt="icon"/></Button>
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
