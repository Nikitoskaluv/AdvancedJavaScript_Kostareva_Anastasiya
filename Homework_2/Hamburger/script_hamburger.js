class PartOrder {
    constructor(id, price, kcal) {
        this.id = id;
        this.price = price;
        this.kcal = kcal;
    }
}
let sumPrice = 0;
let sumKcal = 0;

const positionsArray = [
    {
        id: "large_radio",
        price: 100,
        kcal: 40,
    },
    {
        id: "small_radio",
        price: 50,
        kcal: 20,
    },
    {
        id: "cheese_radio",
        price: 10,
        kcal: 20,
    },
    {
        id: "lettuce_radio",
        price: 20,
        kcal: 5,
    },
    {
        id: "frenchFries_radio",
        price: 15,
        kcal: 10,
    },
    {
        id: "spice_radio",
        price: 15,
        kcal: 0,
    },
    {
        id: "mayo_radio",
        price: 20,
        kcal: 5,
    },
];
// атрибут onclick на всех input-элементах вызывают функцию которая возвращает объекты - части заказа содержащие свойства id,price,kcal.
function returnValues(src) {
    src.id;
    let obj = positionsArray.find(item => item.id === src.id);
    let part = new PartOrder(obj.id, obj.price, obj.kcal);
    sum(part);
}
//функция получает полученые выше объекты  и суммирует цену и каллорийность
function sum(obj) {
    sumPrice = sumPrice += +obj.price;
    sumKcal = sumKcal += +obj.kcal;
}
// по клику на кнопку 'оформить заказ' запускается фукнкция, которая возвращает HTML-разметку на страницу
document.querySelector(".order_btn").addEventListener("click", render);
function render() {
    let textOut = `<div class="result">
    <div class="sum"><h3>Сумма:${sumPrice}</h3></div>
    <div class="kcal"><h3>Калорийность:${sumKcal}</h3></div>
    <button class="clear_btn" id="clear">Начать заново</button>
    </div>
    `
    document.querySelector(".wrap").insertAdjacentHTML("beforeend", textOut);
    let element = document.querySelector(".result");
    element.scrollIntoView(false);
}

//по клику на кнопку 'начать заново' запускается функция, убирающая вывод суммы и калорийности заказа, очищает все элементы input
let clear_btn = document.querySelector(".wrap");
clear_btn.addEventListener('click', clearFunc);
function clearFunc(e) {
    if (e.target.id == "clear") {
        document.querySelector(".result").remove();
        sumPrice = 0;
        sumKcal = 0;
        document.querySelectorAll('input').forEach(e => e.checked = false);
    }
}











