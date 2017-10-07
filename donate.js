var donate = document.getElementById('submit_donation');


function donation() {
    var amount = document.getElementById('amount').value;
    var name = document.getElementById('name').value;
    alert('Thank you for your donation of $' + amount + ' ' + name + '!');
    donators[name] = amount
}

donate.addEventListener('click', donation);