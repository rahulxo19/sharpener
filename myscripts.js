const secondItem = document.querySelectorAll('#items li:nth-child(2)'); 

secondItem.forEach(item => {
  item.style.color = 'green';
});

const oddItems = document.querySelectorAll('#items li:nth-child(odd)'); 


oddItems.forEach(item => {
  item.style.backgroundColor = 'green';
});

var itemList = document.querySelector('#items');
itemList.parentElement.style.backgroundColor='#f4f4f4';

itemList.children[1].style.backgroundColor = 'yellow';

itemList.firstElementChild.textContent = 'Hello World1';
itemList.lastElementChild.textContent = 'Hello World at last';
itemList.previousElementSibling.style.backgroundColor = 'orange';

var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id= 'hello1';
newDiv.setAttribute('title','Hello div');
var newDivText = document.createTextNode('hello World');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);
