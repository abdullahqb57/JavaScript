// template literals

 let word1 = 'nani';
 let word2 = 'tinku';
let num1 =3;
let num2 =9;
const fullName = `${num1 +num2} ${word1} 
${word2}`;

console.log(fullName);

// //Destructing arrays

// let [firstName, middleName, lastName] = ['Dylan','Coding','BaniIsrael'];

// lastName = 'stanny';

// console.log(lastName)

// //objectLiteral

// function addressMaker(address){
//     const {city,state} = address;
//     const newAddress = {
//         city,
//         state,
//         country: 'United States'
//     };
//     console.log(`${newAddress.city},${newAddress.state},${newAddress.country}`)
// }
// addressMaker({city:'US',state:'texas'});

// //Rest Operator
// function add(...nums){
//     console.log(arguments);
// }
// add(4,5,6,7,8);

// //Defaulr Params
// // function add(numArray = [1,2,3]){
// //     let total = 0;
// //     numArray.forEach((element)=>{
// //         total += element;
// //     });
// //     console.log(total);
// // }
// // add();

// //includes

// let numArray = [11,22,33,44,55];
// console.log(numArray.includes(11));

// //exportImport

// // export data = [1,2,3,4,5];

// // import { data } from './basics' //in another file
// // let updateData = data;
// // updateData.push(5);
// // console.log(updateData);

// //padstart()...padEnd()

// let example = 'abdullah';

// console.log(example.padStart(100));
// console.log(example.padStart(20,'w'))
// console.log(example.padEnd(20,'e'));

// import { Animal } from './fb.js';

// let cat = new Animal('Cat',4);
// console.log(cat.metaData)

//promise
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
// getTop = ()=> {
//     fetch(apiUrl).then((r)=> r.json()).then((json) => {
//         console.log(json[0])
//     }).catch((err) => {
//         console.log(err)
//     });
// }
// getTop();

//asyncAwait
async function getCamp(){
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json[0]);
}
getCamp()
