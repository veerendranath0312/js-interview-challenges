/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(sentence) {
  return sentence.endsWith("!")
    ? `shh... ${sentence.toLowerCase()}`.slice(0, -1)
    : `shh... ${sentence.toLowerCase()}`
}

console.log(whisper("PLEASE STOP SHOUTING."))
console.log(whisper("MA'AM, this is a Wendy's!"))
