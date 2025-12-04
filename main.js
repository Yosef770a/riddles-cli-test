import {GameInit, startQuestions, gameSummary} from "./app.js"


const player = GameInit()
startQuestions(player)
gameSummary(player)