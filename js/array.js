let cars = ['mazda', 'ford', 'bmw', 'mercedes'];

cars[4] = 'porshe';
cars[-1] = 'zaz';
cars.push('ferarri');
cars.unshift('renault');
cars.shift();
cars.pop();

console.log(cars);
console.log(cars.reverse());

var text = 'Я люблю тебя моё Солнышко';
var revText = text.split('').reverse().join('');
console.log(revText);
