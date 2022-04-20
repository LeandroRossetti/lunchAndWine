const forbiddenWords = ["boludo", "sorete", "caca", "feo", "asco", "tonto"];
const preMenuOpinion = [];
const menuOpinion = [];
const menuFood = [];

function checkPreMenuOpinion(a) {
    let insulto;
    for (let index = 0; index < forbiddenWords.length; index++) {

        let element = forbiddenWords[index]

        if (preMenuOpinion.includes(element)) {
            alert('Opinión invalida')
            insulto = true;
            preMenuOpinion.shift()
        }

    }

    if (!insulto) {
        menuOpinion.push(foodOpinion);
        alert('Gracias, tendremos muy en cuenta tu opinion de: ' + menuOpinion);
        preMenuOpinion.shift()
    }
}

/* Iteramos el objeto de products creado en menuListing solo para obtener los productos que sean considerados comida (food) */


for (const menu of products) {
    if (menu.food == true) {
        menuFood.push(menu.name);
    }
}

alert('Actualmente el menú de comida es ' + menuFood);
alert('Dejanos tu opinion sobre que comida haría falta y lo tendremos en cuenta para agregar al menú!');
let foodOpinion = prompt('Decinos que plato queres agregar');
preMenuOpinion.push(foodOpinion);
checkPreMenuOpinion(preMenuOpinion);


const newMenuOpinion = document.createElement('h3')
newMenuOpinion.innerText = menuOpinion;
root.append(newMenuOpinion);