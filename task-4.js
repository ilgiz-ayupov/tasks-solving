const isPrimeNumber = (number) => {
  if (number === 2) {
    return true;
  }

  const limit = Math.sqrt(number);
  for (let divider = 2; divider <= limit; divider++) {
    if (number % divider === 0) {
      return false;
    }
  }

  return true;
};

// Тесты
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number) => console.log(number, isPrimeNumber(number)));
