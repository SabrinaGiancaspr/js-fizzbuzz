// #FizzBuzz

// -creo il ciclo for 
//   -numeri da 1 a 100 
for (let i = 0; i < 100; i++) { //-quindi scrivo i = 1 < 100; i++ (incrementa)
  const n = i + 1;


  if(n % 3 === 0 && n % 5 === 0) { //se è multiplo di tre e cinque 
  console.log ('fizzbuzz');
}else if (n % 3 === 0) { //se è multiplo di tre 
  console.log('fizz');
}else if (n % 5 === 0) { //se è multiplo di cinque
  console.log ('buzz');
}else{                  //se non è multiplo di niente 
  console.log(n)
}
}