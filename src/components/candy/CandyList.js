import React, { Component } from 'react';



export default class CandyList extends Component {
        render() {
            return (
                <section className="candies">
                {
                    this.props.candyTypes.map(candy =>
                        <div key={candy.id}>
                            {candy.name}
                        </div>
                    )
                }
                </section>
            )
        }
    }