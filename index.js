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
const error_nan = document.getElementById("error-nan");
const error_empty = document.getElementById("error-empty");

error_empty.classList.add("esconder");
error_nan.classList.add("esconder");

const checkInputPizza = (e) =>{
    e.preventDefault();
    const numeroPizza = input_pizza.value;

    if(numeroPizza.length < 0){
        error_empty.classList.remove("esconder");
        console.log("empty")
    }else if(isNaN(numeroPizza)){
            error_empty.classList.add("esconder");
            error_nan.classList.remove("esconder");
    }else if(!isNaN(numeroPizza)){
        error_nan.classList.add("esconder");
    }

    return;
}
FORM.addEventListener("submit", checkInputPizza);

