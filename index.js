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

const SUBMIT_BUTTON = document.getElementById("submit");
const input_pizza = document.getElementById("input-pizza");
const pizza_container = document.getElementById("pizza-container");
const FORM = document.querySelector("form");
const ERROR = document.getElementById("error");

const checkInputPizza = (e) =>{
    e.preventDefault();
    const numeroPizza = input_pizza.value;
    console.log(numeroPizza);
    if(isNaN(numeroPizza)){
        pizza_container.insertAdjacentHTML('afterbegin', '<h2 id="error">El valor ingresado no corresponde a un numero.</h2>');
        console.log("Is NaN.")
    }else{
        console.log(!ERROR) /* POR QUE EL ! ? */
        console.log("Is not a NaN.")   
    }
    return;
}
FORM.addEventListener("submit", checkInputPizza);

