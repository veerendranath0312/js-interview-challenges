/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/

const slotMachine = document.querySelector(".emoji-slots-game")
const food = "https://apis.scrimba.com/emojihub/api/all/category/food-and-drink"

function makeFruitArray(arr) {
  return arr.filter((emoji) => emoji.group === "food fruit")
}

function getRandomFruits(arr) {
  const randomFruits = []
  for (let i = 0; i < 9; i++) {
    const randIndex = Math.floor(Math.random() * arr.length)
    randomFruits.push(`<li>${arr[randIndex].htmlCode}</li>`)
  }

  return randomFruits
}

// write your fetch request here
fetch(food)
  .then((response) => response.json())
  .then((data) => {
    const fruits = makeFruitArray(data)
    const randomFruits = getRandomFruits(fruits)

    randomFruits.forEach((fruit) => {
      slotMachine.insertAdjacentHTML("beforeend", fruit)
    })
  })
