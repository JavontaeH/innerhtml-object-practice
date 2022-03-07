choco = {
  name: "ChocolateIce Cream",
  type: "dessert",
  price: 3.59,
  servings: 2,
};

const inStockFunc = (obj) => {
  obj.in_stock = true;
};

const enterHTML = (obj) => {
  const elementHTML = document.querySelector(".obj_render");
  for (const [key, value] of Object.entries(obj)) {
    elementHTML.innerHTML += `<h2>${key}: ${value}</h2>`;
  }
};

inStockFunc(choco);
enterHTML(choco);
