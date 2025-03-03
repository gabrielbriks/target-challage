function main() {
  const str = "Hello World"; //String de exemplo

  console.log(reverseString(str));
}

function reverseString(str) {
  let reversedStr = "";

  for (let index = str.length - 1; index >= 0; index--) {
    reversedStr += str[index];
  }
  return reversedStr;
}

main();
