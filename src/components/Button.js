import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  orangify = val => {
		return val === "AC";
	}
		
	orangeBg = val => {
		return val === "=";
	}

	operator = val => {
		return !isNaN(val) || val === "AC" || val === "." || val === "=";
	}

  render() {
    return (
      <div className={`button ${this.orangify(this.props.children) ? "orange-font" : ""} ${this.orangeBg(this.props.children) ? "orange-bg" : ""} ${this.operator(this.props.children) ? "" : "operator"}`}
			onClick={()=> this.props.handleClick(this.props.children)}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;