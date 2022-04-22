import { getDolar } from "./dolar.js";
import { returnProducts } from "./menuListing.js";

let totalH6 = document.getElementById("totalH6")
let modalDiv = document.getElementById("modalDiv");
let total = 0;
let restStorage = 0;
let valueDolarDiv = document.getElementById("valueDolar");
let iconoCarrito = document.getElementById("iconoCarrito");
let columnDesc = document.getElementById("colDesc");
let colPrice = document.getElementById("colPrice")




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

            if ((localStorage.getItem(iterator.id)) > 0) {

                total += Number(iterator.price)
                restStorage = localStorage.getItem(idProduct)
                localStorage.removeItem(idProduct)
                restStorage -= 1;

                localStorage.setItem(idProduct, restStorage)
                let carrito = [];
                carrito.push({ nombre: iterator.name, precio: iterator.price })

                let carritoInLocal = localStorage.getItem('carrito');


                if (!carritoInLocal) {
                    localStorage.setItem('carrito', JSON.stringify(carrito));
                } else {

                    let newCarrito = [];
                    newCarrito.push(JSON.parse(carritoInLocal));
                    for (let i = 0; i < carrito.length; i++) {
                        const element = carrito[i];
                        newCarrito.push(element)
                    }
                    console.log(newCarrito)
                    localStorage.setItem('carrito', JSON.stringify(newCarrito));

                }



                if (carrito.length >= 1) {

                    for (let i = 0; i < carrito.length; i++) {

                        const element = carrito[i];
                        let generatePDesc = document.createElement('p');
                        let generatePPrice = document.createElement('p');
                        generatePDesc.innerHTML = element.nombre;
                        generatePPrice.innerHTML = `$${element.precio}`;

                        columnDesc.appendChild(generatePDesc);
                        colPrice.appendChild(generatePPrice);


                    }
                }
                totalH6.innerHTML = '$' + total.toString();

            }
            else {
                return Swal.fire({
                    title: 'Sin stock',
                    text: `El producto ${iterator.name} se acabo.`,
                    icon: 'error',
                    confirmButtonText: 'Confirmar'
                })
            }
        }




    }
});


