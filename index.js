// code your solution here
function saturdayFun (activity = 'roller-skate') {
    
    return `This Saturday, I want to ${activity}!`

}
console.log(saturdayFun('bathe my dog'));

function mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

console.log(mondayWork('work from home'));

// function wrapAdjective (highlight = "*") {
//     const fn = function(adjective = "special") {
//     return `You are ${highlight}${adjective}${highlight}!`

//    }
//     return fn;

// }
// // wrapAdjective (highlight)
// console.log(wrapAdjective(highlight = "*"));

function wrapAdjective (highlight = "*") {
    return function(adjective = "special") {
    return `You are ${highlight}${adjective}${highlight}!`

   }
    // return fn;

}
// wrapAdjective (highlight)
console.log(wrapAdjective(highlight = "*"));
