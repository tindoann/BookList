import React, { Component } from 'react'

class Book extends Component {

  constructor(props){
    super(props)
    this.state={
      count:0,
    };
  }
    // this.handleClick = this.handleClick.bind(this)
  



// handleClick(){
//   console.log('you clicked me'); 
//   console.log(this.state.count);
// }

addCount = () => {
  this.setState({
    count: this.state.count + 1
  }); 
}; 
lowerCount = () => {
  this.setState({
    count: this.state.count - 1
  }); 
}; 
resetCount = () => {
  this.setState({
    count: 0
  }); 
}; 

  render() {
    const { img, title, author } = this.props.info; 
    return (
      <div className="book">
        <img src={img} width="150px" alt="book" />
        <div>
          <h4>Title : {title}</h4>
          <h6>BY : {author}</h6>
          <button onClick={this.addCount}>Add Count</button>
          <button onClick={this.lowerCount}>Lower Count</button>
          <button onClick={this.resetCount}>Reset Button</button>
          <h1>count : {this.state.count} </h1>
        </div>
      </div>
    )
  }
}

export default Book; 
