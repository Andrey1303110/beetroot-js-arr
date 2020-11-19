var potato, corn, pepper, onion, tomato, carrot;
products = [];

function showArr(arr, elem) {
    let out = ' ';
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] != undefined) {
            out += `<div><img src="images/${arr[i]}.png"><span>${i}</span></div>`;
        }
    }
    document.querySelector(elem).innerHTML = out;
    document.querySelector('.out-1-source-length').innerHTML = 'Количество продуктов ' + products.length;
    document.querySelector('.out-1-source').innerHTML = 'Список продуктов : ' + products + '';

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
