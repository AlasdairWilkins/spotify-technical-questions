function changePossibilities(coins, target) {

    // the function starts at the target value and recursively subtracts the largest available coin to attempt to reach 0

    // if on this call the subtraction has resulted in a negative target value, this particular combination does not work
    if (target < 0) {
        return 0
    }

    // if the target is exactly 0, the combination of coins that reached that value works and so the number of working combinations is increased by 1
    if (target === 0) {
        return 1
    }

    // to remove the largest coins while keeping the original array in place, a temporary array is created by slicing what has been passed into this function call
    let combos = 0
    let coinsTemp = coins.slice(0)

    // the creation of the temporary array is necessary so that we make sure we run through the entire set of coins
    // coins will be removed from the temporary array as their combinations are exhausted
    for (let i = 0; i < coins.length; i++) {

        // this runs recursively on the largest coin in the array
        // I don't assume the coins will be in order in the array, so calling Math.max on a spread of the array gives the largest coin
        combos += changePossibilities(coinsTemp, target - Math.max(...coinsTemp))

        // once all possible combinations for the largest coin have been exhausted, it's removed and the loop runs again
        // this prevents any duplication (i.e. 1 + 3 and 3 + 1 for 4)
        coinsTemp.splice(coinsTemp.indexOf(Math.max(...coinsTemp)), 1)
    }

    return combos

}

console.log(changePossibilities([1, 2, 3], 4))
console.log(changePossibilities([1, 2, 5], 10))
console.log(changePossibilities([1, 2], 2))
console.log(changePossibilities([4, 2, 3], 8))
console.log(changePossibilities([2, 10, 6], 14))
console.log(changePossibilities([2, 4], 5))