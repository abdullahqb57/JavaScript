// var list = ['tiger','cheetha','cat','bear','bird'];
// // console.log(list.shift());
// console.log(list.unshift());
// console.log(list.pop());
// console.log(list.push('snake'));
// console.log(list);

// var myNewList = list.concat(['monkey','donkey'])
// console.log(myNewList.splice(0,4));

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(array2[1][1][0]);

//forEach
const array = [1,2,5,8,9];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});
console.log('foreach',double);

//Map
const mapArray = array.map((num) => {
    return num * 2; //  here in map it directly copies to maparray unlike foreach

});
console.log('map',mapArray);

//filter--if we have single arg no need of ()
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

// reduce
//accumulator not a default can use any word..it is something where we can store the information that happens in body of the function

 