const palindromes = function (string) {

    const alphanumerical = "abcçdefgğhıijklmnoöprsştuüvyzqwx0123456789";

    let cleanString = string.toLowerCase().split("").filter((character) => alphanumerical.includes(character)).join("");

    let reversedString = cleanString.split("").reverse().join("");

    if (cleanString === reversedString) {
        return true;
    }

    return false;

};

// Do not edit below this line
module.exports = palindromes;
