// var database = [{
//     username: "abdullah",
//     password: "abdullah1"
// },
// {
//     username: "sally",
//     password:'12345'
// },
// {
//     username: "bobby",
//     password: "77777"
// }

// ];
// var newsfeed = [
//     {
//         username: "bobby",
//         timeline: "hai hello"
//     },
//     {
//         username: "sally",
//         timeline: "js is nice"
//     }
// ];

// var usernamep = 'abdullah';
// var passwordp = 'abdullah1';

// function isUserValid(user, pass){
//     for(var i= 0;i< database.length;i++){
//         if(usernamep === database[i].username && passwordp === database[i].password){
            
//             return true;
//         } 
//     }
//     return false;
// }

// function signIn(user, pass){
//     if(isUserValid(user,pass)){
//         console.log(newsfeed)
//     }else{
//         console.log('re-enter the details given...');
//     }
// }
// signIn(usernamep,passwordp);

// function add(numArray = [1,2,3]){
//     let total = 0;
//     numArray.forEach((element)=>{
//         total += element;
//     });
//     console.log(total);
// }
// add();

export class Animal {
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }
    makeNoise(sound = 'loud noise'){
        console.log(sound);
    }
    get metaData(){
        return `Type: ${this.type} , Legs: ${this.legs}}`
    }
    static return10(){
        return 10;
    }
}
export class Cat extends Animal{
    constructor(type,legs,tail){
        super()
    }
}