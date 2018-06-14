function decodeString(s) {

    // base case of empty string or when it reaches end of string
    if (!s.charAt(0)) {
        return ''
    }

    let character = s.charAt(0)

    // if the character is a number, meaning we have reached the beginning of a k[encoded_string] expression
    if(!isNaN(character)) {

        // k must be the portion of the current substring from the start to the first '['.
        let k = s.substring(0, s.indexOf("["))

        // we will need to return the entire string after the first '[' so that the function can continue after this decoding -- and any nested decodings -- are complete
        let remainder = decodeString(s.substring(s.indexOf("[") + 1))

        // once all recursive decodings are completed, the returned encoded string will be all letters from the remainder string before the first ']'
        let encoded = remainder.substring(0, remainder.indexOf(']'))

        // the decoding is completed by repeating the encoded string k times, then continuing the function on the remainder string after the first ']'
        return encoded.repeat(k) + decodeString(remainder.substring(remainder.indexOf(']')+1))
    }

    else {

        // once it reaches the first ']', it returns the rest of the string so that the next queued decoding can be run
        if (character === ']') {
            return s
        }

        // if this is a letter, it adds that to the eventual string to be returned and runs the function on the shortened substring
        else {
            return character + decodeString(s.substring(1))
        }

    }

}

console.log(decodeString('4[ab]'))
console.log(decodeString('2[b3[a]]'))
console.log(decodeString('5[g4[d]]'))
console.log(decodeString('1[2[1[c]g]f]'))
console.log(decodeString("2[a2[3[g]fe]]"))