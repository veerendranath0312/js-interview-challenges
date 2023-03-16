/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

const products = [
  {
    product: "🍭",
    price: 2.99,
  },
  {
    product: "🍫",
    price: 0.99,
  },
  {
    product: "🏡",
    price: 40000000,
  },
  {
    product: "🧁",
    price: 0.99,
  },
  {
    product: "📚",
    price: 0.99,
  },
  {
    product: "⏰",
    price: 13.99,
  },
  {
    product: "🍬",
    price: 0.89,
  },
  {
    product: "🥎",
    price: 3.99,
  },
  {
    product: "🎸",
    price: 13.99,
  },
  {
    product: "🎨",
    price: 23.99,
  },
  {
    product: "💕",
    price: 0,
  },
]

/*
a - b sorts numbers in ascending order and 
b - a sorts numbers in descending order 
*/

function sortProducts(data) {
  const sorted = data.sort(
    (product1, product2) => product1.price - product2.price
  )

  return sorted.map((product) => `${product.product},${product.price}`)
}

const listByCheapest = sortProducts(products)
console.log(listByCheapest)
