const products = ['potato'];

function showArr(arr, elem) {
    let out = '';
    for (let i = 0; i < arr.lenght; i++) {
        out = out + `<div><img src"image\\${arr[i]}.png"><span>${i}</span></div>`;
    }
    document.querySelector(elem).innerHTML = out;
}

showArr(products, '.out-1-source-image');