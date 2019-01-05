// var obj1 = { value: 10};
// var obj2 = obj1;
// var obj3 = { value: 10};

// const obj4 ={
//     a: function(){
//         console.log(this);
//     }
// }

class Player{
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi i am from ${this.name} and ${this.type}`)
    }
}

class Wizard extends Player{
    constructor(name,type){
        super(name,type)
    }
    play(){
        console.log(`hi i am ${this.type}`);
    }
}

const player1 = new Wizard('sunny','full');

let obj = {
    username0: 'santa',
    username1: 'banta',
    username2: 'danta'
}
Object.keys(obj).forEach((key,index) => {
    console.log(key,obj[key]);
})
Object.keys(obj).forEach((value) => {
    console.log(value);
})
Object.entries(obj).map((value) => {
    return console.log(value[1] + value[0].replace('username',''));
})