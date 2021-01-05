var expect = require('chai').expect

describe('main', function() {
    
    var arr;

    // roda uma vez ANTES do bloco
    before(function() {
        // inicia uma conexão com o banco
        // cria um conjunto de dados
    });

    // roda uma vez DEPOIS do bloco
    after(function() {
        // fecha conexão com o banco
        // destrói o conjunto de dados
    });

    // roda todas as vezes antes de CADA bloco
    beforeEach(function() {
        arr = [1, 2, 3];

    });

    // roda todas as vezes depois de CADA bloco
    afterEach(function() {
        
    });

    it('should be an array', function() {
        expect(arr).to.be.a('array');
    });

    it('shoud have a size of 4 when push another value to the array', function() {
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
    });

    it('shoud remove the value 3 when use pop in the array', function() {
        arr.pop();
        expect(arr).to.not.include(3);
    });

    it('shoud have a size of 2 when pop a value from the array', function() {
        arr.pop();
        expect(arr).to.have.lengthOf(2);
    });

});