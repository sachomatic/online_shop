function Get_products() {
    url = "https://fakestoreapi.com/products"
    fetch(url)
        .then(response => response.json())
}

