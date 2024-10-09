const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    console.log("Simple Calculator");
    console.log("Available operations: +, -, *, /");

    while (true) {
        try {
            const num1 = parseFloat(await askQuestion("Enter the first number: "));
            const operator = await askQuestion("Enter the operator (+, -, *, /): ");
            const num2 = parseFloat(await askQuestion("Enter the second number: "));

            let result;
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        throw new Error("Division by zero is not allowed.");
                    }
                    result = num1 / num2;
                    break;
                default:
                    throw new Error("Invalid operator.");
            }

            console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }

        const continueCalc = await askQuestion("Do you want to perform another calculation? (yes/no): ");
        if (continueCalc.toLowerCase() !== 'yes') {
            break;
        }
    }

    rl.close();
}

main();