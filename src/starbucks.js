export function contabilizarQuantidadeItens (itemEsperado,listaPedidos) {
    let quantidadeItemEsperado = 0;
    for (let i=0; i < listaPedidos.length; i++) {
        if (listaPedidos[i].nome == itemEsperado)
            quantidadeItemEsperado++;
        };
    return quantidadeItemEsperado;
};