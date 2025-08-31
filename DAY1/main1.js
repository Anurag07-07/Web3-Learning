// Hashing is a process that transforms input data (of any size) into a fixed-size string of characters.
// Hash functions have several important properties:

// 1.  **Deterministic:** The same input will always produce the same output.
// 2.  **Fast computation:** The hash value can be quickly computed for any given data.
// 3.  **Pre-image resistance:** It should be computationally infeasible to reverse the hash function (i.e., find the original input given its hash output).
// 4.  **Small changes in input produce large changes in output:** Even a tiny change in the input should drastically change the hash output.
// 5.  **Collision resistance:** It should be computationally infeasible to find two different inputs that produce the same hash output.

// Hashing Algorithm is sha256
// const crypto = require('crypto')
// const value = "Anurag"
// const hash = crypto.createHash('sha256').update(value).digest('hex')
// console.log(hash);


//Find The Hash That have 5 zeros in the starting

const crypto = require('crypto') 
function findHash(n) {
  let input = 0;
  while (true) {
    let inputStr = input.toString()
    const ans = crypto.createHash('sha256').update(inputStr).digest('hex')
    if (ans.startsWith(n)) {
      return {hash:ans,input:inputStr}
    }
    input++
  }
}

const ans2 = findHash('00000')
console.log(`The Hash is ${ans2.hash} and Input String is ${ans2.input} `);

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

const ans = findNonce('00000')
console.log(`The Nonce is ${ans.nonce} The Hash is ${ans.hash}`);