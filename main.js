import {GameInit, startQuestions, gameSummary, CreatiArrRiddles} from "./app.js"


const player = GameInit()
CreatiArrRiddles()
startQuestions(player)
gameSummary(player)