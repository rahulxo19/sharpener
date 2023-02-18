var users = document.getElementById('users');
var form = document.getElementById('my-form');

form.addEventListener('submit',addUser);
users.addEventListener('click',removeItem);

function addUser(e){
    e.preventDefault();
    var newName = document.getElementById('name').value;
    console.log(newName);
    var newEmail = document.getElementById('email').value;
    console.log(newEmail);
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newName + " " + newEmail));
    var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  users.appendChild(li);
    let obj = {
        name : newName,
        email : newEmail
    }
    localStorage.setItem(newName,JSON.stringify(obj));
    console.log(JSON.parse(localStorage.getItem(newName)));
    
}
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure you want to remove this user?')) {
      var li = e.target.parentElement;
      var ul = li.parentElement;
      var name = li.textContent.trim().split(' ')[0];

      // remove the list item from the ul element
      ul.removeChild(li);

      // remove the corresponding object from the local storage using the name value as the key
      localStorage.removeItem(name);
    }
  }
}
