var request_money = document.getElementById('request_money');
var donate_money = document.getElementById('donate_money');

function request() {
    var amount = prompt('How much money do you want to request? (No more than $750 allowed)');
    if (amount > 750) {
        alert('Please do not take more than $750, leave some money for other clubs.');
        request();
    } else if (amount == 0) {
        alert('Please, take at least some money.');
        request();
    } else {
        alert('Thank you, your request will be reviewed before approval, expect a response within a week.');
    }
}

request_money.onclick = request;