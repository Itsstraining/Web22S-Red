function numToBit(num) {
    let number = num;
    let result = [];
    while (number >= 1) {
        result.unshift(Math.floor(number % 2));
        number = number / 2;
    }
    console.log(result.join());
}

function bitToDemacial(a) {
    let arr = [];
    arr = a.split("");
    console.log(arr);
    let x = arr.reverse();
    let result = 0;
    for (let i = 0; i < x.length; i++) {
        let temp = x[i] * Math.pow(2, i);
        result += temp;
    }
    console.log(result);
}

// numToBit(8);
// bitToDemacial("1111");

function he10Sang8(num) {
    let number = num;
    let result = [];
    while (number >= 1) {
        result.unshift(Math.floor(number % 8));
        number = number / 8;
    }
    console.log(result);
}
he10Sang8(2764);

function he10Sang8(num) {
    let number = num;
    let result = [];
    while (number >= 1) {
        result.unshift(Math.floor(number % 8));
        number = number / 8;
    }
    console.log(result);
}
he10Sang8(2764);

function he10Sang16(num) {
    let arr = ["A", "B", "C", "D", "E", "F"];
    let number = num;
    let result = [];
    while (number >= 1) {
        if (number >= 10) {
            result.unshift(Math.floor(number % 16));
            number = number / 16;
        }

    }
    console.log(result);
}
he10Sang8(2764);