function getUserLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
        let userlocation = {
            "lat":position.coords.latitude,
            "long":position.coords.latitude
        }
        return userlocation
    })
}

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

const btnDialogEntrada = document.getElementById("btn-dialog-entrada");
btnDialogEntrada.addEventListener("click", () => {

    let currentDate = getCurrentDate();
    let currentTime = getCurrentTime();
    let userlocation = getUserLocation();

    console.log(currentDate);
    console.log(currentTime);
    console.log(userlocation);
    
    ponto = {
        "date": currentDate,
        "time": currentTime,
        "location": userlocation,
        "id": 1,
        "type": "entrada"
    }
    console.log(ponto);
})

const btnDialogSaida = document.getElementById("btn-dialog-saida");
btnDialogSaida.addEventListener("click", () => {

    let currentDate = getCurrentDate();
    let currentTime = getCurrentTime();
    let userlocation = getUserLocation();

    console.log(currentDate);
    console.log(currentTime);
    console.log(userlocation);
    
    ponto = {
        "date": currentDate,
        "time": currentTime,
        "location": userlocation,
        "id": 1,
        "type": "saida"
    }
    console.log(ponto);
})


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