// Задание 8
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

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