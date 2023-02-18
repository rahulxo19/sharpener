var users = document.getElementById('users');
var form = document.getElementById('my-form');

form.addEventListener('submit',addUser);

function addUser(e){
    e.preventDefault();
    var newName = document.getElementById('name').value;
    console.log(newName);
    var newEmail = document.getElementById('email').value;
    console.log(newEmail);
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newName + " " + newEmail));
    users.appendChild(li);
    localStorage.setItem(newName,newEmail);
    console.log(localStorage.getItem(newName));
}