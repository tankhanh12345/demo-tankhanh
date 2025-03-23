const url = "https://67c45277c4649b9551b34029.mockapi.io/phone"
fetch(url)
    .then(res => res.json())
    .then(data => {
        const DataHome = data.splice(0,3);
        const productGrid = document.querySelector('.filterable_cards');
        console.log(productGrid);
        DataHome.forEach(product => {
            const productCard = `
                    <div class="card" data-name="Áo">
                        <img src="../img/${product.image}" alt="">
                            <div class="card_body">
                                <h6 class="card_title">${product.title}</h6>
                                <p class="card_text">${product.price}đ</p>
                                <button class="btn btn-primary" onclick="detailProducts(${product.id})">Mua</button>
                            </div>
                    </div>
            `;
            productGrid.innerHTML += productCard;
        });
    })
    .catch(error => console.error('Error fetching data:', error));


function detailProducts(productId) {
    fetch(`https://67c45277c4649b9551b34029.mockapi.io/phone/${productId}`)
        .then(response => response.json())
        .then(product => {
            window.localStorage.setItem("product", JSON.stringify(product));
            location.href = "../html/detail.html";
        })
        .catch(error => console.error('Error fetching product details:', error));
}