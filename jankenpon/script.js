const humanPlay = document.querySelector('#human_play')
const computerPlay = document.querySelector('#computer_play')
const scoreWinner = document.querySelector('#score_winner')
const numberOfGames = document.querySelector('#number_of_games')
let counter = 0
const scoreHuman = document.querySelector('#score_human')
const scoreComputer = document.querySelector('#score_computer')
let score_human = 0
let score_computer = 0

// generates a random number from the values ​​passed as a parameter
function getRandomIntInclusive(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// determines the computer's play
const handleComputerChoise = (choise) => {

  let computerChoise = ""

  if(choise === 1){
    computerChoise = "Stone"
  } else if(choise === 2) {
    computerChoise = "Paper"
  } else if(choise === 3) {
    computerChoise = "Scissors"
  }

  return computerChoise
}

// show computer play in html
const handleComputerPlay = () => {
  computerPlay.innerHTML = handleComputerChoise(getRandomIntInclusive(1, 3))
}

// show who is the winner
const handleScoreWinner = (choiseHuman, choiseComputer) => {
  scoreWinner.innerHTML = handleWinner(choiseHuman, choiseComputer)
}

// determines who is the winner
const handleWinner = (choiseHuman, choiseComputer) => {

  let winner = ""

  if (choiseComputer == "" && choiseHuman == "") { 
    winner = " "
  } else if(choiseHuman == "Stone" && choiseComputer == "Scissors"){
    winner = "Human"
    handleScoreHuman()
  } else if (choiseHuman == "Scissors" && choiseComputer == "Paper"){
    winner = "Human"
    handleScoreHuman()
  } else if (choiseHuman == "Paper" && choiseComputer == "Stone"){
    winner = "Human"
    handleScoreHuman()
  } else if(choiseComputer == "Stone" && choiseHuman == "Scissors"){
    winner = "Computer"
    handleScoreComputer()
  } else if (choiseComputer == "Scissors" && choiseHuman == "Paper"){
    winner = "Computer"
    handleScoreComputer()
  } else if (choiseComputer == "Paper" && choiseHuman == "Stone"){
    winner = "Computer"
    handleScoreComputer()
  } else if (choiseComputer == choiseHuman){
    winner = "A tie"
  }

  return winner
}

// determine score and show in html
const handleScoreHuman = () => {
  ++score_human
  scoreHuman.innerHTML = score_human
}

//determine score and show in html
const handleScoreComputer = () => {
  ++score_computer
  scoreComputer.innerHTML = score_computer
}

// count the number of matches
const handleNumberOfGames = (number) => {
  numberOfGames.innerHTML = number
}

//buttons play funtions buttons play funtions buttons play funtions buttons play funtions 
const handleStone = () => {
  humanPlay.innerHTML = `Stone`
  handleComputerPlay()
  handleScoreWinner(humanPlay.textContent, computerPlay.textContent)
  handleNumberOfGames(++counter)
}

const handlePaper = () => {
  humanPlay.innerHTML = `Paper`
  handleComputerPlay()
  handleScoreWinner(humanPlay.textContent, computerPlay.textContent)
  handleNumberOfGames(++counter)
}

const handlScissors = () => {
  humanPlay.innerHTML = `Scissors`
  handleComputerPlay()
  handleScoreWinner(humanPlay.textContent, computerPlay.textContent)
  handleNumberOfGames(++counter)
}

// button reset button reset button reset button reset button reset button reset button reset 
const handleReset = () => {
  humanPlay.innerHTML = `******`
  computerPlay.innerHTML = `******`
  scoreWinner.innerHTML = `******`
  counter = 0
  score_human = 0
  score_computer = 0
  scoreHuman.innerHTML = score_human
  scoreComputer.innerHTML = score_computer
  handleNumberOfGames(counter)
}