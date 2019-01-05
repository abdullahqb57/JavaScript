const array = [
	{
		username: "john",
		team: "red",
		score: 5,
		items: ["ball", "book", "pen"]
	},
	{
		username: "becky",
		team: "blue",
		score: 10,
		items: ["tape", "backpack", "pen"]
	},
	{
		username: "susy",
		team: "red",
		score: 55,
		items: ["ball", "eraser", "pen"]
	},
	{
		username: "tyson",
		team: "green",
		score: 1,
		items: ["book", "pen"]
	},

];

//forEach
let newArray = [];
array.forEach((user) => {
    let { username } = user;
   username = username + '!';
    newArray.push(username);
})
console.log(newArray);

//map

const mapArray = array.map((user) => {
    let { username } = user;
    return username + '?'
})
console.log(mapArray)

//filter
const filterArray = array.filter((user) => {
	return user.score === 1;
})
console.log(filterArray);

//reduce
const reduceArray = array.reduce((acc, user) => {
	return acc + user.score;
},0)
console.log(reduceArray);

//arraynumber
const arrayNumber = [1,2,3,45,6];

const numb = arrayNumber.map((num, k) => {
	return num * k;
});
console.log(numb);

//
const answer = array.map((user) => {
	user.items = user.items.map((item) => {
		return item + '!';
	})
	
	return user;
})
console.log(answer);
