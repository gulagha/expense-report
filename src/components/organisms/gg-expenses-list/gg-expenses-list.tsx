/* eslint-disable react/jsx-no-bind */
import { Component, Host, h } from '@stencil/core';

const data = [
  {
    "amount": "10.50",
    "date": 1625526000000,
    "description": "Grocery shopping at the local supermarket"
  },
  {
    "amount": "25.00",
    "date": 1625612400000,
    "description": "Dinner at a cozy Italian restaurant"
  },
  {
    "amount": "15.75",
    "date": 1625698800000,
    "description": "Movie tickets for the latest blockbuster"
  },
  {
    "amount": "5.99",
    "date": 1625785200000,
    "description": "Coffee and pastry from a popular café"
  },
  {
    "amount": "50.00",
    "date": 1625871600000,
    "description": "Clothing shopping spree at a trendy boutique"
  },
  {
    "amount": "12.25",
    "date": 1625958000000,
    "description": "Taxi ride to the city center"
  },
  {
    "amount": "8.75",
    "date": 1626044400000,
    "description": "Lunch at a local deli with friends"
  },
  {
    "amount": "17.99",
    "date": 1626130800000,
    "description": "Concert tickets for a favorite band"
  },
  {
    "amount": "30.50",
    "date": 1626217200000,
    "description": "Weekend getaway at a scenic resort"
  },
  {
    "amount": "9.99",
    "date": 1626303600000,
    "description": "Online purchase of a bestselling novel"
  }
]

@Component({
  tag: 'gg-expenses-list',
  styleUrl: 'gg-expenses-list.css',
  shadow: true,
})
export class GgExpensesList {

  render() {
    return (
      <Host>
        {data.map((object) => (
          <gg-list-item
            onEdit={() => console.log("Triggered by outside edit")}
            onDelete={() => console.log("Triggered by outside delete")}
            date={new Date(object.date).toDateString()}
            description={object.description}
            amount={object.amount} />
        ))}
      </Host>
    );
  }

}
