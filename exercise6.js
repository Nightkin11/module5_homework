// Задание 6
// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arr = [1,2,3,4,5,6,7,8,9];
function unique(arr) {
    return Array.from(new Set(arr))
}
console.log(JSON.stringify(arr)==JSON.stringify(unique(arr)));