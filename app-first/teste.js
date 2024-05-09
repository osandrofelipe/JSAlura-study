let lista = [];
const apiMB = 'https://www.mercadobitcoin.net/api/ETH/ticker';
// const apiMB = 'https://jsonplaceholder.typicode.com/users'

getDataETH();
const capturaDivAqui = document.getElementById('teste1')

async function getDataETH() {
    const resp = await fetch(apiMB);
    lista = await resp.json();
    console.table(lista);
    exibeDadosHTML(lista)
}

function exibeDadosHTML(item) {
        let change = [Number(item.ticker.last).toFixed(2)]
        capturaDivAqui.innerHTML += `<h1>Ultimo valor: ${change}</h1>`

        // item.forEach( change => {
        //     capturaDivAqui.innerHTML += `
        //     <br>
        //     <div>Username: ${change.username}</div>
        //     <div>Name: ${change.name}</div>
        //     <div>Email: ${change.email}</div>
        //     <div>Website: ${change.website}</div>
        //     <div>Phone: ${change.phone}</div>
        // `    
        
}
console.log(capturaDivAqui)

