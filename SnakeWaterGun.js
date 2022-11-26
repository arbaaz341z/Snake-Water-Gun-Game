/*********************************
**********************************
**  Coded By: Mohammed Arbaaz   **
**********************************
**********************************/

console.log("******Snake Water and Gun game*****");
let name = prompt("Enter your Name");
console.log("Welcome to the game", name);
let level = prompt("Choose Your Level\n1: Easy Level-10 Chances\n2: Medium Level-5 Chances \n3: Hard Level-3 Chances\nChoose '1' '2' or '3' to begin");

let userScore = 0
let computerScore = 0
let n = 0

switch (level) {
  case '1':
    n = 10
    for (i = 0; i < 10; i++) {
      game()
    }

    break;
  case '2':
    n = 5
    for (i = 0; i < 5; i++) {
      game()
    }

    break;
  case '3':
    n = 3
    for (i = 0; i < 3; i++) {
      game()
    }

    break;

  default:
    console.log("Please choose a valid level")
    break;
}

function game() {
  let user = prompt("Enter 'S' , 'W' or 'G'");
  user = user.toUpperCase();
  let com = Math.floor(Math.random() * 3);
  let computer = ["S", "W", "G"][com]
  if (user === computer) {
    n--
    console.log("***********************************");
    console.log(`Draw!! - \nCOMPUTER: ${computer} \nUSER: ${user} \nComputer Score:${computerScore}  \nYour Score: ${userScore} \n${n} chances left \n`);
    
    console.log("***********************************");
  } else if (computer === "S" && user === "W") {
    computerScore++
    n--
    console.log("***********************************");
    console.log(`Computer Won!! - \nCOMPUTER: ${computer} \nUSER: ${user} \nComputer Score:${computerScore}  \nYour Score: ${userScore} \n${n} chances left \n`);
    
    console.log("***********************************");
  }
  else if (computer === "S" && user === "G") {
    userScore++
    n--
    console.log("***********************************");
    console.log(`User Won!! - \nCOMPUTER: ${computer} \nUSER: ${user} \nComputer Score:${computerScore}  \nYour Score: ${userScore} \n${n} chances left \n`);
    
    console.log("***********************************");
  }
  else if (computer === "G" && user === "W") {
    userScore++
    n--
    console.log("***********************************");
    console.log(`User Won!! - \nCOMPUTER: ${computer} \nUSER: ${user} \nComputer Score:${computerScore}  \nYour Score: ${userScore} \n${n} chances left \n`);
    
    console.log("***********************************");
  }
  else if (computer === "G" && user === "S") {
    computerScore++
    n--
    console.log("***********************************");
    console.log(`Computer Won!! - \nCOMPUTER: ${computer} \nUSER: ${user} \nComputer Score:${computerScore}  \nYour Score: ${userScore} \n${n} chances left \n`);
    
    console.log("***********************************");
  }
  else if (computer === "W" && user === "S") {
    userScore++
    n--
    console.log("***********************************");
    console.log(`User Won!! - \nCOMPUTER: ${computer} \nUSER: ${user} \nComputer Score:${computerScore}  \nYour Score: ${userScore} \n${n} chances left \n`);
    
    console.log("***********************************");
  }
  else if (computer === "W" && user === "G") {
    computerScore++
    n--
    console.log("***********************************");
    console.log(`Computer Won!! - \nCOMPUTER: ${computer} \nUSER: ${user} \nComputer Score:${computerScore}  \nYour Score: ${userScore} \n${n} chances left \n`);
    
    console.log("***********************************");

  } else {
    console.log("***********************************");
    console.log("Enter a valid choice: ")
    console.log("***********************************");
  }

  
  if (userScore === computerScore && n === 0) {
    console.log("***********************************");
    console.log("Game Draw")
    console.log("***********************************");


  } else if (userScore > computerScore && n === 0) {
    console.log("***********************************");
    console.log("You Won!!")
    console.log("***********************************");


  } else if (userScore < computerScore && n === 0) {
    console.log("***********************************");
    console.log("You loose")
    console.log("***********************************");


  }
}
