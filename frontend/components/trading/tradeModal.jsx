import React from 'react';

// THIS COMPONENT IS A SUBCOMPONENT OF THE HOMEPAGE COMPONENT
class TradeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: this.props.symbol,
      quantity: "Quantity"
    }

    this.handleBuy = this.handleBuy.bind(this);
    this.handleSell = this.handleSell.bind(this);
    this.onChangeSymbol = this.onChangeSymbol.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.hasEnoughCash = this.hasEnoughCash.bind(this);
  }


  onChangeSymbol(event) {
    this.setState({
      symbol: event.target.value
    });
  }


  onChangeQuantity(event) {
    this.setState({
      quantity: event.target.value
    });
  }


  handleBuy() {
    let quantity = this.state.quantity;
    // debugger

    // Display error if quantity is not a number or negative
    if (isNaN(quantity) || Number(quantity) <= 0) {
      alert('Please enter a valid quantity');
    } else if (this.hasEnoughCash()) {                       // Validate that user cash balance is sufficient 
      console.log('YAY!!');
    } else {
      alert('You do not have enough buying power!');
    }
  }


  hasEnoughCash() {
    // debugger
    const { symbol, price, cashBalance, portfolio, userId } = this.props;
    const quantity = Number(this.state.quantity);
    
    // Compute total purchase value = price * quantity
    const totalPurchaseValue = price * quantity;

    // Check if user has enough cash to cover totalPurchaseValue
    return (cashBalance >= totalPurchaseValue);
  }



  handleSell() {
    // debugger
  }


  render() {
    // debugger
    const { toggleModal, price } = this.props || {};

    return (
      <div id="modal-container">
        <span id="trading-modal-close-button" onClick={toggleModal}>&times;</span>
        {/* <form action=""> */}
          <input id="trading-input-symbol" 
            type="text" 
            placeholder={this.state.symbol}
            onChange={this.onChangeSymbol}/>
          <span>Current Price: <span>{price}</span> </span>
          <input id="trading-input-quantity" 
            type="text" 
            placeholder={this.state.quantity}
            onChange={this.onChangeQuantity}/>
          <button id="trading-modal-buy" onClick={this.handleBuy}>BUY</button>
          <button id="trading-modal-buy" onClick={this.handleSell}>SELL</button>
        {/* </form> */}
      </div>
    );
  }
}
  
export default TradeModal;

