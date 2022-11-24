import promptSync from "prompt-sync";
const prompt = promptSync();
var name = prompt("What is your name?");
console.log(name);

const num = prompt("Enter a number ");
console.log("Your Number + 4 =");
console.log(Number(num) + 4);