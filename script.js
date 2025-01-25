
let humanScore = 0;
let engineScore = 0;

let playRound = (user1, engine) => {
    console.log("--------------------------------------------------");
    if (user1 == null || user1 == "") {
        console.log("Game cancelled");
        return null;
    }
    let user = user1.toLowerCase();
    if (user === "rock" && engine === "Rock") {
        console.log("User: Rock, Engine: Rock, Result: Tie");

    } else if (user === "paper" && engine === "Paper") {
        console.log("User: Paper, Engine: Paper, Result: Tie");

    } else if (user === "scissors" && engine === "Scissors") {
        console.log("User: Scissors, Engine: Scissors, Result: Tie");

    } else if (user === "rock" && engine === "Scissors") {
        humanScore++;
        console.log("User: Rock, Engine: Scissors, Result: You win!");

    } else if (user === "rock" && engine === "Paper") {
        engineScore++;
        console.log("User: Rock, Engine: Paper, Result: Engine wins!");

    } else if (user === "paper" && engine === "Scissors") {
        engineScore++;
        console.log("User: Paper, Engine: Scissors, Result: Engine wins!");

    } else if (user === "scissors" && engine === "Rock") {
        engineScore++;
        console.log("User: Scissors, Engine: Rock, Result: Engine wins!");

    } else if (user === "paper" && engine === "Rock") {
        humanScore++;
        console.log("User: Paper, Engine: Rock, Result: You win!");

    } else if (user === "scissors" && engine === "Paper") {
        humanScore++;
        console.log("User: Scissors, Engine: Paper, Result: You win!");

    } else {
        console.log("Please write Rock, Paper or Scissors");
    }
}


let playGame = () => {
    for (let i = 0; i < 5; i++) {
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

    playRound(userInput, engineInput());
    console.log(`Score:  You: ${humanScore} Engine: ${engineScore} `);
    }
}

playGame();
