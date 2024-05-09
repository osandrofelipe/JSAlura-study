function calculateValueTotalBooksDisponible(lista) {
    return lista.reduce((acc, book) => acc + book.preco, 0).toFixed(2)
}
