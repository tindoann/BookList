import React, { Component } from 'react'

class Book extends Component {
  render() {
    const { img, title, author } = this.props.info; 
    return (
      <div className="book">
        <img src={img} width="150px" alt="book" />
        <div>
          <h4>Title : {title}</h4>
          <h6>BY : {author}</h6>
        </div>
      </div>
    )
  }
}

export default Book; 


