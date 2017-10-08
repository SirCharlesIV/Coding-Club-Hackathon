var message = document.getElementById('send_message');

function get_Message() {
    console.log('hi');
    var name = prompt('Who are you?');
    var club = prompt('What club are you in?');
    var message = prompt('What do you want to say?');

    if (club === null) {
        return;
    } else if (message === null) {
        return;
    } else if (name === null) {
        return;
    } else if (name ==='') {
        return;
    } else if (club === '') {
        return;
    } else if (message === '') {
        return;
    } else {
        var para = document.createElement('p');
        
        var span = document.createElement('span');
        var span_node = document.createTextNode(String(name + ' (' + club + '): '));
        span.appendChild(span_node);
        para.appendChild(span);

        var node = document.createTextNode(String(message));
        para.appendChild(node);
        var message_box = document.getElementById('message_box');
        message_box.appendChild(para);
    }
}

message.onclick = get_Message;