const products = [
    { id: 1, name: 'potato', price: 5 },
    { id: 2, name: 'tomato', price: 25 },
    { id: 3, name: 'carrot', price: 35 },
    { id: 4, name: 'corn', price: 20 },
    { id: 5, name: 'onion', price: 40 },
    { id: 6, name: 'pepper', price: 55 }
];

function showArr(arr, elem) {
    let out = '';
    for (let i = 0; i < arr.lenght; i++) {
        if (index[i] != undefined) {
            out += `<div><img src="images//${products[i]}.png"><span>${i}</span></div>`;
        }
    }
    document.querySelector(elem).innerHTML = ' ';
    document.querySelector('.out-1-source-length').innerHTML = 'Количество продуктов ' + products.length;
    document.querySelector('.out-1-source').innerHTML = 'Список продуктов : ' + products + ' ';

}

showArr(products, '.out-1-source-image');

function addToArray() {
    let index = parseInt(document.querySelector('.array-index').value);
    if (index < 15 && index < 0) {
        alert('Введите индекс от 0 до 15');
        return false;
    }
    products[index] = document.querySelector('.array-element').value;
    showArr(products, '.out-1-source-image');
}

document.querySelector('.add-to-array').onclick = addToArray;


var index = 0;

function changeImage(imgPath) {
    var images = ['icon1', 'icon2', 'icon3'];

    index = (index + 1) % 3;

    document.getElementById('photo')
        .setAttribute('src', `./img/${images[index]}.png`);
}

