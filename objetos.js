let boton1 = document.getElementById("btn1").addEventListener("click", reyesMagos);
let boton2 = document.getElementById("btn2").addEventListener("click", fechaAhora);
let boton3 = document.getElementById("btn3").addEventListener("click", calcularAreaCirculo);
let boton4 = document.getElementById("btn4").addEventListener("click", calcularAleatorio);
let boton5 = document.getElementById("btn5").addEventListener("click", mitadCar);
let boton6 = document.getElementById("btn6").addEventListener("click", ultimoCaracter);
let boton7 = document.getElementById("btn7").addEventListener("click", cadenaInversa);
let boton8 = document.getElementById("btn8").addEventListener("click", cadenaGuiones);
let boton9 = document.getElementById("btn9").addEventListener("click", contarVocales);

function reyesMagos(fecha)
{
    fecha = document.getElementById("fechaRM").value;
    let year = Number(String(fecha).slice(0,4));
    let month = Number(String(fecha).slice(5,7));
    let day = Number(String(fecha).slice(8,10));
    let fechaInsertada = new Date();
    fechaInsertada.setDate(day);
    fechaInsertada.setMonth(month - 1);
    fechaInsertada.setFullYear(year);
    let fechaRM = new Date();
    fechaRM.setMonth(0);
    fechaRM.setDate(6);
    if (month === 1 && day <= 6)
    {
        fechaRM.setFullYear(year);
    }
    else
    {
        fechaRM.setFullYear(year + 1);
    }
    let dias = Math.round((fechaRM.getTime() - fechaInsertada.getTime())/(24*60*60*1000));
    alert("¡Quedan " + dias + " días para que lleguen los Reyes Magos!")
}

function fechaAhora()
{
    let fecha = new Date();
    let day = fecha.getDay();
    switch (day) {
        case 0:
            day = "domingo";
        break;
        case 1:
            day = "lunes";
            break;
        case 2:
            day = "martes";
            break;
        case 3:
            day = "miércoles";
        break;
        case 4:
            day = "jueves";
        break;
        case 5:
            day = "viernes";
        break;
        case 6:
            day = "sábado";
        break;
        default:
            break;
    }
    let date = fecha.getDate();
    let month = fecha.getMonth();
    switch (month) {
        case 0:
            month = "enero";
            break;
        case 1:
            month = "febrero";
            break;
        case 2:
            month = "marzo";
            break;
        case 3:
            month = "abril";
            break;
        case 4:
            month = "mayo";
            break;
        case 5:
            month = "junio";
            break;
        case 6:
            month = "julio";
            break;
        case 7:
            month = "agosto";
            break;
        case 8:
            month = "septiembre";
            break;
        case 9:
            month = "octubre";
            break;
        case 10:
            month = "noviembre";
            break;
        case 11:
            month = "diciembre";
            break;                                                                                                                                                                                                                                                                                                                                                                          
        default:
            break;
    }
    let year = fecha.getFullYear();
    let hours = fecha.getHours();
    if (hours < 10)
    {
        hours = "0" + hours;
    }
    let minutes = fecha.getMinutes();
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    alert("Hoy es " + day + ", " + date + " de " + month + " de " + year + " y son las " + hours + ":" + minutes + " horas.");
}

function calcularAreaCirculo(radio)
{
    radio = document.getElementById("rad").value;
    radio = parseFloat(radio);
    if (typeof radio !== "number")
    {
        alert("Por favor escriba un número.");
    }
    else
    {
        if (radio <= 0)
        {
            alert("Por favor escriba un número positivo");
        }
        else
        {
            let area = Math.PI * radio * radio;
            area = area.toFixed(2);
            let longitud = 2 * Math.PI * radio;
            longitud = longitud.toFixed(2);
            alert("El área de un círculo cuyo radio es " + radio + " es " + area + " y la longitud es de " + longitud);
        }
    }
}

function calcularAleatorio(comienzo, fin)
{
    comienzo = document.getElementById("min").value;
    fin = document.getElementById("max").value;
    div = document.getElementById("div6");
    comienzo = parseInt(comienzo);
    fin = parseInt(fin);
    let resultado = 0;
    if (comienzo > fin)
    {
        resultado = Math.random() * (comienzo - fin) + fin;
    }
    else if (comienzo === fin)
    {
        alert("Elija dos números diferentes");
    }
    else
    {
        resultado = Math.random() * (fin - comienzo) + comienzo;
    }
    div.innerHTML = resultado;
}

function mitadCar(cadena)
{
    cadena = document.getElementById("text").value;
    div = document.getElementById("div6");
    let mitadDeLaCadena = Math.floor(cadena.length/2);
    cadena = cadena.split('');
    cad = "";
    for (let i = 0; i < mitadDeLaCadena; i++) {
        cad += cadena[i];
    }
    div.innerHTML = cad;
}

function ultimoCaracter(cadena)
{
    cadena = document.getElementById("text").value;
    div = document.getElementById("div6");
    cadena = cadena.charAt(cadena.length - 1);
    div.innerHTML = cadena;
}

function cadenaInversa(cadena)
{
    cadena = document.getElementById("text").value;
    div = document.getElementById("div6");
    cadena = cadena.split('');
    cadena = cadena.reverse();
    cadena = cadena.toString();
    cadena = cadena.replace(/,/g, '');
    div.innerHTML = cadena;
}

function cadenaGuiones(cadena)
{
    cadena = document.getElementById("text").value;
    div = document.getElementById("div6");
    cadena = cadena.split('');
    cadena = cadena.toString();
    cadena = cadena.replace(/,/g, '-');
    div.innerHTML = cadena;
}

function contarVocales(cadena)
{
    cadena = document.getElementById("text").value;
    div = document.getElementById("div6");
    let cad = cadena.toLowerCase();
    cad = cadena.split('');
    let count = 0;
    for (let i = 0; i < cad.length; i++) {
        if (cad[i] === "a" || cad[i] === "e" || cad[i] === "i" || cad[i] === "o" || cad[i] === "u")
        {
            count++;
        }
    }
    div.innerHTML = "El número de vocales en " + cadena + " es " + count;
}