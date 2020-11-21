var a, a1, a2, b, b1, b2, c, c1, c2, d, d1, d2, e, e1, e2;

a = prompt('Введите название продукта', '');
a1 = prompt('Введите цену продукта',);
a2 = prompt('Введите купленное количество',);
b = prompt('Введите название продукта', '');
b1 = prompt('Введите цену продукта',);
b2 = prompt('Введите купленное количество',);
c = prompt('Введите название продукта', '');
c1 = prompt('Введите цену продукта',);
c2 = prompt('Введите купленное количество',);
d = prompt('Введите название продукта', '');
d1 = prompt('Введите цену продукта',);
d2 = prompt('Введите купленное количество',);
e = prompt('Введите название продукта', '');
e1 = prompt('Введите цену продукта',);
e2 = prompt('Введите купленное количество',);

let arr = [
    {
        subject: a,
        price: a1,
        numbers: a2
    },
    {
        subject: b,
        price: b1,
        numbers: b2
    },
    {
        subject: c,
        price: c1,
        numbers: c2
    },
    {
        subject: d,
        price: d1,
        numbers: d2
    },
    {
        subject: e,
        price: e1,
        numbers: e2
    }
];

let newArr1 = arr.sort((a, b) => {
    return b.price - a.price
});

let newArr2 = arr.sort((a, b) => {
    return b.number - a.number
});

let sum = (a1 * a2) + (b1 * b2) + (c1 * c2) + (d1 * d2) + (e1 * e2);
let kolvo = Number(a2) + Number(b2) + Number(c2) + Number(d2) + Number(e2);
// let kolvo = (((a2) + (b2) + (c2 + d2)) + e2);
let sredsum = sum / arr.length;

console.log(newArr1);
console.log(newArr2);
console.log(sum);
console.log(kolvo);
console.log(sredsum);

alert('Общая сумма покупок ,(sum), гривен');
alert('Общая количество товара ,(kolvo), штук');
alert('Средняя стоимость 1 товара ,(sredsum), гривен за штуку');