// //Задание из вебинара
// num = +prompt('Введите возраст');
// if (num >= 0 && num <= 6) {
//         console.log('бесплатно')
//     } else if (num >= 7 && num <= 17) {
//         console.log('15 крон')
//     } else if (num >= 18 && num <= 25) {
//         student = prompt('Являетесь ли студентом?')
//         if (student == 'да') {
//             console.log('25 крон')
//         } else {
//             console.log('35 крон')
//         }
//     } else if (num >= 26 && num <= 59) {
//         console.log('35 крон')
//     } else if (num >= 60 && num <= 69) {
//         console.log('15 крон')
//     } else if (num >= 70) {
//         console.log('бесплатно')
//     } else if (num != NaN) {
//         console.log('Введите число')
//     }


// //Задание 1
// num = +prompt('Введите число');
// if (typeof num == 'number') {
//     if (num % 2 == 0) {
//         console.log(num + ' - это четное число')
//     } else if (isNaN(num)) {
//         console.log('Упс, кажется, вы ошиблись')
//     } else {
//         console.log(num + ' - это нечетное число')
//     }
// }


// //Задание 2
// let x = true;
// if (typeof x == 'number') {
//     console.log('x - число')
// } else if (typeof x == 'string') {
//     console.log('x - строка')
// } else if (typeof x == 'boolean') {
//     console.log('x - boolean')
// } else {
//     console.log('Тип x не определён')
// }


// // Задание 3
// let str = 'Hello';
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString(str))


// // Задание 4
// let random = Math.round(Math.random()*100);
// console.log(random)


// //Задание 5
// let arr = ['п', 'р', 'и', 'в', 'е', 'т', '!'];
// console.log('Количество элементов массива: ' + arr.length);
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// //Задание 6
// let arr = [1,2,3,4,5,6,7,8,9];
// function unique(arr) {
//     return Array.from(new Set(arr))
// }
// console.log(JSON.stringify(arr)==JSON.stringify(unique(arr)));

// //Задание 7
// let a = ['object'];
// let arr = [1,2,3,4,5,6,7,8,9,NaN,a,'Привет', true, false, null,0]
// let i = -1;
// do {
//     i++
//     if (typeof arr[i] == 'number') {
//         if (arr[i] == 0) {
//             console.log(arr[i] + ' - это ноль')
//         } else if (isNaN(arr[i])) {
//             console.log(arr[i] + ' - это NaN')
//         } else if (arr[i] % 2 == 0) {
//             console.log(arr[i] + ' - это четное число')
//         } else {
//             console.log(arr[i] + ' - это нечетное число')
//         }
//     }
//     if (typeof arr[i] == 'object') {
//         console.log(arr[i] + ' - это объект')
//     }
//     if (typeof arr[i] == 'string') {
//         console.log(arr[i] + ' - это строка')
//     }
//     if (typeof arr[i] == 'boolean') {
//         console.log(arr[i] + ' - это булевы значения')
//     }
// } while (i < arr.length)

//Задание 8
let myMap = new Map()
myMap.set(`1 день`, `понедельник`)
myMap.set(`2 день`, `вторник`)
myMap.set(`3 день`, `среда`)
myMap.set(`4 день`, `четверг`)
myMap.set(`5 день`, `пятница`)
myMap.set(`6 день`, `суббота`)
myMap.set(`7 день`, `воскресенье`)

for (let keys of myMap.keys()) {
    console.log(`Ключ - ${keys}, значение - ${myMap.get(keys)}`);
}