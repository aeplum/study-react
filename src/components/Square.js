import React, { Component } from 'react'
import "./Square.css";

export default class Square extends Component {
    render() {
        return (
            <button classNmae="square">
                {this.props.value}
            </button>
        )
    }
}
