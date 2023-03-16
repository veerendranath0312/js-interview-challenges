/* Popularity Contest 

Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media. 

Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get? 

In data.js you'll find a list of Iggy's recent posts. 
Use reduce() to write a function that returns the average number of likes.
To find the average, add up the total number of likes, then divide
by the total number of posts.
*/

const postData = [
  {
    post: "A lot of you have asked about my morning skin care routine...",
    likes: 348,
  },
  {
    post: "New Year, new me. #blessed",
    likes: 102,
  },
  {
    post: "Sunday by the pool 🌴 #vibes #mood #hotdoglegs",
    likes: 544,
  },
  {
    post: "Here are my top 5 #notsponsored unbiased dry shampoo recs...",
    likes: 745,
  },
  {
    post: "Last day in Hawaii! The tans will fade but the memories will last forever #holidays #foreverhawaii #blessed #followme",
    likes: 412,
  },
  {
    post: "Leg day #summerbody2022 #gymshark #beachworkout",
    likes: 275,
  },
]

function calcAverageLikes(data) {
  const total = data.reduce((acc, post) => acc + post.likes, 0)
  return (total / data.length).toFixed(0)
}

console.log(calcAverageLikes(postData))
