// Escribe un programa para contar las letras en la palabra: palindrome, mostrándolas una a una.
/*let palindromo = "palindrome"

let contador;
for (let palindrome = 0; palindrome < palindromo.length; palindrome++) {
    
    contador = palindromo.charAt(palindrome);
    console.log(contador);
    
}
// Escribe un programa que muestre las letras del palíndromo “no lemon, no melon” en orden inverso.
let palindromo = "No lemon, no melon";
let contador = "";
for (let index = palindromo.length-1; index < palindromo.length; index--) {
    contador = palindromo.charAt(index);
    console.log(contador);
    if(contador.endsWith("N")){
        break;
    } 
}
//Ejercicio 3 Escribe un programa para mostrar un cuadrado de asteriscos de 4x4.
let resultado="";
let asterisco = "";
let lado = prompt("Escribe aqui el numero de lados");
for (let index = 0; index < lado; index++){
    resultado += "*";

}
resultado += '\n';
for (let index = 0; index < lado; index++){
    resultado += "*";

}
resultado += '\n';  
for (let index = 0; index < lado; index++){
    resultado += "*";

}
resultado += '\n'; 
for (let index = 0; index < lado; index++){
    resultado += "*";

}
resultado += '\n'; 
   
console.log(resultado);
*/
// Ejercicio 4 Ejercicio Escribe un programa con 7 variables con la temperatura de los 7 últimos días (Google). A continuación, muestra cuál ha sido la temperatura media.
let temperaturasSemanaMax=[37,34,28,31,33,36,34];
let temperaturasSemanaMin=[17,14,13,11,13,14,14];
let media, suma;
for (let index = 0; index < temperaturasSemanaMax.length; index++) {
    //console.log(temperaturasSemanaMax[index]);
    suma = temperaturasSemanaMax[0]+ temperaturasSemanaMax[1]+ temperaturasSemanaMax[2] + temperaturasSemanaMax[3]+temperaturasSemanaMax[4]+temperaturasSemanaMax[5]+temperaturasSemanaMax[6] ;
   media = suma / 7;
    console.log(parseInt(media));
}
for (let j = 0; j < temperaturasSemanaMin.length; j++) {
    //console.log(temperaturasSemanaMax[index]);
    suma = temperaturasSemanaMin[0]+ temperaturasSemanaMin[1]+ temperaturasSemanaMin[2] + temperaturasSemanaMin[3]+temperaturasSemanaMin[4]+temperaturasSemanaMin[5]+temperaturasSemanaMin[6] ;
   media = suma / 7;
    console.log(parseInt(media));
}
//