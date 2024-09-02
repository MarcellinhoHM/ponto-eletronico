navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});

const date = new Date();
const diaSemana = document.getElementById("dia-semana");
const dataAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");
const btnRegister = document.getElementById("btn-register");

btnRegister.addEventListener("click", register);

function updateContentHour(){
    dataAtual.textContent = getCurrentDate();
    horaAtual.textContent = getCurrentTime();
    diaSemana.textContent = getWeekDay();
}

const dialogPonto = document.getElementById("dialog-ponto");

const dialogData = document.getElementById("dialog-data");
dialogData.textContent = getCurrentDate(); 

const dialogHora = document.getElementById("dialog-hora");
dialogHora.textContent = getCurrentTime(); 


const btnDialogFechar = document.getElementById("dialog-fechar");
btnDialogFechar.addEventListener("click", ()=> {
    dialogPonto.close();
})

function register(){
    alert("im doin' your mom");
    dialogPonto.showModal();
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