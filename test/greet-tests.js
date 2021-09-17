// describe('this test' , function(){
//     it('should show you how to use MochaJS' , function(){
//         assert.equal(2,2);

//         assert.deepEqual([2,2],[2,2]);
//     });

//     it('should show you failing MochaJS test' , function(){
//         assert.equal(2,2);

//         assert.deepEqual([2,2],[2,2]);
//     });

// });

describe('The greet fuction' , function(){

    it('should return "Hello, Sbusiso" when i greet Sbusiso' , function(){
       
        assert.equal('Hello, Sbusiso', greet('Sbusiso'));

    });

    it('should return "Hello, Sbongile" when i greet Sbongile' , function(){
       
        assert.equal('Hello, Sbongile', greet('Sbongile'));

    });
});