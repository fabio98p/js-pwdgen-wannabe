//controllo se il js parte
var hello = ("inizio");
console.log(hello);

//chiedo al utente di inserire un nome
var name = prompt("Please enter your name", "ginopippo");
console.log(name);

//chiedo al utente di inserire un cognome
var secondName = prompt("Please enter your second name", "fungo");
console.log(secondName);

//chiedo all'utente di inserire un colore
var color = prompt("Please enter your favorite color", "marrone");

//creo una password in cui c'è la combinazione del nome cognome e colore con in piu l'anno corrente
var password = name + secondName + color + 21;

//inserisco la password nel html
document.getElementById("newPassword").innerHTML = password;