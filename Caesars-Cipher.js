function rot13(str) {
    str = str.split("");

    for (let i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) {
            let ascii = (str[i].charCodeAt(0) - 13);
            if (ascii < 'A'.charCodeAt(0))
                ascii += 26;
            str[i] = String.fromCharCode(ascii);
        }
    }

    return str.join("");
}

console.log(rot13("SERR PBQR PNZC"));