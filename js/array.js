var cars = ['mazda', 'ford', 'bmw', 'mercedes'];

cars[4] = 'porshe';
cars.push('ferarri');
cars.unshift('renault');
cars.shift();
cars.pop();

console.log(cars);
console.log(cars.reverse());
console.log(cars.indexOf('ford'));

var carsIndex = (cars.indexOf('ford'));

console.log(carsIndex);

console.log(cars.includes('ford'));

var text = 'Я люблю тебя моё Солнышко';
var revText = text.split('').reverse().join('');
console.log(revText);

var people = [
    {
        name: 'Stepa',
        age: 47,
        'english language': false
    },
    {
        name: 'Andre',
        age: 25,
        'english language': true
    },
    {
        name: 'Gosha',
        age: 55,
        'english language': false
    }
];

let peopleInd = people.findIndex(function (person) {
    return person.age == 55;
})

console.log(people[peopleInd]);

let peopleName = people.findIndex(function (person) { return person.name == 'Andre'; })

console.log(people[peopleName]);

let peopleName2 = people.find(person => person.name == 'Andre'); // тоже самое но проще

console.log(peopleName2);

var allAge = people.filter(person => person.age > 25).reduce((acc, person) => {
    acc += person.age
    return acc
}, 0) //фильтр с аккумулятор (в которой вклдываются значения)

console.log(allAge);

var chisla = [1, 3, 5, 7, 9, 11, 13];

let chislaPow = num => num ** 2;
let chisla2 = chisla.map(chislaPow);

console.log(chisla2);

let filteredChisla = chisla2.filter(num => {
    return num > 25;
})

console.log(filteredChisla);
