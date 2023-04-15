 const saturdayFun = (activity = "roller-skate") => {
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun()

const mondayWork = (activity = "go to the office") => {
    return (`This Monday, I will ${activity}.`)
}
mondayWork()

const wrapAdjective = (string = "*") => {
    return function(adjective = "special"){
        return  `You are ${string}${adjective}${string}!`  
    }
} 
wrapAdjective("||")("a dedicated programmer")
wrapAdjective()("a hard worker")