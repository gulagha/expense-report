const { groupByMonth } = require('./utils.ts'); // Assuming your function is in the groupExpenses.js file

describe('groupByMonth', () => {
  it('returns empty array for no data', () => {
    expect(groupByMonth([])).toEqual([]);
  });

  it('groups single entry', () => {
    const data = [
      {
        "amount": 10.50,
        "date": 1625526000000, // July 2021
        "description": "Grocery shopping at the local supermarket"
      }
    ];

    expect(groupByMonth(data)).toEqual([
      {
        month: 'July',
        year: 2021,
        amount: 10.5
      }
    ]);
  });

  it('sums amounts in the same month and year', () => {
    const data = [
      {
        "amount": 10.50,
        "date": 1625526000000, // July 2021
        "description": "Grocery shopping at the local supermarket"
      },
      {
        "amount": 25.00,
        "date": 1625612400000, // July 2021
        "description": "Dinner at a cozy Italian restaurant"
      }
    ];

    expect(groupByMonth(data)).toEqual([
      {
        month: 'July',
        year: 2021,
        amount: 35.5
      }
    ]);
  });

  it('groups by month and year separately', () => {
    const data = [
      {
        "amount": 10.50,
        "date": 1625526000000, // July 2021
        "description": "Grocery shopping at the local supermarket"
      },
      {
        "amount": 15.00,
        "date": 1643727600000, // February 2023
        "description": "Coffee at a local cafe"
      }
    ];

    expect(groupByMonth(data)).toEqual([
      {
        month: 'July',
        year: 2021,
        amount: 10.5
      },
      {
        month: 'February',
        year: 2022,
        amount: 15.0
      }
    ]);
  });
});
