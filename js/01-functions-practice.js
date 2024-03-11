//STEP 1
function halfNumber(value) {
    let result = value / 2;

    console.log(`Half of ${value} is ${result}.`)

    return result
}

//STEP 2
function squareNumber(value) {
    let result = value * value;

    console.log(`The result of squaring the number ${value} is ${result}.`)

    return result
}

//STEP 3
function percentOf(numerator, denominator) {
    let result = numerator / denominator * 100;

    console.log(`${numerator} is ${result.toFixed(2)}% of ${denominator}.`)

    return result
}

//STEP 4
function findModulus(value1, value2) {
    let smallest, largest, result
    let factors = []

    if (value1 > value2) {
        smallest = value2
        largest = value1
    } else {
        smallest = value1
        largest = value2
    }

    for (let i = 1; i < smallest; i++) {
        if (smallest % i == 0) {
            factors.push(i)
        }
    }

    result = 0

    for (let j = factors.length - 1; j >=0; j--) {
        if (largest % factors[j] == 0) {
            result = factors[j]
            break
        }
    }

    if (result != 0 ) {
        console.log(`${result} is the modulus of ${smallest} and ${largest}.`)
    } else {
        console.log(`A common modulus of ${smallest} and ${largest} could not be found.`)
    }

    return result
}

//STEP 5
// halfNumber(1)
// halfNumber(5)
// halfNumber(10)
// halfNumber(27)

// squareNumber(1)
// squareNumber(5)
// squareNumber(10)
// squareNumber(27)

// percentOf(1, 5)
// percentOf(5, 10)
// percentOf(10, 27)
// percentOf(27, 5)

// findModulus(3, 7)
// findModulus(6, 10)
// findModulus(270, 27)
// findModulus(27, 9)