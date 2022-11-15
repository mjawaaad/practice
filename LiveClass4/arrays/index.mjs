const array1 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Fri", "Saturday", "Sunday"];

console.log(array1[4]);
array1[4] = "Friday";
console.log(array1[4]);

console.log(array1.length);


let arr2 = [];
console.log(arr2);

arr2.push("sunday");
arr2.push("Tuesday");
console.log(arr2);

arr2.splice(1, 0, "Monday");
console.log(arr2);

console.log(array1.concat(arr2));
