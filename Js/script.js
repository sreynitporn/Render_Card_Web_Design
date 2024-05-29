
import { cardComponent } from "../component/cardComponent.js";
import { products } from "../data/products.js";

let renderArea = document.querySelector("#card-area");

products.slice(0,10).map((product) => {
    renderArea.innerHTML += cardComponent(product);
});

console.log(products);
