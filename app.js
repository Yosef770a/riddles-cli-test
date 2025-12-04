import readlineSync from 'readline-sync';
import {createPlayer, addSolveTime, showStats, askRiddle, measureSolveTime} from './utils/index.js'
import {r1, r2, r3} from "./riddles/index.js";

const riddles = [r1.default, r2.default, r3.default];

function SortQuestions(){
    riddles.sort((a, b) => {
    if (a["difficult"] < b["difficult"]) return -1;
    if (a["difficult"] > b["difficult"]) return 1;
    return 0;
});
}

function riddlesByDifficult(level){
    return riddles.filter((riddle) => riddle.difficult === level);
}




export function CreatiArrRiddles(){
        const gameType = readlineSync.question(`
Select Game type:
1. Sort from easy to difficult
2. Questions of a certain difficulty level

Please enter your choice: `);

switch(gameType){
    case "1":
        SortQuestions();
        break;
    case "2":
        const level = readlineSync.question("Please select a difficulty level from 1 to 3");
        riddlesByDifficult(level);
        break;
}
}


export function GameInit(){
    console.log('Welcome to the CLI riddles game');
    const namePlayer = readlineSync.question('Please enter your name: ');
    console.log(`Hello ${namePlayer}\n`)
    return createPlayer(namePlayer);
}

export function startQuestions(player){
    riddles.forEach((question, i) => {
    console.log(`riddle number ${i+1}:\n`)
    const time = measureSolveTime(askRiddle, question);
    console.log(`\nIt took you ${time} seconds to answer that.\n`);
    addSolveTime(player,time);
});
}

export function gameSummary(player){
    showStats(player);
}


// console.log(measureSolveTime(askRiddle, r3.default))