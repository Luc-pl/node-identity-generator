const fs = require('fs');

const genders = ['m', 'f'];
const maleNames = ['Łukasz', 'Jacek', 'Dawid', 'Franciszek', 'Włodzimierz', 'Tymon','Jarosław'];
const femaleNames = ['Monika', 'Alicja', 'Jagoda', 'Małgorzata', 'Bożena', 'Agnieszka', 'Anna'];
const lastNames = ['Kowalski', 'Nowak', 'Pawlak', 'Anioł', 'Okrasa', 'Dziendziel'];
const ages = ['18', '27', '33', '45', '56', '64', '78'];

const randChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for(let i=0; i<20; i++) {
    let person = {};

    person.gender = randChoice(genders);

    if(person.gender === 'f') {
        person.name = randChoice(femaleNames);
    } else {
        person.name = randChoice(maleNames);
    }

    person.lastname = randChoice(lastNames);

    person.age = randChoice(ages);

    people.push(person);
};

const data = JSON.stringify(people);

fs.writeFile('outputfile.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});