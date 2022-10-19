const prompt = require('prompt-sync')({ sigint: true });

// Initializing game parameters.
var range = 2
var point = 0
var stage = 1

// Requesting players details
console.log('Welcome to number guessing game\n======================');
var name = prompt('Please what is your name: ')
console.log(`Hello ${name}\n`)

var isgameOver = false // Declearing the game state

while (!isgameOver) {
  var guessedNumber = Math.round(Math.random() * range)
  console.log(guessedNumber)
  console.log(`Stage: ${stage}\nTotal game point: ${point}`)

  var numberGuess = prompt(`Kindly guess a number from 1 to ${range}: `)
  numberGuess = Number(numberGuess)

  if (numberGuess === guessedNumber) {
    stage += 1
    point += 1
    range += 1
    console.log('Congratulation you passed it🙌🙌')
  } else {
    isgameOver = true;
    if (isgameOver) {
      console.log('GAME OVER!!!')
      console.log(`Final point is: ${point}`)
    }
  }
}
