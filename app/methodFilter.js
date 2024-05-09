const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
    const elementBtn = document.getElementById(this.id)
    const category = elementBtn.value
    let booksFiltered = category == 'disponivel' ? filterDisponibility() : filterCategory(category)
    showBooks(booksFiltered)
    if(category == 'disponivel') {
        const valueTotal = calculateValueTotalBooksDisponible(booksFiltered)
        showValueTotalBookDisponibleOnScreen(valueTotal)
    }
}

function filterCategory(category) {
    return lista.filter(book => book.categoria == category)
}

function filterDisponibility() {
    return lista.filter(book => book.quantidade > 0)
}

function showValueTotalBookDisponibleOnScreen (valorTotal){
    getElementBookDisponible.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}