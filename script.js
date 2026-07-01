function calc(){

let type = document.getElementById("type").value;
let area = document.getElementById("area").value;

let base = 1200;

let coefficient = 1;

if(type === "office") coefficient = 1.2;
if(type === "warehouse") coefficient = 1.5;
if(type === "production") coefficient = 2;

let total = base * area * coefficient;

document.getElementById("result").innerHTML =
"💰 Предварительная стоимость: <b>" + Math.round(total) + " ₽</b>";
}
