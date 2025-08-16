///Using EdDSA
//Using @noble/ed25519
/*
import * as ed from '@noble/ed25519'
async function main() {
  //Generate a secure random private key
  const privKey = ed.utils.randomPrivateKey()

  //Convert the message "hello world" to the Uint8Array
  const message = new TextEncoder().encode("hello world")

  //Generate a public key from the private key
  const pubKey = await ed.getPublicKeyAsync(privKey)

  //Sign the message
  const signature = await ed.signAsync(message,privKey)

  //Verify the signature
  const isValid = await ed.verifyAsync(signature,message,pubKey)

  //Output of the result
  console.log(isValid);
}

main()

*/

// As a user we sign a message or encrypt or decrypt the message / The miner hash the message

// Here's the information from the image, formatted as text:

// ## How do transactions work on the blockchain?

// Ref - [https://andersbrownworth.com/blockchain/](https://andersbrownworth.com/blockchain/)

// User side

// 1.  User first creates a **public/private** keypair
// 2.  They create a **transaction** that they want to do (send Rs 50 to Alice). The transaction includes all necessary details like the recipient's address, the amount and some blockchain specific parameters (for eg - latestBlockHash in case of solana)
// 3.  They hash the **transaction**
// 4.  They **sign** the transaction using their private key
// 5.  They send the **raw transaction**, **signature**, and their **public key** to a node on the blockchain.

// Miner

// 1.  Hashes the original message to generate a **hash**
// 2.  Verifies the **signature** using the users **public key** and the **hash** generated in step 1
// 3.  Transaction validation - The miner/validator checks additional aspects of the transaction, such as ensuring the user has sufficient funds
// 4.  If everything checks out, adds the transaction to the block

//Using @solana/web3.js
/*
import {Keypair} from '@solana/web3.js'
import nacl from 'tweetnacl'

//Generate a new keypair
const keypair = Keypair.generate() //Keypair is a class and generate function is static

//Extract the public and private keys
const publicKey = keypair.publicKey.toString();
const privKey = keypair.secretKey

//Display the Key
console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privKey}`);

//Convert the message "hello World" to uint8array
const message = new TextEncoder().encode("Hello World")

//Create a signature
const signature = nacl.sign.detached(message,privKey)

//Verify the signature
const result = nacl.sign.detached.verify(message,signature,keypair.publicKey.toBytes())

console.log(result)
*/

//ECDSA
//Using @noble/secp256k1
/*
import * as secp from "@noble/secp256k1";

async function main() {
  const privKey = secp.utils.randomPrivateKey(); // Secure random private key
  // sha256 of 'hello world'
  const msgHash =
    "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9";
  const pubKey = secp.getPublicKey(privKey);
  const signature = await secp.signAsync(msgHash, privKey); // Sync methods below
  const isValid = secp.verify(signature, msgHash, pubKey);
  console.log(isValid);
}

main();
*/
//Using ethers
/*
import {ethers} from 'ethers'

//Generate a randowm wallet
const wallet = ethers.Wallet.createRandom()

//Extract the public and private key
const publicKey = wallet.address
const privateKey = wallet.privateKey

//Meessage to sign
const message = 'hello World'

//Sign the message using the wallet's private key
const signature = await wallet.signMessage(message)

//Verify the Signature
const recoverAddress =  ethers.verifyMessage(message,signature)

console.log("Recovered Address: ",recoverAddress);
console.log("Signature is valid: ",recoverAddress === publicKey);
*/

// HD WALLET
//  import {generateMnemonic,mnemonicToSeedSync,validateMnemonic} from 'bip39'

//Generate Mnemonic
//  const words = generateMnemonic(128) //Print 12 words
//  console.log(words);

//Generate root Seed
//  const seed = mnemonicToSeedSync(words) 

//  or
//  const words1 = generateMnemonic(256) //Print 24 words
//  console.log(words1);

