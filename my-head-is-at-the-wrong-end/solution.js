let arr = ["tail", "body", "head"];

function fixTheMeerkat(arr) {
    let length = arr.length;
    let newArr = [];
    for (let i = 2; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

fixTheMeerkat(arr);