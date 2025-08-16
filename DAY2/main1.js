// The Public private key is use to make wallet
// The public-private key pair is a set of two keys used in asymetric cryptography
// .These two keys have the following chracterstics
// Public Key:The public key is a string that can be shared openly
// Private key: The private key is a secret string that must be kept confidential
// Solscan is website to check the balance
// The byte is group of 8 bit to represent the single character
//Private keys and public keys is array of objects of 32 bytes
//Bit is the smallest Unit

const x = 45
console.log(x);


//Store byte in UInt Array
//If byte is greater than 255 than it will moded by 256  => 256%256 = 1 this will written in position of 256
const byteArray = new Uint8Array([45,56,255,256])
console.log(byteArray);

// Why use `Uint8Array` over `native arrays` ?

// They use less space. Every number takes 64 bits (8 bytes). But every value in a `Uint8Array` takes 1 byte.
// `Uint8Array` Enforces constraints - it makes sure every element doesn't exceed 255.

///////////////////////////////////////////////Encodings////////////////////////////////////////////////////////////////////

// Ascii Into string or string to Ascii
//Write Hello in bytes and Convert into String

function bytesToAscii(byteArray) {
  return new TextDecoder().decode(byteArray)
}

const bytes = new Uint8Array([72,101,108,108,111])
const asciiString = bytesToAscii(bytes)
console.log(asciiString);

//Convert String to Unit 8 Array

function asciiToBytes(asciiString) {
  return new Uint8Array([...asciiString].map(char=> char.charCodeAt(0)))
}

const stringValue = "Hello"
const byteArray1 = asciiToBytes(stringValue)
console.log(byteArray1);

// Hex
// 1 character = 4 bits
// A single hex character can be any of the 16 possible values 0-9 and A-F 
// ex=1111 which is equals F
// so in 1 byte which has 8 bit carries 2 character

//Base64 
//Now we take 6 bits together 
//Convert Array to base64
const uint8Array = new Uint8Array([72,101,108,108,111])
const base64Encoded = Buffer.from(uint8Array).toString('base64')
console.log(base64Encoded);

//Base58
//Base64 character minus (excluding I and 0 l O)



// # Encryption

// Encryption is the process of converting plaintext data into an unreadable format, called ciphertext, using a specific algorithm and a key. The data can be decrypted back to its original form only with the appropriate key.

// **Key Characteristics:**

// * **Reversible:** With the correct key, the ciphertext can be decrypted back to plaintext.
// * **Key-dependent:** The security of encryption relies on the secrecy of the key.
// * **Two main types:**
//     * **Symmetric encryption:** The same key is used for both encryption and decryption.
//     * **Asymmetric encryption:** Different keys are used for encryption (public key) and decryption (private key).


// https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-1 Link for slides

// Gas is a transiction fees taken by network