/*

Derivation paths specify a systematic way to derive various keys from the master seed.
They allow users to recreate the same set of addresses and private keys from the seed across different wallets, ensuring interoperability and consistency. (for example if you ever want to port from Phantom to Backpack)
A derivation path is typically expressed in a format like m / purpose' / coin_type' / account' / change / address_index.
m: Refers to the master node, or the root of the HD wallet.
purpose: A constant that defines the purpose of the wallet (e.g., 44' for BIP44, which is a standard for HD wallets).
coin_type: Indicates the type of cryptocurrency (e.g., 0' for Bitcoin, 60' for Ethereum, 501' for solana).
account: Specifies the account number (e.g., 0' for the first account).
change: This is either 0 or 1, where 0 typically represents external addresses (receiving addresses), and 1 represents internal addresses (change addresses).
address_index: A sequential index to generate multiple addresses under the same account and change path.


*/
//Code to generate 4 public private keypair 
// import nacl from 'tweetnacl'
// import {generateMnemonic,mnemonicToSeedSync,validateMnemonic} from 'bip39'
// import {derivePath} from 'ed25519-hd-key'
// import {Keypair} from '@solana/web3.js'
// import bs58 from 'bs58'; // Import the bs58 library

// const mnemonic = generateMnemonic()
// const seed = mnemonicToSeedSync(mnemonic)

// for (let i = 0; i < 4; i++) {
//   const path = `m/44'/501'/${i}'/0'`; //This is the derivation path //Here i is the wallet index
//   const derivedSeed = derivePath(path, seed.toString('hex')).key;
//   const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

//   // Create a Keypair object from the secret key
//   const keypair = Keypair.fromSecretKey(secret);

//   console.log(`--- Wallet Index: ${i} ---`);
//   console.log(`Secret Key (Uint8Array): `, secret); // This is the raw Uint8Array
//   console.log(`Secret Key (Base58 encoded - often used for private keys): `, keypair.secretKey.toString('base58')); // Solana's Keypair.secretKey is a Uint8Array, but toString('base58') will encode it
//   console.log(`Public Key (Base58): `, keypair.publicKey.toBase58());
//   console.log('\n'); // Add a newline for better readability between iterations
// }


/////////////////////////////////////Get Private key in form of string/////////////////////////////////
import { Keypair } from '@solana/web3.js';
import nacl from 'tweetnacl';
import { derivePath } from 'ed25519-hd-key';
import bs58 from 'bs58'; // Import the bs58 library

// Assume 'seed' is your 32-byte seed (Buffer or Uint8Array)
// For example:
const seed = Buffer.from('YOUR_32_BYTE_SEED_HEX_STRING_HERE_MAKE_SURE_ITS_32_BYTES_LONG', 'hex'); // REPLACE THIS WITH YOUR ACTUAL SEED

for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`; // This is the derivation path //Here i is the wallet index
  const derivedSeed = derivePath(path, seed.toString('hex')).key;
  const secretKeyUint8Array = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey; // This is the 64-byte Uint8Array (private + public)

  // Create a Keypair object from the secret key Uint8Array
  const keypair = Keypair.fromSecretKey(secretKeyUint8Array);

  console.log(`--- Wallet Index: ${i} ---`);

  // Print the secret key as a Base58 string
  console.log(`Secret Key (Base58 encoded): `, bs58.encode(secretKeyUint8Array));

  // Print the public key as a Base58 string
  console.log(`Public Key (Base58): `, keypair.publicKey.toBase58());
  console.log('\n'); // Add a newline for better readability between iterations
}


/*

Explanation:

import bs58 from 'bs58';: This line imports the necessary library.

bs58.encode(secretKeyUint8Array): This function takes your Uint8Array (the secretKey which is 64 bytes) and encodes it into a Base58 string. This is the common string representation you'd use if you were, for example, importing a private key into a Solana wallet.

This will give you the private key in the string format commonly used in the Solana ecosystem.

*/