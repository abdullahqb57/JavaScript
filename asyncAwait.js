// movePlayer(100, 'left')
//     .then(() => movePlayer(400, 'right'))
//     .then(() => movePlayer(40, 'left'))
//     .then(() => movePlayer(30, 'right'))

// async function playerstart(){
//     await movePlayer(100, 'left'); //pausing
//     await movePlayer(200, 'rught');
//     await movePlayer(10, 'left');
// }  

async function fetchUsers(){
    const resp = await fetch()
    const data = await resp.json();
    console.log(data)
}node