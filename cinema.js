const catalogo = require("./catalogo");

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
    const novoFilme = {
    codigo,
    titulo,
    duracao,
    atores,
    anoDeLancamento,
    emCartaz,
};

catalogo.push(novoFilme);


}
adicionarFilme(5, "The 100", 2.20, ["Tico", "Teco"], 2010, false)
adicionarFilme(4, "verde", 2.19, ["b", "A"], 2005, false)

function buscarFilmes(codigo){
    const filmeP = catalogo[codigo - 1]
    if(filmeP){
       return console.table(filmeP)
   } else {
      return console.log("Filme não encontrado")
   }
     
}

function alterarStatusEmCartaz(codigo, novoStatus){
    const filmeA = catalogo[codigo -1]
    if(filmeA){
        catalogo[codigo -1].emCartaz = novoStatus
        return console.table(filmeA)
    } else {
       return console.log("Filme não encontrado")
    }

    
}
//buscarFilmes(4)
//alterarStatusEmCartaz(4, true)

function listarFilmesEmCartaz(emCartaz){
   const filmesE = catalogo[catalogo -1]
    if(filmesE){
        return console.table(emCartaz)
    } else {
        return console.log("Filme não disponivel")
    }
            
}

  listarFilmesEmCartaz(1)

  // console.table(catalogo)


  