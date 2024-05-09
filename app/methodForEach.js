const getElement = document.getElementById("livros");
const getElementBookDisponible = document.getElementById ('valor_total_livros_disponiveis')

function showBooks(booksList) {
  getElement.innerHTML = ''
  getElementBookDisponible.innerHTML = ''
  booksList.forEach((book) => {
    // let disponible = checkDisponible(book)
      let disponible = book.quantidade > 0 ? 'livros__imagens' : 'livro__imagens indisponivel'
      const divBooks = `
              <div class="livro">
                  <img class= "${disponible}" src="${book.imagem}" alt="${book.titulo}">
                  <h2 class="livro__titulo">${book.titulo}</h2>
                  <p class="livro__descricao">Autor: ${book.autor}</p>
                  <p class="livro__preco" id="preco">Preço: R$${book.preco.toFixed(2)}</p>
                  <div class="tags">
                    <span class="tag">${book.categoria}</span>
                  </div>    
              </div>

          `
      getElement.innerHTML += divBooks;
    });
  }

  // function checkDisponible(book){
  //     if(book.quantidade > 0){
  //       return 'livro__imagens'
  //     } else {
  //       return 'livro__imagens indisponivel'
  //     }
  // }