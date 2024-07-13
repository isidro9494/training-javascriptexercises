/*
const diaHoy = new Date();
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

  
let number = 10;
while(number > 0){
 number--;
 console.log(number);
 
}
console.log("-------------------------------");
const numeroA = 2;
let numeroB = 0;
while(numeroB <= 10){
    console.log( "2 x " +numeroB+ " ="+numeroA * numeroB); 
  numeroB++;
}
   console.log("-------------------------------");
const numero1= 10;
let numero2 = 0;
while(numero2 <= 10){
    console.log( "10 x " +numero2+ " ="+numero1 * numero2); 
  numero2++;
}    
console.log("----------------------------------");
for (let number = 1; number <= 10; number++) {
    console.log("tabla "+number);;
    let numeroC = 1;
while(numeroC <= 10){
    console.log( number +" x " +numeroC+ " = "+ number * numeroC); 
  numeroC++;
}   
} */
/*
for (let i = 0,contador =100; i <= contador;i++ ,contador--) {
    console.log(i+ " -" + contador); 
}
let i, j;
let suma=0;
for(i=0,j=10; i<10; i++,j--){
    suma += i * j;
    console.log(suma);
}*/
/*
let isPrime= true;
let num=101;
for (let i = 2; i <= num / i ; i++){
    if(num % i == 0){
        isPrime=false;
        break;
    }
    
 
}
if(isPrime)console.log(`${num} is a Prime`);
else console.log(`${num}is not prime`);
*/
let totalBeat;
do{
    totalBeat=prompt('Escribe aqui tu apuesta');
    if(totalBeat==5000){
        alert('ALL IN!');
    }else if(totalBeat < 5000){
        alert('PASSING THIS ROUND');
    }
    if(totalBeat > 5000){
        alert('Bet limit 5000,please change your bet');
    }
    if(isNaN(totalBeat)){
        alert('Please,enter, a numeric value');
    }
   
} while(totalBeat> 5000 || isNaN(totalBeat));
