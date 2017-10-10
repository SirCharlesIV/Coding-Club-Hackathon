var request_money = document.getElementById('request_money');
var donate_money = document.getElementById('donate_money');
var balance = document.getElementById('balance');

var money = 1000;

balance.textContent = 'Current Balance: $' + money;

function request() {
    var amount = prompt('How much money do you want to request? (No more than $750 allowed)');
    if (amount > 750) {
        alert('Please do not take more than $750, leave some money for other clubs.');
        request();
    } else if (amount == 0) {
        alert('Please, take at least some money.');
        request();
    } else if (amount === null) {
        return;
    } else if (amount > money) {
        alert('There isn\'t that much money available. Please choose an available amount.');
        request();
    }
    else {
        alert('Thank you, your request will be reviewed before approval, expect a response within a week.');
        money -= amount;
        balance.textContent = 'Current Balance: $' + money;
    }
}

function donate() {
    var amount = prompt('How much money would you like to donate to our cause?');
    if (amount !== null) {
        alert('Thank you for your generous donation of $' + amount + '.');
        money += Number(amount);
        balance.textContent = 'Current Balance: $' + money;
    } else {
        return;
    }
}

request_money.onclick = request;
donate_money.onclick = donate;