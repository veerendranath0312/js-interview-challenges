/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

const shoppingCart = [
  {
    item: "🍭",
    price: 2.99,
    type: "sweet",
    onSale: true,
  },
  {
    item: "🍫",
    price: 1.99,
    type: "sweet",
    onSale: true,
  },
  {
    item: "🥫",
    price: 1.99,
    type: "savory",
    onSale: false,
  },
  {
    item: "🍬",
    price: 0.89,
    type: "sweet",
    onSale: false,
  },
  {
    item: "🥦",
    price: 3.99,
    type: "savory",
    onSale: false,
  },
  {
    item: "🍖",
    price: 3.99,
    type: "savory",
    onSale: true,
  },
]

function totalSavory(arr) {
  return arr
    .reduce(
      (acc, product) => (product.type === "savory" ? acc + product.prize : acc),
      0
    )
    .toFixed(2)
}

console.log(totalSavory(shoppingCart))
