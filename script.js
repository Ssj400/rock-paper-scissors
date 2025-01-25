let userInput = prompt("Select Rock, Paper or Scissors")
let engineInput = () => {
    random = (Math.floor(Math.random() * 3)) + 1;
    if (random == 1) {
        return "Rock";
    } else if (random == 2) {
        return "Paper"
    } else if (random == 3) {
        return "Scissors"
    }
}

let humanScore = 0;
let engineScore = 0;

let playRound = (user1, engine) => {
    let user = user1.toLowerCase();
    if (user === "rock" && engine === "Rock") {
        console.log("User: Rock, Engine: Rock, Result: Tie");

    } else if (user === "paper" && engine === "Paper") {
        console.log("User: Paper, Engine: Paper, Result: Tie");

    } else if (user === "scissors" && engine === "Scissors") {
        console.log("User: Scissors, Engine: Scissors, Result: Tie");

    } else if (user === "rock" && engine === "Scissors") {
        console.log("User: Rock, Engine: Scissors, Result: You win!");

    } else if (user === "rock" && engine === "Paper") {
        console.log("User: Rock, Engine: Paper, Result: Engine wins!");

    } else if (user === "paper" && engine === "Scissors") {
        console.log("User: Paper, Engine: Scissors, Result: Engine wins!");

    } else if (user === "scissors" && engine === "Rock") {
        console.log("User: Scissors, Engine: Rock, Result: Engine wins!");

    } else if (user === "paper" && engine === "Rock") {
        console.log("User: Paper, Engine: Rock, Result: You win!");

    } else if (user === "scissors" && engine === "Paper") {
        console.log("User: Scissors, Engine: Paper, Result: Engine wins!");

    } else {
        console.log("Please write Rock, Paper or Scissors");
    }
}

playRound(userInput, engineInput());