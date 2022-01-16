const person = {
    name: 'leonardo',
    surname: 'oliveira',
    age: 18,
}

//following the immutability idea...
const newPerson = {
    ...person,
    age: 15
}

console.log(person);
console.log(newPerson);