function convertToRoman(num) {
    const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let ans = '';

    for (let i = 0; i < value.length; i++) {
        while (num >= value[i]) {
            ans += symbol[i];
            num -= value[i];
        }
    }

    return ans;
}

console.log(convertToRoman(36)); 
