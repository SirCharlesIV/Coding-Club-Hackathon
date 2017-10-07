var donators = {};
var donator_keys = Object.keys(donators);
var donator_para = document.getElementById('donators');
var donate = document.getElementById('submit_donation');

for (var i = 0; i < donator_keys.length; i++) {
    donator_para.textcontent = donator_keys[i] + ': ' + donators[donator_keys[i]];
}

function donation() {
    var amount = document.getElementById('amount').value;
    var name = document.getElementById('name').value;
    alert('Thank you for your donation of $' + amount + ' ' + name + '!');
    donators[name] = amount;    
}

donate.addEventListener('click', donation);