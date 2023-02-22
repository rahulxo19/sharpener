var forms = document.getElementById("forms");
var items = document.getElementById("items");

forms.addEventListener("submit", addExpense);
items.addEventListener("click", removeItm);
items.addEventListener("click", editItm);

function addExpense(e) {
  e.preventDefault();
  var price = document.getElementById("price").value;
  var category = document.getElementById("category").value;
  var desc = document.getElementById("desc").value;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(price + "-" + category + "-" + desc));
  var dlt = document.createElement("button");
  dlt.className = "delete";
  li.appendChild(dlt);
  dlt.appendChild(document.createTextNode("delete"));
  var edit = document.createElement("button");
  edit.className = "edit";
  edit.appendChild(document.createTextNode("edit"));
  li.appendChild(edit);
  items.appendChild(li);
  let obj = {
    p: price,
    c: category,
    d: desc,
  };
  axios
    .post("https://crudcrud.com/api/dcf0be8ec0fe4f3ba969376496b92e2d/coll", {
      p: price,
      c: category,
      d: desc,
    })
    .catch((err) => console.error(err.message));
}
let del;

window.addEventListener("DOMContentLoaded", () => {
  async function display() {
    setTimeout(() => {
      axios
        .get("https://crudcrud.com/api/dcf0be8ec0fe4f3ba969376496b92e2d/coll")
        .then((res) => {
          const data = res.data;
          let p, c, d;
          for (let i = 0; i < data.length; i++) {
            p = data[i].p;
            c = data[i].c;
            d = data[i].d;
            var li = document.createElement("li");
            li.appendChild(
              document.createTextNode(p + "-" + c + "-" + d)
            );
            var dlt = document.createElement("button");
            dlt.className = "delete";
            li.appendChild(dlt);
            dlt.appendChild(document.createTextNode("delete"));
            var edit = document.createElement("button");
            edit.className = "edit";
            edit.appendChild(document.createTextNode("edit"));
            li.appendChild(edit);
            items.appendChild(li);
          }
          console.log(res);
        }, 1000);
    });
  }
  async function main() {
    await display();
  }
  main();
});

async function removeItm(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    var ul = li.parentElement;
    ul.removeChild(li);
    var desc = li.firstChild.textContent.trim().split("-")[2];
    localStorage.removeItem(desc);
    var id,d;
    await axios
        .get("https://crudcrud.com/api/dcf0be8ec0fe4f3ba969376496b92e2d/coll")
        .then((res) => {
          const data = res.data;
          for (let i = 0; i < data.length; i++) {
            id = data[i]._id;
            d = data[i].d;
            if(d == desc){
                break;
            }
          }
        }, 1000);
    
        if(d == desc){
            axios.delete(`https://crudcrud.com/api/dcf0be8ec0fe4f3ba969376496b92e2d/coll/${id}`)
        }
        console.log(id);
  }
}

function editItm(e) {
  if (e.target.classList.contains("edit")) {
    var li = e.target.parentElement;
    var ul = li.parentElement;
    console.log(li);
    var toEdit = li.firstChild.textContent.trim().split("-");
    var price = document.getElementById("price");
    var cat = document.getElementById("category");
    var desc = document.getElementById("desc");
    price.value = toEdit[0];
    cat.value = toEdit[1];
    desc.value = toEdit[2];
    console.log(price);
    localStorage.removeItem(desc.value);
  }
}
