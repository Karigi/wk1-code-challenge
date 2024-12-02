//Declairing the method for prompting the user to input data
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Tax Bands based on KRA rates (2024)
const taxRates = [
    { upperLimit: 24000, rate: 0.1 }, // 10% for the first 24,000
    { upperLimit: 32333, rate: 0.25 }, // 25% for 24,001 - 32,333
    { upperLimit: 500000, rate: 0.3 }, // 30% for 32,334 - 500,000
    { upperLimit: 800000, rate: 0.325}, //32.5% for 500,001 - 800,000
    {rate:0.35} // for anything above 800,000   
];

// NHIF Deductions based on Aren
const nhifRates = [
    { upperLimit: 5999, deduction: 150 },
    { upperLimit: 7999, deduction: 300 },
    { upperLimit: 11999, deduction: 400 },
    { upperLimit: 14999, deduction: 500 },
    { upperLimit: 19999, deduction: 600 },
    { upperLimit: 24999, deduction: 750 },
    { upperLimit: 29999, deduction: 850 },
    { upperLimit: 34999, deduction: 900 },
    { upperLimit: 39999, deduction: 950 },
    { upperLimit: 44999, deduction: 1000 },
    { upperLimit: 49999, deduction: 1100 },
    { upperLimit: 59999, deduction: 1200 },
    { upperLimit: 69999, deduction: 1300 },
    { upperLimit: 79999, deduction: 1400 },
    { upperLimit: 89999, deduction: 1500 },
    { upperLimit: 99999, deduction: 1600 },
    { deduction: 1700 } // Anything above 100,000
];

// NSSF Deduction Rates
const nssfRate = 0.06; // 6% of basic salary

// Function to calculate PAYE Tax
function calculatePAYE(grossSalary) {
    let tax = 0;
    let remaining = grossSalary;

    for (const band of taxRates) {
        if (band.upperLimit && remaining > band.upperLimit) {
            tax += band.upperLimit * band.rate;
            remaining -= band.upperLimit;
        } else {
            tax += remaining * band.rate;
            break;
        }
    }

    return tax;
}

// Function to calculate NHIF Deductions
function calculateNHIF(grossSalary) {
    for (const rate of nhifRates) {
        if (!rate.upperLimit || grossSalary <= rate.upperLimit) {
            return rate.deduction;
        }
    }
}

// Function to calculate NSSF Deductions
function calculateNSSF(basicSalary) {
    return Math.min(basicSalary * nssfRate, 1800); // Capped at 1800
}

// Main Salary Calculation
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payeTax = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(basicSalary);

    const netSalary = grossSalary - payeTax - nhif - nssf;

    return {
        grossSalary,
        payeTax,
        nhif,
        nssf,
        netSalary
    };
}

// User Input and Processing
rl.question("Enter basic salary: ", (basicInput) => {
    rl.question("Enter benefits: ", (benefitsInput) => {
        const basicSalary = parseFloat(basicInput);
        const benefits = parseFloat(benefitsInput);

        if (isNaN(basicSalary) || isNaN(benefits)) {
            console.log("Please enter valid numbers for both basic salary and benefits.");
        } else {
            const results = calculateNetSalary(basicSalary, benefits);
            console.log("\nSalary Breakdown:");
            console.log(`Gross Salary: ${results.grossSalary}`);
            console.log(`PAYE Tax: ${results.payeTax}`);
            console.log(`NHIF Deduction: ${results.nhif}`);
            console.log(`NSSF Deduction: ${results.nssf}`);
            console.log(`Net Salary: ${results.netSalary}`);
        }

        rl.close();
    });
});
