const oddOrEven = (num) => {
    if (num === 0) return 'even'
    if (num === 1) return 'odd'
    if (num < 0) return oddOrEven(num + 2)
    if (num > 0) return oddOrEven(num - 2)
}
console.log(oddOrEven(50))
console.log(oddOrEven(75))
console.log(oddOrEven(-50))
console.log(oddOrEven(-75))