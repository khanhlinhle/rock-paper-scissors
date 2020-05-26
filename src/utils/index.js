export const CHOICES = {
    mjollnir: {
        name: "mjollnir",
        url: "http://image.uuu9.com/pcgame/dota2//UploadFiles//201509/150911094131920192.png"
    },
    tango: {
        name: "tango",
        url: "https://i.imgur.com/9DFISp0.png"
    },
    kaya: {
        name: "kaya",
        url: "https://i.imgur.com/hKR9X1f.png"
    }
};

export const getRandomChoice = () => {
    let choiceNames = Object.keys(CHOICES); // returns an array of the keys, so: ['scissors', 'paper', 'rock']
    let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
    let choiceName = choiceNames[randomIndex];
    return CHOICES[choiceName];
};

export const getRoundOutcome = userChoice => {
    const computerChoice = getRandomChoice().name;
    let result;

    if (userChoice === "mjollnir") {
        result = computerChoice === "kaya" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "tango") {
        result = computerChoice === "mjollnir" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "kaya") {
        result = computerChoice === "tango" ? "Victory!" : "Defeat!";
    }

    if (userChoice === computerChoice) result = "Tie!";
    return [result, computerChoice];
};