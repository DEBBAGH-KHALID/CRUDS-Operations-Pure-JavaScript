let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let total = document.getElementsByClassName("total")[0];
let btn = document.getElementById("btn");

function getTotal() {
  let result;
  if (price.value != "" && taxes.value != "" && ads.value != "") {
    result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.textContent = `Totale : ${result} DH`;
    total.style.backgroundColor = "green";
  } else {
    total.style.backgroundColor = "red";
  }
  return result;
}
let products;
if (localStorage.products != null) {
  products = JSON.parse(localStorage.products);
} else {
  products = [];
}
function addProduct() {
  if (title.value != "" && category.value != "" && price.value != "" && count.value <=100) {
    let product = {
      title: title.value,
      price: price.value,
      taxes: taxes.value,
      ads: ads.value,
      discount: discount.value,
      count: count.value,
      total: getTotal(),
      category: category.value,
    };
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    clearData();
    displayData(products);
  }
}

function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  category.value = "";
  count.value = "";
  total.innerHTML = "Total:";
  total.style.backgroundColor = "red";
}

function displayData(products) {
  let table = "";
  for (let i = 0; i < products.length; i++) {
    table += `
         <tr>
              <td>${i}</td>
              <td>${products[i].title}</td>
              <td>${products[i].price}</td>
              <td>${products[i].taxes}</td>
              <td>${products[i].ads}</td>
              <td>${products[i].discount}</td>
              <td>${products[i].total}</td>
              <td>${products[i].category}</td>
              <td>
                <button class="update" onclick="updateProduct(${i})">update</button>
              </td>

              <td>
                <button class="delete" onclick="deleteProduct(${i})">delete</button>
              </td>
            </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = table;
}

function deleteProduct(id) {
  products.splice(id, 1);
  localStorage.products = JSON.stringify(products);
  displayData(products);
}

function deleteAll() {
  localStorage.clear();
  displayData(products);
}
function updateProduct(id) {
  title.value = products[id].title;
  price.value = products[id].price;
  taxes.value = products[id].taxes;
  ads.value = products[id].ads;
  discount.value = products[id].discount;
  count.value = products[id].count;
  category.value = products[id].category;
  getTotal();
  btn.innerHTML = "Update";
  btn.onclick = () => {
    products[id].title = title.value;
    products[id].price = price.value;
    products[id].taxes = taxes.value;
    products[id].ads = ads.value;
    products[id].discount = discount.value;
    products[id].count = count.value;
    products[id].category = category.value;
    products[id].total = getTotal();
    localStorage.setItem("products", JSON.stringify(products));
    displayData(products);
    btn.innerHTML = "Create";
    setTimeout(function () {
      clearData();
    }, 3000);
  };
}

let SearchMood = "Title";

function getSearchMood(id) {
  let search = document.getElementById("search");
  if (id == "SearchByTitle") {
    SearchMood = "Title";
    search.placeholder = "Search By Title";
  } else {
    SearchMood = "Category";
    search.placeholder = "Search By Category";
  }
  search.focus();
  SearchData(search.value);
}
function SearchData(value) {
  let newProd = [];

  for (let i = 0; i < products.length; i++) {
    if (SearchMood == "Title") {
      if (products[i].title.toLowerCase().startsWith(value.toLowerCase())) {
        newProd.push(products[i]);
      }
    } else {
      if (products[i].category.toLowerCase().startsWith(value.toLowerCase())) {
        newProd.push(products[i]);
      }
    }
  }

  displayData(newProd);
}

displayData(products);
