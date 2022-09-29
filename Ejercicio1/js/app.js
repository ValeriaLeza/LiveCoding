let myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
let palabra="bocina"
console.log("Mi arreglo: "+ myArray);
console.log(myArray[0].length);
console.log(palabra.length);
console.log(myArray.length);

function Arreglos (myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if ((myArray[i].length)=(palabra.length)) {
            //console.log(i);
            myArray.splice(i,1);
        }  
    }
}
Arreglos(myArray);

console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
    let ul = document.getElementsByClassName("lista");
    let li = document.createElement("li");
    li.innerText = myArray[i];
    li.className ="lista";
    ul [0].append(li);
    
}
   