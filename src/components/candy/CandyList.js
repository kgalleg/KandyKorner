import React, { Component } from "react";


export default class CandyList extends Component {
  render() {
    return (
      <section className="candies">
        {this.props.candies.map(candy => (
          <div key={candy.id}>
            <h5>{candy.name}</h5>
            of type
            {
                this.props.candyTypes
                .find(name => name.id === candy.candyTypeId)
                .name

            }
          </div>
        ))}
      </section>
    );
  }
}
