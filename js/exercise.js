//Ejercicio 1.Escribe un programa que indique en la consola cuantos días tiene el mes en curso, obteniendo el mes real del sistema.
/*const diaHoy = new Date("14/2/1999");
console.log(diaHoy);
let month = diaHoy.getMonth();
 month= month +1;
console.log(month);
let dia =diaHoy.getDate();
console.log(dia);


    if(dia >= 1 && dia <= 31&& month == 1 || month == 3 || month == 5 || month==7 || month==8 || month ==10 || month== 12){
        console.log("El mes tiene 31 dias ");
    }else if(dia >= 1 && dia <= 30 && month == 4 || month == 6 || month == 9 || month==11){
console.log("El mes tiene30 dias");
    }else if( dia >= 1 && dia <= 28 || dia <= 29 && month  == 2){
        console.log("El mes tiene 28 dias ");
    }else{
        console.log("No existe el mes");
    }
//Ejercicio 2.Escribe un programa que le pregunte al usuario un mes, y le indique cuantos días tiene ese mes. En caso de error, indicarle el mensaje: “That’s not a real month!”

let month1= prompt("Escribe aqui un mes ");
let monthh = month1.toUpperCase();
console.log(monthh);



    if( monthh == "ENERO" || monthh == "MARZO" || monthh == "MAYO" || monthh=="JULIO" || monthh=="AGOSTO" || monthh =="OCTUBRE" || monthh== "DICIEMBRE"){
        console.log("El mes tiene 31 dias ");
    }else if( monthh == "ABRIL" || monthh == "JUNIO" || monthh == "SEPTIEMBRE" || monthh=="NOVIEMBRE"){
console.log("El mes tiene30 dias");
    }else if(  monthh  == "FEBRERO"){
        console.log("El mes tiene 28 dias o 29 dias ");
    }else{
        console.log("That’s not a real month!");
    }
//Ejercicio 3 Escribe un programa que pregunte la temperatura exterior al usuario. Si la temperatura está por debajo de 15 grados, lanzar una alerta con el mensaje: “Warm up”. En caso de que la temperaturasea entre 15 grados y 25, lanzar una alerta con el mensaje: “Enjoy the weather!”. En caso de que latemperatura sea de más de 25 grados, lanzar la alerta con el mensaje: “Cool down”.
let temperatura = prompt("que temperatura hay fuera").trim();
console.log(temperatura);
if(temperatura < 15){
    alert("Warm up")
}else if(temperatura >= 15 && temperatura <= 26){
    alert("Enjoy the weather!");
}else if(temperatura > 26){
    alert("Cool down");
}else {
    alert("that is not exist , please use the number not a letter")
}

let temperatura;
do{
temperatura = prompt("que temperatura hay fuera").trim();
if(temperature == '' || isNaN(temperatura)){
    console.log("Please ,write a valid temperature");
}
}while(temperature == '' || isNaN(parseInt(temperatura)));

if(temperatura < 15){
    alert("Warm up")
}else if(temperatura >= 15 && temperatura <= 26){
    alert("Enjoy the weather!");
}else if(temperatura > 26){
    alert("Cool down");
}else {
    alert("that is not exist , please use the number not a letter");
}
// Ejercicio 4 Escribe un programa que simula un semáforo. El semáforo estará controlado por una variable “centinela” llamada “isGreen”. Si el semáforo está verde, mostrar por consola: “Cross the road”, en caso contrario mostrar: “Please await”.

let isGreen ;
let centinela=prompt("Escribe aqui verde o rojo");

if( centinela == "verde"){
    isGreen = true;
alert("Cross the road");

}else if(centinela == "rojo"){
    isGreen=false;
    alert("Please await");
}
//Ejercicio 5 Teniendo en cuenta las siguientes temperaturas:• Absolute Zero → -273.15°C • Freezing point → 0°C • Body Temperature → 37°C • Boiling point → 100°CEscribe un programa que convierta estas temperaturas a Fahrenheit (mediante la estructura switch). ** Buscar la fórmula en Google**
let nombre = prompt("Elige entre los valores siguientes; Absolute Zero, Freezing point, Body Temperature , Boiling point");
let temperaturaCent;
let temperaturaFarenth= (temperaturaCent * 9/5 ) + 32;
let temperaturaTotal ; 
switch(nombre){
    case "Absolute Zero":
        temperaturaCent = -273,15;
         temperaturaFarenth = (temperaturaCent * 9/5 ) + 32;
         console.log("La tenperatura en Farentheim es",temperaturaFarenth);
    break;
    case "Freezing point":
        temperaturaCent = 0;
        temperaturaFarenth = (temperaturaCent * 9/5 ) + 32;
        console.log("La tenperatura en Farentheim es",temperaturaFarenth);
        break;
        case "Body Temperature":
            temperaturaCent= 37;
            temperaturaFarenth = (temperaturaCent * 9/5 ) + 32;
            console.log("La tenperatura en Farentheim es",temperaturaFarenth);
            break;
            case "Boiling point":
                temperaturaCent= 100;
                temperaturaFarenth = (temperaturaCent * 9/5 ) + 32;
           console.log("La tenperatura en Farentheim es",temperaturaFarenth);
            break;
            default :
            console.log("No se corresponde con ninguna opcion");

}
//Ejercicio 6 Ejercicio Escribe un programa que pida al usuario email y contraseña. Deberá comparar los datos introducidos con los siguientes, que deberán estar guardados en variables: • email: tolkien@lordofrings.com  password: aNBR6ZeWPY En caso de que los datos introducidos sean correctos, mostrar una alerta con el mensaje: “Welcome Mr. Tolkien”, en caso contrario mostrar el mensaje: “Wrong password or email”.
let usuario=prompt("Dame un nombre de usuario correo electronico");
let contraseña =prompt("dame una contraseña ");
const usuarioDato= "tolkien@lordofrings.com";
const contasenaDato="aNBR6ZeWPY";
let isCorrect ;
if(usuario == usuarioDato && contraseña === contasenaDato){
isCorrect = true;
alert("Welcome Mr. Tolkien")
}else{
alert("Wrong password or email");
}

//Ejercicio 7 Mediante una estructura switch, escribe un programa para convertir euros a: • Dólar americano • Yen Japonés • Libra esterlina • Franco suizo Y muestre por consola el siguiente resultado: XXX euros equivalen a YYY dólares americanos, ZZZ yen japoneses, NNN libras esterlinas y MMM francos suizos. Aplicar template literal para mostrar el resultado.
  let divisa = prompt("Debes de elegir entre Dolar Americano, Yen Japones, Libra Esterlina, Franco Suizo ")  ;
  let euro = prompt("dame una cantidad en Euros");
  let cuenta;
  switch(divisa){
    case "Dolar Americano":
cuenta = euro * 1.09 ;
console.log(euro + " euros equivalen a "+ cuenta + " dolares americanos ");
break;
case "Yen Japones":
    cuenta = euro *171.37;
    console.log(euro + " euros equivalen a "+ cuenta + " Yen Japones");
    break;
    case "Libra Esterlina":
        cuenta = euro  * 0.84 ;
        console.log(euro + " euros equivalen a "+ cuenta + " Libras Esterlinas");
        break;
        case "Franco Suizo":
          cuenta = euro * 0.97 ;
          console.log(euro + " euros equivalen a "+ cuenta + " Francos Suizos");
          break;
          default:
            console.log("Pon una seleccion correcta de las que piden arriba");
  }

  // Ejercicio 8 Escribe un programa que pregunte al usuario 2 números y la operación a realizar (suma, resta, multi, divide). A continuación, mostrar el resultado de la operación requerida por consola.
let numero1 = prompt("Dame un numero");
let numero2 = prompt("Dame otro numero");
let opcion = prompt("Elige una opcion entre sumar , restar , multiplicar y dividir");
let resultado;
switch(opcion){
    case "sumar":
        resultado = parseFloat(numero1) +  parseFloat(numero2) ;
        console.log("La suma es " , resultado);
        break;
        case "restar":
        resultado = numero1 - numero2;
        console.log('La resta es :' + resultado);
        break;
        case "multiplicar":
            resultado = numero1 * numero2;
            console.log("La multiplicacion es :" , resultado);
            break;
            case "dividir":
            resultado = numero1 / numero2;
            console.log("La division es :" , resultado);
            break;
            default:
    console.log("Pon una seleccion correcta de las que piden arriba");
}
// Ejercicio 9 Preguntar al usuario su DNI o NIE. Comprobar, mediante las funciones para strings, si los datos introducidos son válidos, teniendo en cuenta lo siguiente. • El NIE debe escribirse con la X o T inicial, todos los números y la letra final, sin espacios ni guiones. Ejemplo: X0523821F. • El DNI está formado por ocho dígitos y un carácter alfabético de control. Ejemplo: 12345678ª.

    let documento= prompt("Escribe aqui tu dni con su letra");
    let dniCadena=documento.toString().trim();
    let dniLetra=dniCadena.slice(8);
    let NIeLetra=dniCadena.slice(0);
    let Letra=["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];


    console.log(documento);
    console.log(NIeLetra);
    if(dniCadena.startsWith('X') || dniCadena.startsWith('T')){
        console.log("El tipo de documento es un NIE: ", NIeLetra);
    }else if(!dniCadena.startsWith('X') || dniCadena.startsWith('T')){
        console.log("El tipo de docuento es un DNI :" , dniCadena);
    }else{
        console.log("No existe un tipo de documento asi");
    }*/
 //Ejercicio 10  Investiga el objeto Math, y genera 2 números aleatorios, entre 1 y 6, para simular un juego de dados. Comprueba los resultados obtenidos y muestra por consola el ganador. Por ejemplo: “Player 1wins!”, o “draw”, en caso de empate.
 const NumMIN= Math.ceil(1);
const NumMAX = Math.floor(6);

 let dado1 = Math.floor(Math.random() * (NumMAX - NumMIN + 1) + NumMIN);
alert(dado1)
let dado2 = Math.floor(Math.random() * (NumMAX - NumMIN + 1) + NumMIN);
alert(dado2);
let dado3 = Math.floor(Math.random() * (NumMAX - NumMIN + 1) + NumMIN);
alert(dado3)
let dado4 = Math.floor(Math.random() * (NumMAX - NumMIN + 1) + NumMIN);
alert(dado4);
let player1= dado1 + dado2;
console.log("La suma de los dos dados es: ", parseInt(player1));
let player2 =dado3 + dado4;
console.log("La suma de los dos dados es: ", parseInt(player2));
if(player1 < player2){
    alert("Player 2 wins");
}else if(player1 > player2){
    alert("Player 1 wins");
}else{
    alert("Draw");
}

