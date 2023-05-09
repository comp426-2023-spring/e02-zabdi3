// export function rps(shot) {
//     let rpsRules = {
//         rock: {
//             rock:'tie',
//             paper: 'lose',
//             scissors: 'win',
//         },

//         paper: {
//             rock:'win',
//             paper: 'tie',
//             scissors: 'lose',
//         },

//         scissors: {
//             rock:'lose',
//             paper: 'win',
//             scissors: 'tie',
//         }
//     }
//     const shotchoices = ["rock", "paper", "scissors"];
//     const randomNumber = Math.trunc(Math.random() * 3); //
//     // If the command or function is called without an argument,
//     // it should return only the shot for one player
//     if(shot === undefined) {
//         return  {"player": shotchoices[randomNumber]}
//      }
//     //shot = shot.toLowerCase()
//     // If an out-of-range argument is supplied to your functions, 
//     //the function should return an error on console.error() indicating that [ARGUMENT] is out of range.
//     if (!shotchoices.includes(shot)) {
//         // return console.error("The shot is out of range.")
//         throw new RangeError("The shot is out of range.");
//     }  
//     //If the command or function is called with an argument, 
//     //it should return the results of a game between a player and an opponent
//     let endresult = rpsRules[shotchoices[randomNumber]][shot];
//     return {player: shot, opponent: shotchoices[randomNumber], result: endresult}
// }

// export function rpsls(shot) {
//     let rpsRules = {
//         rock: {
//             rock:'tie',
//             paper: 'lose',
//             scissors: 'win',
//             lizard: 'lose',
//             spock: 'win'
//         },

//         paper: {
//             rock:'win',
//             paper: 'tie',
//             scissors: 'lose',
//             lizard: 'win',
//             spock: 'lose'
//         },

//         scissors: {
//             rock:'lose',
//             paper: 'win',
//             scissors: 'tie',
//             lizard: 'lose',
//             spock: 'win'
//         },

//         lizard: {
//             rock:'win',
//             paper: 'lose',
//             scissors: 'win',
//             lizard: 'draw',
//             spock: 'lose'
//         }, 

//         spock: {
//             rock:'lose',
//             paper: 'win',
//             scissors: 'lose',
//             lizard: 'win',
//             spock: 'tie'
//         }
//     }
//     const shotchoices = ["rock", "paper", "scissors", "lizard", "spock"];
//     const randomNumber = Math.trunc(Math.random() * 5); //
//     // If the command or function is called without an argument,
//     // it should return only the shot for one player
//     if(shot === undefined) {
//         return  {"player": shotchoices[randomNumber]}
//     }
//     //shot = shot.toLowerCase();
//     // If an out-of-range argument is supplied to your functions, 
//     //the function should return an error on console.error() indicating that [ARGUMENT] is out of range.
//     if (!shotchoices.includes(shot)) {
//         // return console.error("The shot is out of range.")
//         throw new RangeError("The shot is out of range.");
//     }  
//     //If the command or function is called with an argument, 
//     //it should return the results of a game between a player and an opponent
//     let endresult = rpsRules[shotchoices[randomNumber]][shot];
//     return {player: shot, opponent: shotchoices[randomNumber], result: endresult}
// }

// Rewrite attempt of RPS/RPSLS to one rule constant 

let gameRules = {
    rock: {
        rock:'tie',
        paper: 'lose',
        scissors: 'win',
        lizard: 'lose',
        spock: 'win'
    },

    paper: {
        rock:'win',
        paper: 'tie',
        scissors: 'lose',
        lizard: 'win',
        spock: 'lose'
    },

    scissors: {
        rock:'lose',
        paper: 'win',
        scissors: 'tie',
        lizard: 'lose',
        spock: 'win'
    },

    lizard: {
        rock:'win',
        paper: 'lose',
        scissors: 'win',
        lizard: 'draw',
        spock: 'lose'
    }, 

    spock: {
        rock:'lose',
        paper: 'win',
        scissors: 'lose',
        lizard: 'win',
        spock: 'tie'
    }
}

export function rps(shot) {
    const shotchoices = ['rock', 'paper', 'scissors'];
    // no shot means undefined
    if (shot === undefined)
        return {player: shotchoices[Math.floor(Math.random() * 3)]};

    shot = shot.toLowerCase();
    if (!shotchoices.includes(shot)) {
        console.error(`${shot} is out of range.`);
        throw new RangeError(`The ${shot} is out of range.`);
    }

    const opponentshot = shotchoices[Math.floor(Math.random() * 3)];
    return {player: shot, opponent: opponentshot, result: gameRules[shot][opponentshot]}
}

export function rpsls(shot) {
    const shotchoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    // if no shot, error not thrown just undefined
    if (shot === undefined)
        return {player: shotchoices[Math.floor(Math.random() * 5)]};

    shot = shot.toLowerCase();
    if (!shotchoices.includes(shot)) {
        console.error(`The ${shot} is out of range.`);
        throw new RangeError(`The ${shot} is out of range.`);
    }

    const opponentshot = shotchoices[Math.floor(Math.random() * 5)];
    return {player: shot, opponent: opponentshot, result: gameRules[shot][opponentshot]}
}