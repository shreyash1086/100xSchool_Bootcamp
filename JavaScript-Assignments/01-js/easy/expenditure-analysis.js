/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let arr = [];
  let categoryMap = new Map();
  for (let i = 0; i < transactions.length; i++) {
    categoryMap.set(transactions[i].category, (categoryMap.get(transactions[i].category) || 0)+transactions[i].price);
  }
  
  let i = 0;
  for (const [key, value] of categoryMap) {
    arr[i] = { category: key, totalSpent: value };
    i++;
  }
  
  return arr;
}
const items = [
  {
    itemName: "Apple",
    category: "Fruit",
    price: 1.2,
    timestamp: "2026-01-28T10:15:00Z"
  },
  {
    itemName: "Banana",
    category: "Fruit",
    price: 0.8,
    timestamp: "2026-01-28T10:20:00Z"
  },
  {
    itemName: "Milk",
    category: "Dairy",
    price: 2.5,
    timestamp: "2026-01-28T11:00:00Z"
  },
  {
    itemName: "Cheese",
    category: "Dairy",
    price: 4.75,
    timestamp: "2026-01-28T11:10:00Z"
  },
  {
    itemName: "Bread",
    category: "Bakery",
    price: 1.8,
    timestamp: "2026-01-28T12:30:00Z"
  },
  {
    itemName: "Croissant",
    category: "Bakery",
    price: 2.2,
    timestamp: "2026-01-28T12:45:00Z"
  }
];

// calculateTotalSpentByCategory(items)
module.exports = calculateTotalSpentByCategory;