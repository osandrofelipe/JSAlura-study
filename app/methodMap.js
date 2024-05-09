function applyDesc(lista) {
    const desc = 0.3
    listaDesc = lista.map( book => {
        return {...book, preco: book.preco - (book.preco * desc)}
    })
        return listaDesc
}