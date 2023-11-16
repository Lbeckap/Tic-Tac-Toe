// New TicTacToe Game Instructions 3-27-2023

//  Step 1 :
/*
//  1a: Create a constant variable named "gameSquaresArray".

//  1b: Set "gameSquaresArray" to an array containing all 9 combinations of unique id attributes for each square element.
//  ex.) "top-left", "bottom-right"
*/
const gameSquaresArray = ['top-left','top-center', 'top-right','center-left','center-center', 'center-right','bottom-left','bottom-center', 'bottom-right'];
console.log(gameSquaresArray);

// Step 2 :
/*
// 2a: Make a reassignable variable named isItXTurn.
// 2b: Set isItXTurn to a TRUE boolean value.
*/
let isItXTurn = true;

//Step 3 :
function handleSquareClick(squaredId) {
  const clickedElement = document.getElementById(squaredId);
  if (isItXTurn) {
    clickedElement.innerText = "X";
  }else {
    clickedElement.innerText = "O";
  }
  isItXTurn = !isItXTurn;
}
/*

// Step 3 :

  3a: Make a function named "handleSquareClick" that will contain the logic.

  3b: Inside the "handleSquareClick" function, we will handle what happens when a square is clicked. 
  
  3c: Pass a parameter into the handleSquareClick function named "squareId".
  
  (The following steps (3d-3n) go inside the "handleSquareClick" function").
  
  3d: Create a constant variable called "clickedElement".
  
  3e: Make clickedElement variable equal to "document.getElementById(squaredId)".

  3f: Create an if / else statement to check if isItXTurn (from step 2)
  
  3g: If isItXTurn, set the clickedElement variable (step 3d) inner text to 'X'.

  3h: Else (it must be O (letter 0) turn), set the clickedElement variable (step 3d) inner text to 'O'.
  
  3i: Set isItXTurn to !isItXTurn to flip whose turn it is.

  3j: Create a constant variable called "whosTurnElement".
  
  3k: Make "whosTurnElement" variable equal to "document.getElementById("who-turn").
  (You should make an section element with id equal to "whos-turn" in your HTML)

  3l: Create an if / else statement to check if isItXTurn (from step 2)
  
  3m: If isItXTurn, set the "whosTurnElement" variable (step 3d) inner text to 'X'.

  3n: Else (it must be O (letter 0) turn), set the "whosTurnElement" variable (step 3d) inner text to 'O'.
  
*/

// Step 4 :
function newGameButtonAlert() {
  alert("The New Game Button was clicked");
}
/*

  4a: Create a function named "newGameButtonAlert". (We will pass thus into an event listener later);
  
  4b: Inside the "newGameButtonAlert",  use the ALERT method to tell the user that "The New Game Button was clicked". 
*/

// Step 5 :
function newGameSquaresSetup() {
  gameSquaresArray.forEach((squaredId) => {

    const clickedElement = document.getElementById(squaredId);
    clickedElement.innerText = "";
  }

  )};
 

/*

  5a: Create a function named "newGameSquaresSetup". 

  5b:(Steps 5c-5e) go inside the "newGameSquaresSetup" function,
  
  5c: For the gameSquaresArray variable (step 1a.), use the forEach function and pass in the parameter "squareId".
  
  5d: Inside the forEach function,  Create a constant variable called "clickedElement" and set it to "document.getElementById(squaredId)"
  
  5e: Inside the forEach function,  Set the "clickedElement" innerText to "".

*/

// Step 6 :
function forfeitButtonAlert() {
  alert("The Forfeit Button was clicked");
}
/*
    6a: Create a function named "forfeitButtonAlert". (We will pass thus into an event listener later)
  
    6b: Inside the "forfeitButtonAlert" function,  use the ALERT method to tell the user that "The Forfeit Button was clicked". 
*/

// Step 7 :
function loadSquares() {
  const gameArea = document.getElementById("game-area");
  gameSquaresArray.forEach((square) => {
    const squareElement = document.createElement("section");
    squareElement.setAttribute('id', square); 
    gameArea.appendChild(squareElement);
    squareElement.addEventListener("click", () => {handleSquareClick(square)})
  })
    
  }

/*

  7a: Create a function named "loadSquares". 

  7b:(Steps 7c-7j) go inside the "loadSquares" function,
  
  7c: Create a constant variable called "gameArea". 
  
  7d: Set the gameArea variable (step 7c.), to  document.getElementById("game-area"). (You should have a section tag with this id in your HTML file).

  7e: For the gameSquaresArray variable (step 1a.), use the forEach function and pass in the parameter "square" (no quotes).
  
  7g: Inside the forEach function,  Create a constant variable called "squareElement" and set it equal to document.createElement("section")
  
  7h: Inside the forEach function,  Using the setAttribute method, set "squareElement" variable with an id equal to the square parameter(no quotes).
 
  7i: Inside the forEach function,  Using the appendChild method, append the "squareElement" to gameArea variable.
  
  7j: Inside the forEach function,  Using the addEventListener method, add a "click" listener to the "squareElement"  and anonymous function " () => {handleSquareClick(square)} ".


*/

// Step 8 :
const forfeitGameBtn = document.getElementById("forfeit-game-btn");
forfeitGameBtn.addEventListener("click", forfeitButtonAlert);

/*

  8a: Create a constant variable named "forfeitGameBtn".

  8b: Set "forfeitGameBtn" variable to  "document.getElementById("forfeit-game-btn")"; 
  (Should have element with same id in your HTML file)
  
  8c: Using the addEventListener method, add a "click" listener to the "forfeitGameBtn" variable and the function named forfeitButtonAlert. (no anonymous function needed)
*/

// Step 9 :
const newGameBtn = document.getElementById("new-game-btn");
newGameBtn.addEventListener("click", newGameButtonAlert);
newGameBtn.addEventListener("click", newGameSquaresSetup);

/*

  9a: Create a constant variable named "newGameBtn".

  9b: Set "newGameBtn" variable to  "document.getElementById("new-game-btn")"; 
  (Should have element with same id in your HTML file)
  
  9c: Using the addEventListener method, add a "click" listener to the "newGameBtn" variable and the function named newGameButtonAlert. (no anonymous function needed)

  9d: Using the addEventListener method, add a "click" listener to the "newGameBtn" variable and the function named newGameSquaresSetup. (no anonymous function needed)
*/

// Step 10 :
window.addEventListener("load", loadSquares);

/*
  10a: Using the addEventListener method, add a "load" listener to the window object and the function named loadSquares. (no anonymous function needed)
*/
