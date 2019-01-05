//const let var
// let its a blockscope with in block we can access
// var function scope
//const ---we are not able to reassign the value but we can change properties

const player = 'bobby';
let exper = 100;
let wizardLevel = false;

// if(exper > 90){
//     var wizardLevel = true;
//     console.log('var - ' + wizardLevel);
// }
// console.log(wizardLevel);

if(exper > 90){
    let wizardLevel = true;
    console.log('let - ' + wizardLevel);
}
console.log(wizardLevel);

const obj = {
    player: 'bobby',
    experience: 45,
    wizardL: false
}
obj.wizardL = true;
console.log(obj.wizardL);

//Template Arguments----arrow
greet = (name='Abu',age=37,pet='cat') => {
    return `Hello ${name} with age ${age-10}.what a lovely ${pet} you have`;
}
console.log(greet());

//Symbol

var sym1 = 