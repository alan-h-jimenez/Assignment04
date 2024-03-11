// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
        case 'add':
            return x + y
        case 'subtract':
            return x - y
        case 'multiply':
            return x * y
        case 'divide':
            return x / y
    }
}

function getNumber(label) {
    let value
    while (true) {
        value = Number.parseFloat(prompt(`Enter the ${label} value of the calculation: `))
        if (Number.isNaN(value) == false) {
            return value
        } else {
            alert('That is not a number.')
        }
    }
}

function main() {
    let value1, value2, result
    let calcType = '', calcOutput = ''

    do {
        if (calcType != '' ) {
            alert('Please select a valid operation.')
        }

        // COLLECT FIRST NUMBER FROM USER
        value1 = getNumber('first')

        // COLLECT SECOND NUMBER FROM USER
        value2 = getNumber('second')

        // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

        calcType = prompt('Select calculation to perform (add, subtract, multiply, or divide): ')
    } while (calcType != 'add' && calcType != 'subtract' && calcType != 'multiply' && calcType != 'divide')

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    result = calculate(value1, value2, calcType)

    calcOutput = value1.toString()
    switch (calcType) {
        case 'add':
            calcOutput += ' + '
            break
        case 'subtract':
            calcOutput += ' - '
            break
        case 'multiply':
            calcOutput += ' * '
            break
        case 'divide':
            calcOutput += ' / '
    }

    calcOutput += value2.toString() + ' = ' + result.toString()

    alert(calcOutput)
}

main()