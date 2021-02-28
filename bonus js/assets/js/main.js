//controllo se il js parte
var hello = ("inizio");
console.log(hello);

//chiedo al utente di inserire un nome
var name = prompt("Please enter your name", "ginopippo");
console.log(name);
var random1 = Math.floor(Math.random() * 3);
console.log(random1);
if (random1 == 0){
	random1 = "/";
	console.log(random1);
}
if (random1 == 1){
	random1 = ".";
	console.log(random1);
}
if (random1 == 2){
	random1 = "-";
	console.log(random1);
}
console.log(random1);

//chiedo al utente di inserire un cognome
var secondName = prompt("Please enter your second name", "fungo");
console.log(secondName);
var random2 = Math.floor(Math.random() * 3);
console.log(random2);
if (random2 == 0){
	random2 = "/";
	console.log(random2);
}
if (random2 == 1){
	random2 = ".";
	console.log(random2);
}
if (random2 == 2){
	random2 = "-";
	console.log(random2);
}
console.log(random2);

//chiedo all'utente di inserire un colore
var color = prompt("Please enter your favorite color", "marrone");
console.log(color)
var random3 = ".-/"[Math.floor(Math.random() * 3)];
console.log(random3);
if (random3 == 0){
	random3 = "/";
	console.log(random3);
}
if (random3 == 1){
	random3 = ".";
	console.log(random3);
}
if (random3 == 2){
	random3 = "-";
	console.log(random3);
}
console.log(random3);
//creo una password in cui c'è la combinazione del nome cognome e colore con in piu l'anno corrente
var password = "your new password is: " + name + random1 + secondName + random2 + color + random3 + 21;

//inserisco la password nel html
document.getElementById("newPassword").innerHTML = password;

