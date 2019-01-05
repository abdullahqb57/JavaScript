const animals = {
    tiger : 11,
    lion: 5,
    cheetah: 3
}
const { tiger, ...rest} = animals; //rest not keyword
console.log(rest)// result.. lion cheetah

const array = [1,2,3,4,5];
function sum(a,b,c,d,e){
    return a+b+c+d+e;
}
console.log(sum(...array));
