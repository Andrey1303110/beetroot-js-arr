var a, a1, a2, b, b1, b2, c, c1, c2, d, d1, d2, e, e1, e2;

a = prompt('Введите название продукта', '');
a1 = prompt('Введите цену продукта', '');
a2 = prompt('Введите купленное количество',);
b = prompt('Введите название продукта', '');
b1 = prompt('Введите цену продукта', '');
b2 = prompt('Введите купленное количество',);
c = prompt('Введите название продукта', '');
c1 = prompt('Введите цену продукта', '');
c2 = prompt('Введите купленное количество',);
d = prompt('Введите название продукта', '');
d1 = prompt('Введите цену продукта', '');
d2 = prompt('Введите купленное количество',);
e = prompt('Введите название продукта', '');
e1 = prompt('Введите цену продукта', '');
e2 = prompt('Введите купленное количество',);

let arr = [
    {
        subject: a,
        rating: a1,
        number: a2
    },
    {
        subject: b,
        rating: b1,
        number: b2
    },
    {
        subject: c,
        rating: c1,
        number: c2
    },
    {
        subject: d,
        rating: d1,
        number: d2
    },
    {
        subject: e,
        rating: e1,
        number: e2
    }
];

let number = Number;

let newArr1 = arr.sort((a, b) => {
    return b.rating - a.rating
})

let newArr2 = arr.sort((a, b) => {
    return b.number - a.number
})

let sum = (a1 + b1 + c1 + d1 + e1);
let kolvo = (a2 + b2 + c2 + d2 + e2);

console.log(newArr1);
console.log(newArr2);
console.log(sum);
console.log(kolvo);