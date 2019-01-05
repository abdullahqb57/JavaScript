// var toDos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study JS",
//     "eat healthy and stay fit"

// ];
// for(var i =0;i<toDos.length;i++){
//     console.log(toDos[i]);
// }
// toDos.forEach(function(i){
//     console.log(i);
// })



const bask = ['apples','oranges','grapes'];
const baskt = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};
for (item in bask){
    console.log(item);
}
 for(item of bask){    //wont iterates for objects
     console.log(item);
};
 




// var counter = 1;
// while (counter < 100) {
//     console.log(counter);
//     counter = counter * 3;   
// }

// var counter1 = 10;
// do{
//     console.log(counter1);
//     counter1--;
// } while(counter1 > 0);

// //ternary operator:::

// function isValid(bool){
//     return bool;
// }
// var answer = isValid(true) ? "you may enter" : "Access denied";
// console.log(answer);

// //switch:::

// function moveCommand(direction){
//     var whatHappens;
//     switch(direction){
//         case "forward":
//         whatHappens = "you arrives home";
//         break;
//         case "backward":
//         whatHappens = "you arrived your grandpa home";
//         break;
//         case "left":
//         whatHappens = "you encountered the monster";
//         break;
//         case "right":
//         whatHappens = "visited shopping mall";
//         break;
//         default:
//         whatHappens = "please enter a valid directions";

//     }
//     return whatHappens;
// }
// console.log(moveCommand('left'));