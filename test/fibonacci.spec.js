// WINNIE NASSOZI
// BAKER SENTAMU

const Fibonacci = require('../fibonacci');
const chai = require('chai');
const { assert } = require('chai');

describe('Fibonacci', () => {
    
    describe('test the VALID return values of the Fibonacci method', () => {
        let fib;
        beforeEach(() => {
            fib = new Fibonacci();
        });
        it('should return 0', () => {
           assert.equal(fib.fibonacci(0), 0);
        });
        it('should return 1', () => {
            assert.equal(fib.fibonacci(1), 1);
        });
        it('should return 1', () => {
            assert.equal(fib.fibonacci(2), 1);
        });
        it('should return 2', () => {
            assert.equal(fib.fibonacci(3), 2);
        });
    });
});
