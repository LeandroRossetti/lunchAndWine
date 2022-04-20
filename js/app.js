import { getDolar } from "./dolar.js";
import { returnProducts } from "./menuListing.js";
let carrito=[];
let modalDiv=document.getElementById("modalDiv");
let total = 0;
let restStorage = 0;
let valueDolarDiv = document.getElementById("valueDolar");
let iconoCarrito=document.getElementById("iconoCarrito");
async function dolarInNav() {

    let value = await getDolar()
    if (value != undefined) {
        valueDolarDiv.innerHTML = 'VALOR DEL DOLAR ACTUAL U$D' + ' ' + value;
    }
}


dolarInNav();





const arrayProducts = returnProducts();


let menuIndex = document.getElementById("divRowMenu");

for (const iterator of arrayProducts) {

    menuIndex.innerHTML += iterator.getCard()
    localStorage.setItem(iterator.id, iterator.stock)

}



let a = document.body;

const fnVerifiLogin = () => {
    let usr = sessionStorage.getItem('usrlogged');
    let usrGuest = sessionStorage.getItem('usrloggedGuest');
    if (usr || usrGuest) {
        console.log('Bienvenido Nuevamente');
        a.style.display = 'block'
        a.className = 'animate__animated animate__fadeIn animate__delay-0s'
    } else {
        location.href = "./login.html";
    }
}
fnVerifiLogin();


let btnLogOut = document.getElementById('btnLogOut');
btnLogOut.onclick = () => {
    sessionStorage.clear();
    fnVerifiLogin();

}



document.addEventListener("DOMContentLoaded", function () {

    for (const iterator of arrayProducts) {
        let idProduct = iterator.id;
        let btnId = iterator.getId()

        let btn = document.getElementById(btnId)
        btn.onclick = function () {
            iconoCarrito
            if ((localStorage.getItem(iterator.id)) > 0) {

                total += Number(iterator.price)
                restStorage = localStorage.getItem(idProduct)
                localStorage.removeItem(idProduct)
                restStorage -= 1;
                localStorage.setItem(idProduct, restStorage)
              
                modalDiv.innerHTML=`<p>Item: ${iterator.name} $ ${iterator.price} </p>\n`
                carrito.push(iterator.name, iterator.price)
                console.log(carrito)
                console.log(modalDiv)
                console.log(total)
                console.log(restStorage)
            }
else{
    return console.log('no hay stock papu');
}
        }
        //se guarda en local storage el stock y el id de los productos
        /* let stockId= parseInt(  localStorage.getItem(iterator.getIdElement())) */




    }
});
/* 
let btn1=document.getElementById(`btnDegustacion_1`);

 */
