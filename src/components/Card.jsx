import React from "react"

class Card extends React.Component{
  render() {
    return (
      <div className="card text-white bg-secondary mb-3" style={{ maxWidth: '30rem' }}>
        <h3 className="card-header">
          {this.props.title}
        </h3>
        <div className="card-body-1">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Card