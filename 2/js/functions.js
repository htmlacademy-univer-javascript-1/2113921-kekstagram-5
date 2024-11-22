// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает
// true, если строка меньше или равна указанной длине, и false, если строка длиннее.

function lengthString (str, maxLength) {
  return str.length <= maxLength;
}

lengthString('проверяемая строка', 20);
// console.log(lengthString('проверяемая строка', 20));
// console.log(lengthString('проверяемая строка', 18));
// console.log(lengthString('проверяемая строка', 10));


// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза,
// которые одинаково читаются и слева направо и справа налево.

function palindrom (str) {
  const lowerCaseStr = str.toLowerCase().replaceAll(' ', '');
  return lowerCaseStr === lowerCaseStr.split('').reverse().join('');
}

palindrom('топот');
// console.log(palindrom('топот'));
// console.log(palindrom('ДовОд'));
// console.log(palindrom('Кекс'));
// console.log(palindrom('Лёша на полке клопа нашёл '));


// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в
// виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN

function extractNumber(str) {
  const number = str.replace(/[^0-9]/g, '');
  return number ? parseInt(number, 10) : NaN;
}

extractNumber('2023 год');
// console.log(extractNumber('2023 год'));
// console.log(extractNumber('ECMAScript 2022'));
// console.log(extractNumber('1 кефир, 0.5 батона'));
// console.log(extractNumber('агент 007'));
// console.log(extractNumber('а я томат'));
// console.log(extractNumber('2023'));
// console.log(extractNumber('-1'));
// console.log(extractNumber('1.5'));
