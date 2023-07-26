const person = {
    firstname : "Mohanapriya",
    age : 23,
    hobbies : "singing",
};
keysandvalues();
function keysandvalues (){
    let values = Object.values(person);
    let keys = Object.keys(person);
console.log (keys);
console.log(values);
}
