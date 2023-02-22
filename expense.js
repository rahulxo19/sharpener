var forms = document.getElementById('forms');
var items = document.getElementById('items');

forms.addEventListener('submit',addExpense);
items.addEventListener('click',removeItm);
items.addEventListener('click',editItm);

function addExpense(e){
    e.preventDefault();
    var price = document.getElementById('price').value;
    console.log(price);
    var category = document.getElementById('category').value;
    console.log(category);
    var desc = document.getElementById('desc').value;
    console.log(desc);
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(price + "-" + category + "-" + desc));
    var dlt = document.createElement('button');
    dlt.className = 'delete';
    li.appendChild(dlt);
    dlt.appendChild(document.createTextNode('delete'));
    var edit = document.createElement('button');
    edit.className = 'edit';
    edit.appendChild(document.createTextNode('edit'));
    li.appendChild(edit);
    items.appendChild(li);
    let obj = {
        p : price,
        c : category,
        d : desc
    }
    axios.post('https://crudcrud.com/api/dcf0be8ec0fe4f3ba969376496b92e2d/coll',{
        p : price,
        c : category,
        d : desc
    }).catch(err => console.error(err.message));
}

function removeItm(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        var ul = li.parentElement;
        ul.removeChild(li);
        var desc = li.firstChild.textContent.trim().split('-')[2];
        localStorage.removeItem(desc);
    }

}

function editItm(e){
    if(e.target.classList.contains('edit')){
        var li = e.target.parentElement;
        var ul = li.parentElement;
        console.log(li);
        var toEdit = li.firstChild.textContent.trim().split('-');
        var price = document.getElementById('price');
        var cat = document.getElementById('category');
        var desc = document.getElementById('desc');
        price.value = toEdit[0];
        cat.value = toEdit[1];
        desc.value = toEdit[2];
        console.log(price);
        localStorage.removeItem(desc.value);
    }
}

