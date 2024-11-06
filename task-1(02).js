
/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и знаки, например null и так далее.
На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, 
вызовите функцию, проанализируйте синтаксис.*/

function countElements(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    arr.forEach(function countValue(elem) {
        if (typeof elem === 'number') {
            if (elem === 0) {
                zeroCount++;
            } else if (elem % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    });

    console.log(`Чётных элементов: ${evenCount}`);
    console.log(`Нечётных элементов: ${oddCount}`);
    console.log(`Нулевых элементов: ${zeroCount}`);
}
let array = [1, 7, 13, 0, null, 6, 8];
countElements(array);