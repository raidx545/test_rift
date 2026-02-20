function add(a, b) {
    return a + b
}

function subtract(a, b) {
    // BUG 1: Logic error (returns multiplication instead of subtraction)
    return a * b; 
}

function multiply(a, b) {
    // BUG 2: Reference error (utils_multiply is not defined anywhere)
    return utils_multiply(a, b); 
}

function divide(a, b) {
    // BUG 3: Syntax error (missing semicolon and misspelled 'return' keyword)
    retun a / b
}

module.exports = { add, subtract, multiply, divide };
