// Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».

const getNoun = (count, { one, some, many }) => {
  let n = Math.abs(count);
  n %= 100;
  if (count >= 5 && count <= 20) {
    return many;
  }

  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return some;
  }

  return many;
};

// Тесты
console.log(
  "25 " +
    getNoun(25, {
      one: "компьютер",
      some: "компьютера",
      many: "компьютеров",
    })
); // 25 компьютеров

console.log(
  "41 " +
    getNoun(41, {
      one: "компьютер",
      some: "компьютера",
      many: "компьютеров",
    })
); // 41 компьютер

console.log(
  "1048 " +
    getNoun(1048, {
      one: "компьютер",
      some: "компьютера",
      many: "компьютеров",
    })
); // 1048 компьютеров

console.log(
  "2 " +
    getNoun(2, {
      one: "компьютер",
      some: "компьютера",
      many: "компьютеров",
    })
); // 2 компьютера
