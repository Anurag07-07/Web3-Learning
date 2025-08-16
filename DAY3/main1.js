let str = 'h'
const binaryRepresentation = new TextEncoder().encode('h')
console.log(binaryRepresentation);


let name = 'anurag'
const binaryRepresentation1 = new TextEncoder().encode(name)
console.log(binaryRepresentation1);


//In ascii every character represented by 7 bits
//In base64 every character represented by 6 bits
//In base58 every character represented by 6 bits
//In hex every character represented by 4 bits and actually the each char is of 8 bits means h convert to binary we get something like 11010101 now as hex has 4 bits char its means we can make make 2 char using 8 bits so that how conversion is working 

//Convert byte Array into string

function arrayToHex(byteArray) {
  let hexstring = ''
  for (let i = 0; i < byteArray,length; i++) {
    hexstring+=byteArray[i].toString(16).padStart(2,'0')
    //toString(16) convert the char into hexadecimal representation 
    //ad padstart represent that convert byte into atleast 2 char or 2 length and if it not form 22 char than we pad with 0. like suppose char convert and i got c which is single char of 4 bits so pad 0 in front 0c to get 2 char
  }
  return hexstring
}

const byteArray = new Uint8Array([72,101,108,108,111])
const hexstring = arrayToHex(byteArray)
console.log(hexstring);

const bs58 = require('bs58')

function Uint8ArrayToBase58(uint8Array) {
  return bs58.encode(uint8Array)
}

const byteArray1 = new Uint8Array([72,101,108,108,111])
const base58String = Uint8ArrayToBase58(byteArray)
console.log(base58String);


// Asymmetric Encryption

// Asymmetric encryption, also known as public-key cryptography, is a type of encryption that uses a pair of keys: a public key and a private key. The keys are mathematically related, but it is computationally infeasible to derive the private key from the public key.

// Public Key: The public key is a string that can be shared openly.

// Private Key: The private key is a secret cryptographic code that must be kept confidential. It is used to decrypt data encrypted with the corresponding public key or to create digital signatures.

// Common Asymmetric Encryption Algorithms:

// RSA - Rivest–Shamir–Adleman

// ECC - Elliptic Curve Cryptography (ECDSA) - ETH and BTC

// EdDSA - Edwards-curve Digital Signature Algorithm - SOL

// hashing has 2 algorithm mostly sha256 md5


// Comman eliptic curves

// 1.secp256k1 = BTC and ETH
// 2.ed25519 = SOL

// Few use cases of public key cryptography -
// SSL/TLS certificates
// SSH keys to connect to servers/push to github
// Blockchains and cryptocurrencies


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Create a public-private keypair
// Step1 = Create a public-private key
// Step2 = Define the message to sign
// Step3 = Convert message to UInt8Array
// Step4 = Sign the message using the private key
// Step5 = Verify the message using the public key


///Using EdDSA
//Using @noble/ed25519
//Using @solana/web3.js

//ECDSA
//Using @noble/secp256k1
//Using ethers