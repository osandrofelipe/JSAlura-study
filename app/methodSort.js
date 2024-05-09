const btnOrderPrice = document.getElementById('btnOrdenarPorPreco')
btnOrderPrice.addEventListener('click', orderBooksPrice)

function orderBooksPrice() {
    let booksOrderned = lista.sort((a,b) => a.preco - b.preco)
    showBooks(booksOrderned)
}