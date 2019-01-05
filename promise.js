const promise = new Promise((resolve, reject) => {
    if(true){
        resolve('stuff worked');
    }else{
    reject('Error, it broke')
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,'HIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,'hello')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve,4000,'delay function')
})

Promise.all([promise,promise2,promise3,promise4])
    .then(values => {
        console.log(values);
    })

promise
.then(result =>{ 
    // throw Error
    result (result)})
.then(result2 => {
    // throw error;
    console.log(result2)
    
})
.catch(() => console.log('error'));

const task = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ('success')
    },4000)
})
task.then( resp => console.log(resp))

const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
  
  Promise.all(urls.map(url =>
      fetch(url).then(people => people.json())
  ))
    .then(array => {
      console.log('1', array[0])
      console.log('2', array[1])
      console.log('3', array[2])
      console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err));

const getData = async function(){
    try{
        const [users,posts,albums] = await Promise.all(urls.map((url) => fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts',posts)
        console.log('albums', albums)

    }catch (err) {
        console.log('oops', err)
    }
}