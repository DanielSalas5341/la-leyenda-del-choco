const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
/*Toma referencias del button*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
/*Función para configurar el saludo*/
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
/*Código de inicialización*/
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
/*Permite al usuario agregar un nombre diferente*/
myButton.onclick = function() {
  setUserName();
}
/*Verifica que no se halla ingresado un nombre nulo*/
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}
