let product = JSON.parse(localStorage.getItem("product"))

document.querySelector(".image-product").src = `../img/${product.image}`
document.querySelector(".product-title").innerHTML = product.title
document.querySelector(".price").innerHTML = `${product.price}`
document.querySelector(".description").innerHTML = `${product.description}`