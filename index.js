/* CREACION DE OBJETOS */

class Pizzas {
    base = ['masa', 'salsa'];
    constructor(id, nombre, ingredientes, precio){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}

const napolitana = new Pizzas(3, 'Napolitanna', ['queso', 'tomate', 'albahaca', 'oregano', 'aceite de oliva'], 1500);
const cancha = new Pizzas(2, 'De Cancha', ['tomate',], 500);
const muzarella = new Pizzas(1, 'Muzza', ['queso', 'oregano'], 100);
const salame = new Pizzas(4, 'Salame', ['queso', 'salame'], 1500);
const cebolla = new Pizzas(5, 'Cebolla', ['queso', 'cebolla'], 1500);
const jamon_y_morrones = new Pizzas(6, 'Jamon', ['queso', 'jamon', 'morrones', 'aceite de oliva'], 1500);

let listaPizzas = [napolitana, cancha, muzarella, salame, cebolla, jamon_y_morrones];

/* E2 */

const SUBMIT_BUTTON = document.getElementById("submit")
const INPUT_PIZZA_VALUE = document.getElementById("input-pizza").value
const PIZZA_CONTAINER = document.getElementById("pizza-container")
const FORM = document.getElementById("form");

const checkInputPizza = INPUT_PIZZA_VALUE =>{
    if(typeof INPUT_PIZZA_VALUE == "number"){

    }else{
        PIZZA_CONTAINER.innerHTML = `<h2 id="error">El valor ingresado no corresponde a un numero.</h2>`;
    }
    
}

FORM.addEventListener("submit", checkInputPizza);

