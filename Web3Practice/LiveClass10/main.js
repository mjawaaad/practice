const person = {
    firstName : "Muhammad",
    lastName : "Jawad",
    id : 5426,

    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
};


console.log(person.fullName());




var text = "I am a programmer";

var segIndex = text.indexOf("a");
console.log(segIndex);

