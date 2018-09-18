'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(s) {
    let arr = s.toLowerCase().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split("");
        word[0] = word[0].toUpperCase();
        arr[i] = word.join("");
    }
    return arr.join(" ");
}
//return sentence.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('hi friends!'), 'Hi Friends!')
assert.strictEqual(jadenCase('me voiCi tout mouillé je suis un nageur!'), 'Me Voici Tout Mouillé Je Suis Un Nageur!')
assert.strictEqual(jadenCase('BONNE NUIT LES PETITS !'), 'Bonne Nuit Les Petits !')
// End of tests */
