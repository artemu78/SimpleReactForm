const str1 = 'Лом о смокинги гни, комсомол!';
const str2 = 'Леша на полке клопа нашел. ';
const str3 = 'Кони, топот, инок,';
const str4 = 'Россияне рассказали о влиянии самоизоляции на семейные отношения';

function isPalindrom(str) {
    const goodChar = chr => [' ', ',', '.', '~', '!','?'].includes(chr) ? '' : chr.toLowerCase();

    let arr = str.split('');
    const cleanArr = arr.map(goodChar);
    const cleanStr = cleanArr.join('');
    const reversedStr = cleanArr.reverse().join('');

    return cleanStr === reversedStr;
}


console.log(isPalindrom(str1), str1);
console.log(isPalindrom(str2), str2);
console.log(isPalindrom(str3), str3);
console.log(isPalindrom(str4), str4);