import { contabilizarQuantidadeCafe } from '../src/starbucks.js';
import assert from 'node:assert';

describe('Testes para gestão de cafeteria', function() {
    it ('TC 01 - Ao menos 1 café na lista', function() {
        //Arrange -> Organizar ou arranjar os dados necessários para o teste

        const listaPedidos = [
            { nome: "café",  valor: 4.00 },
            { nome: "bolo de cenoura",  valor: 12.00 },
            { nome: "café com leite", valor: 5.00 }
        ];

        const retornoEsperado = 1;
        //Act -> Agir, ou seja, executar a função ou método a ser testado
        const quantidadeDeCafes = contabilizarQuantidadeCafe(listaPedidos);

        //Assert -> Afirmar, ou seja, comparar o resultado obtido com o resultado esperado
        assert.equal(quantidadeDeCafes, retornoEsperado);
    })
     it ('TC 02 - Não ter nenhum café na lista', function() {
        //Arrange -> Organizar ou arranjar os dados necessários para o teste

        const listaPedidos = [

            { nome: "bolo de cenoura",  valor: 12.00 },
            { nome: "café com leite", valor: 5.00 }
        ];

        const retornoEsperado = 0;
        //Act -> Agir, ou seja, executar a função ou método a ser testado
        const quantidadeDeCafes = contabilizarQuantidadeCafe(listaPedidos);

        //Assert -> Afirmar, ou seja, comparar o resultado obtido com o resultado esperado
        assert.equal(quantidadeDeCafes, retornoEsperado);
    })
     it ('TC 03 - Ter 2 ou mais cafés na lista', function() {
        //Arrange -> Organizar ou arranjar os dados necessários para o teste

        const listaPedidos = [
            { nome: "café",  valor: 4.00 },
            { nome: "bolo de cenoura",  valor: 12.00 },
            { nome: "café com leite", valor: 5.00 },
            { nome: "café",  valor: 4.00 }
        ];

        const retornoEsperado = 2;
        //Act -> Agir, ou seja, executar a função ou método a ser testado
        const quantidadeDeCafes = contabilizarQuantidadeCafe(listaPedidos);

        //Assert -> Afirmar, ou seja, comparar o resultado obtido com o resultado esperado
        assert.equal(quantidadeDeCafes, retornoEsperado);
    })

});