export function contabilizarQuantidadeCafe (listaPedidos) {
    let quantidadeDeCafes = 0;
    for (let i=0; i < listaPedidos.length; i++) {
        if (listaPedidos[i].nome == "café")
            quantidadeDeCafes++;
        };
    return quantidadeDeCafes;
};