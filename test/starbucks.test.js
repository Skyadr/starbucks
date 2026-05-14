import { contabilizarQuantidadeItens } from '../src/starbucks.js';
import assert from 'node:assert';

describe('Testes para gestão de cafeteria', function() {
    it ('TC 01 - Ao menos 1 café na lista', function() {
        //Arrange -> Organizar ou arranjar os dados necessários para o teste

        const listaPedidos = [
            { nome: "café",  valor: 4.00 },
            { nome: "bolo de cenoura",  valor: 12.00 },
            { nome: "café com leite", valor: 5.00 }
        ];
        const itemPesquisado = "café";
        const retornoEsperado = 1;
        //Act -> Agir, ou seja, executar a função ou método a ser testado
        
        const quantidadeItemEsperado = contabilizarQuantidadeItens(itemPesquisado, listaPedidos);

        //Assert -> Afirmar, ou seja, comparar o resultado obtido com o resultado esperado
        assert.equal(quantidadeItemEsperado, retornoEsperado);
    })
     it ('TC 02 - Não ter nenhum café na lista', function() {
        //Arrange -> Organizar ou arranjar os dados necessários para o teste

        const listaPedidos = [

            { nome: "bolo de cenoura",  valor: 12.00 },
            { nome: "café com leite", valor: 5.00 }
        ];
        const itemPesquisado = "café";
        const retornoEsperado = 0;
        //Act -> Agir, ou seja, executar a função ou método a ser testado
        const quantidadeItemEsperado = contabilizarQuantidadeItens(itemPesquisado, listaPedidos);

        //Assert -> Afirmar, ou seja, comparar o resultado obtido com o resultado esperado
        assert.equal(quantidadeItemEsperado, retornoEsperado);
    })
     it ('TC 03 - Ter 2 ou mais cafés na lista', function() {
        //Arrange -> Organizar ou arranjar os dados necessários para o teste

        const listaPedidos = [
            { nome: "café",  valor: 4.00 },
            { nome: "bolo de cenoura",  valor: 12.00 },
            { nome: "café com leite", valor: 5.00 },
            { nome: "café",  valor: 4.00 }
        ];
        const itemPesquisado = "café";
        const retornoEsperado = 2;
        //Act -> Agir, ou seja, executar a função ou método a ser testado
        const quantidadeItemEsperado = contabilizarQuantidadeItens(itemPesquisado, listaPedidos);

        //Assert -> Afirmar, ou seja, comparar o resultado obtido com o resultado esperado
        assert.equal(quantidadeItemEsperado, retornoEsperado);
    })
    it ('TC 04 - Retornar uma lista de pedidos vazia', function() {
        //Arrange -> Organizar ou arranjar os dados necessários para o teste

        const listaPedidos = [];
        const itemPesquisado = "café";
        const retornoEsperado = 0;
        //Act -> Agir, ou seja, executar a função ou método a ser testado
        const quantidadeItemEsperado = contabilizarQuantidadeItens(itemPesquisado, listaPedidos);

        //Assert -> Afirmar, ou seja, comparar o resultado obtido com o resultado esperado
        assert.equal(quantidadeItemEsperado, retornoEsperado);
    })
    it ('TC 05 - Filtrar por um item específico da lista', function() {
        //Arrange -> Organizar ou arranjar os dados necessários para o teste

        const listaPedidos = [
            { nome: "café",  valor: 4.00 },
            { nome: "bolo de cenoura",  valor: 12.00 },
            { nome: "café com leite", valor: 5.00 },
            { nome: "café",  valor: 4.00 }
        ];
        const itemPesquisado = "bolo de cenoura";
        const retornoEsperado = 1;
        //Act -> Agir, ou seja, executar a função ou método a ser testado
        const quantidadeItemEsperado = contabilizarQuantidadeItens(itemPesquisado, listaPedidos);

        //Assert -> Afirmar, ou seja, comparar o resultado obtido com o resultado esperado
        assert.equal(quantidadeItemEsperado, retornoEsperado);
    })
});