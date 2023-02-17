const secondItem = document.querySelectorAll('#items li:nth-child(2)'); 

secondItem.forEach(item => {
  item.style.color = 'green';
});

const oddItems = document.querySelectorAll('#items li:nth-child(odd)'); 


oddItems.forEach(item => {
  item.style.backgroundColor = 'green';
});
