import readlineSync from 'readline-sync';
import {createPlayer, addSolveTime, showStats, askRiddle, measureSolveTime} from './utils/index.js'
import {r1, r2, r3} from "./riddles/index.js";

const riddles = [r1.default, r2.default, r3.default];

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