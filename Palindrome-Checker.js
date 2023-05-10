function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let a = str.split("").reverse().join("");

    return a == str;
}
console.log("asd");
palindrome("asd.a.dsad");