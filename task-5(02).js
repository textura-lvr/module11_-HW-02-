/* Написать функцию, которая принимает два натуральных числа x и n 
и возвращает x в степени n.*/

const power = (x, n) => {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
};

