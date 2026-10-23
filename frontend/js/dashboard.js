// dashboard.js


// Example user data
const user = {

    name: "John Doe",

    accountNumber: "1234567890",

    balance: 125000

};


// Get elements

const welcomeText =
    document.querySelector("header p");

const balanceElement =
    document.querySelector(".balance-card h2");

const accountNumberElement =
    document.querySelector(".account-card h3");


// Update welcome message

if (welcomeText) {

    welcomeText.textContent =
        `Welcome back, ${user.name}!`;

}


// Update balance

if (balanceElement) {

    balanceElement.textContent =
        `₹ ${user.balance.toLocaleString("en-IN", {
            minimumFractionDigits: 2
        })}`;

}


// Update account number

if (accountNumberElement) {

    accountNumberElement.textContent =
        user.accountNumber;

}