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


let rock = document.querySelector("#select-rock");
rock.addEventListener("click", () => {
    selection = "rock"
    console.log(selection);
});

let paper = document.querySelector("#select-paper");
paper.addEventListener("click", () => {
    selection = "paper";
    console.log(selection);
});

let scissors = document.querySelector("#select-scissors");
scissors.addEventListener("click", () => {
    selection = "scissors";
    console.log(selection);
});

let playButton = document.querySelector(".play-round");
playButton.addEventListener("click", () => {
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
});

