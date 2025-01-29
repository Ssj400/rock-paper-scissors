let humanScore = 0;
let engineScore = 0;
let scorePoints = document.querySelector(".score");

const playRound = (user1, engine) => {
    let resultText = document.querySelector(".result")
    if (user1 == null || user1 == "") {
        resultText.textContent = "Game cancelled";
        return null;
    }
    let user = user1.toLowerCase();
    if (user === "rock" && engine === "Rock") {
        resultText.textContent = "User: Rock, Engine: Rock, Result: Tie";

    } else if (user === "paper" && engine === "Paper") {
        resultText.textContent = "User: Paper, Engine: Paper, Result: Tie";

    } else if (user === "scissors" && engine === "Scissors") {
        resultText.textContent = "User: Scissors, Engine: Scissors, Result: Tie";

    } else if (user === "rock" && engine === "Scissors") {
        humanScore++;
        resultText.textContent = "User: Rock, Engine: Scissors, Result: You win!";

    } else if (user === "rock" && engine === "Paper") {
        engineScore++;
        resultText.textContent = "User: Rock, Engine: Paper, Result: Engine wins!";

    } else if (user === "paper" && engine === "Scissors") {
        engineScore++;
        resultText.textContent = "User: Paper, Engine: Scissors, Result: Engine wins!";

    } else if (user === "scissors" && engine === "Rock") {
        engineScore++;
        resultText.textContent = "User: Scissors, Engine: Rock, Result: Engine wins!";

    } else if (user === "paper" && engine === "Rock") {
        humanScore++;
        resultText.textContent = "User: Paper, Engine: Rock, Result: You win!";

    } else if (user === "scissors" && engine === "Paper") {
        humanScore++;
        resultText.textContent = "User: Scissors, Engine: Paper, Result: You win!";

    } else {
        resultText.textContent = "Please select Rock, Paper or Scissors";
    }
}


const playGame = () => {
    for (let i = 0; i < 5; i++) {
        let engineInput = () => {
            random = (Math.floor(Math.random() * 3)) + 1;
            if (random == 1) {
                return "rock";
            } else if (random == 2) {
                return "paper"
            } else if (random == 3) {
                return "scissors"
            }
        }

        playRound(userInput, engineInput());
        console.log(`Score:  You: ${humanScore} Engine: ${engineScore} `);
    }
}

let selection;
let selectionText = document.querySelector(".stext");

let rock = document.querySelector("#select-rock");
rock.addEventListener("click", () => {
    selection = "rock"
    console.log(selection);
    selectionText.textContent = `You selected: Rock`
});

let paper = document.querySelector("#select-paper");
paper.addEventListener("click", () => {
    selection = "paper";
    console.log(selection);
    selectionText.textContent = `You selected: Paper`
});

let scissors = document.querySelector("#select-scissors");
scissors.addEventListener("click", () => {
    selection = "scissors";
    console.log(selection);
    selectionText.textContent = `You selected: Scissors`
});

let playButton = document.querySelector(".play-round");
playButton.addEventListener("click", () => {

    let result;
    result = document.querySelector("h1");
    result.textContent = "";

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

    console.log(engineInput())
    playRound(selection, engineInput());
    scorePoints.textContent = ` You: ${humanScore} Engine: ${engineScore} `;

    selection = undefined;
    selectionText.textContent = "You selected:";

    if (humanScore === 5) {
        result.textContent = "YOU WIN"
        humanScore = 0;
        engineScore = 0;
    } else if (engineScore === 5) {
        result.textContent = "YOU LOSE"
        humanScore = 0;
        engineScore = 0;
    }
});




