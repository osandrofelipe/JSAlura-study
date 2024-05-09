let books = []
const api = "app/livros.json"

const getElementId = document.getElementById('livros')

async function getBooksArray(){
    const response = await fetch(api)
    books = await response.json()
    console.table(books)
    showBooksOnScreen(books)
}

function showBooksOnScreen(listBooks) {
    listBooks.forEach( book =>{
        getElementId.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${book.imagem}"
          alt="${book.alt}" />
        <h2 class="livro__titulo">
          ${book.titulo}
        </h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco">R$${book.preco}</p>
        <div class="tags">
          <span class="tag">${book.categoria}</span>
        </div>
      </div>
        `
    })
}

getBooksArray()

function exibeLivros(listaLivros) {
    listaLivros.forEach(livro => {
        getElementId.innerHTML += `
        
        `
    })
}

