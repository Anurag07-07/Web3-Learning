// Hashing is a process that transforms input data (of any size) into a fixed-size string of characters.
// Hash functions have several important properties:

// 1.  **Deterministic:** The same input will always produce the same output.
// 2.  **Fast computation:** The hash value can be quickly computed for any given data.
// 3.  **Pre-image resistance:** It should be computationally infeasible to reverse the hash function (i.e., find the original input given its hash output).
// 4.  **Small changes in input produce large changes in output:** Even a tiny change in the input should drastically change the hash output.
// 5.  **Collision resistance:** It should be computationally infeasible to find two different inputs that produce the same hash output.

// Hashing Algorithm is sha256
const crypto = require('crypto')
const value = "100xdevs"
const hash = crypto.createHash('sha256').update(value).digest('hex')
console.log(hash);
 
//Find The Hash That have 5 zeros in the starting

function fiveZeroes(n){
  let input = 0
  while(true){
    let inputStr = input.toString()
    let hash =  crypto.createHash('sha256').update(inputStr).digest('hex')
    if (hash.startsWith(n)) {
      return {hash,inputStr}
    }
    input++
  }
}

const ans = fiveZeroes('00000')
console.log(`The Hash is ${ans['hash']} and Input String is ${ans['inputStr']}`);

//Find The Nonce of given String in which hash have 5 zeros in starting
//String is 1000xdevs

function findNonce(params) {
  let input = 0;
  while (true) {
    let inputStr = `Anurag send => Rs 100 to Aniket`+input.toString()
    let ans = crypto.createHash('sha256').update(inputStr).digest('hex')
    if (ans.startsWith(params)) {
      return {nonce:input,hash:ans}
    }
    input++
  }
}

const ans1 = findNonce('00000')
console.log(`The Nonce is ${ans1.nonce} The Hash is ${ans1.hash}`);