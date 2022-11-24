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

let all = array1.concat(arr2);

console.log(all);

console.log('After applying pop function');

all.pop();
console.log(all);

all.shift();
console.log("After applying shift");
console.log(all);

let newarr = ["Monday", "Tuesday", 5, 8, 9, "Wednesday", "Thursday", "Friday"];
console.log('New Array ');
console.log(newarr);
console.log("After applying splice");
newarr.splice(2, 3);
console.log(newarr);


