
/* Напишите функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.*/
function createAdder(x) {
    return function(y) {
        return x + y; // Возвращает сумму x и y
    };
}

const addNum = createAdder(5); // Создаём функцию, которая добавляет 5 
const result = addNum(10); // Вызываем возвращённую функцию с аргументом 10
console.log(result); 