import './QuantityBar.css';
import React from "react";

class QuantityBar extends React.Component {

    state= {quantity:1}

    addProduct=()=>{
        this.setState({quantity:this.state.quantity+1})
    }
    reduceProduct=()=>{
        if(this.state.quantity !==1)
            this.setState({quantity:this.state.quantity-1})
    }
    render(){
        const {quantity} =this.state
        return (
            <div>
                <span className="quantity_container">
                    <span className="quantityText">Quantity:</span>
                    <button className="add" onClick={this.addProduct}>+</button>
                    <span className="quantityToAdd">{quantity}</span>
                    <button className="reduce" onClick={this.reduceProduct}>-</button>
                </span>
            </div>
        )};
};

export default QuantityBar;