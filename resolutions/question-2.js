function main() {
  const numInput = 34; //Número de entrada para verificar se pertence a sequência de Fibonacci

  if (isFibonacci(numInput)) {
    console.log(`${numInput} pertence a sequência de Fibonacci`);
  } else {
    console.log(`${numInput} NÃO pertence a sequência de Fibonacci`);
  }
}

function isFibonacci(num) {
  let a = 0;
  let b = 1;

  while (b < num) {
    let temp = a;
    a = b;
    b = temp + b;
  }

  return b === num;
}

main();
