const date = new Date();
const diaSemana = document.getElementById("dia-semana");
const dataAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");


function updateContentHour(){
    dataAtual.textContent = getCurrentDate();
    horaAtual.textContent = getCurrentTime();
    diaSemana.textContent = getWeekDay();
}

function getCurrentTime() {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}


function getCurrentDate() {
    const date = new Date();
    return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
}

function getWeekDay() {
    const weekday = ["Sunday-feira", "Monday-feira", "Tuesday-feira", "Wednesday-feira", "Thursday-feira", "Friday-feira", "Saturday-feira"];
    return weekday[date.getDay()];
}

setInterval(updateContentHour, 1000);

console.log(getCurrentTime());
console.log(getCurrentDate());
console.log(getWeekDay());