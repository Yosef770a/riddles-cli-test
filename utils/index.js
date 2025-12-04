import readlineSync from 'readline-sync';


export function createPlayer(name) {
    return {
        name: name,
        times: []
    };
}

export function addSolveTime(player, seconds) {
    player.times.push(seconds);
}

export function showStats(player) {
    const total = player.times.reduce((sum, time) => sum + time);
    const average = total / player.times.length;
    console.log(`Total ${total} seconds`);
    console.log(`The average response time for a correct answer is ${average} seconds.`);
}



export function askRiddle(riddleObj) {
    console.log(`Riddle: ${riddleObj.name}`);
    console.log(riddleObj.taskDescription);
    
    if (riddleObj.choices) {
        console.log(`This question has multiple choice options from a list:`)
        riddleObj.choices.forEach((choice, index) => {
            console.log(`${index + 1}. ${choice}`);
        });
    }
    
    while (true) {
        let UserAnswer = readlineSync.question('Please enter your answer: ');
        if (riddleObj.choices) {
            const choiceIndex = Number(UserAnswer) - 1;
            if (String(choiceIndex) === riddleObj.correctAnswer) {
                console.log('Correct answer');
                break;
            }
        } else {
            if (UserAnswer === riddleObj.correctAnswer) {
                console.log('Correct answer');
                break;
            }
        }
        console.log('Wrong answer, try again.');
    }
}


export function measureSolveTime(fn, q) {
    const timeStart = Date.now();
    fn(q);
    const endTime = Date.now();
    const runningTime = (endTime - timeStart) / 1000;
    return runningTime;
}