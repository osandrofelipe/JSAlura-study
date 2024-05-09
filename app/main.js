let lista = [];
const endPoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function buscaLivrosAPI() {
  const resp = await fetch(endPoint);
  lista = await resp.json();
  let booksDesc = applyDesc(lista)
  showBooks(booksDesc);
}

buscaLivrosAPI();
