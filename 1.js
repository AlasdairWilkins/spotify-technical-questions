function sortByStrings(s, t) {

    // create an object to track how often each letter in t appears in string s
    let letterCount = {}

    // to handle any letters that are in string s but not in string t and thus cannot be sorted by that rule, a leftover string will be appended to the sorted string
    let leftover = ''

    for (let i = 0; i < s.length; i++) {
        let letter = s.charAt(i)

        // if the letter in s is not in t, it's added to the leftover string
        if (t.indexOf(letter) < 0) {
            leftover = leftover.concat(letter)
        }

        // if the letter in s is in t, a letterCount key is created or, if it already exists, increased by 1
        else {
            letterCount[letter] = (letterCount[letter] || 0) + 1;
        }
    }

    let sorted = ''

    // iterate through t, adding each letter to the string based on its count in s
    for (let i = 0; i < t.length; i++) {
        let letter = t.charAt(i)
        if (letterCount[letter]) {
            sorted += letter.repeat(letterCount[letter])
        }
    }

    // combine sorted string and leftover letters
    return sorted + leftover

}

console.log(sortByStrings('weather', 'therapyw'))
console.log(sortByStrings('good', 'odg'))
console.log(sortByStrings('wxeazthegr', 'therapyw'))
console.log(sortByStrings('bonobo', 'on'))
console.log(sortByStrings('mississippi', 'sim'))
console.log(sortByStrings('abc', 'def'))
