// Пример:
//      [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
// На выходе:
//      [1, 17]

const findUnion = (...arrays) => {
  if (arrays.length === 1) {
    return arrays[0];
  }

  let intersection = [];
  for (let i = 0; i < arrays.length; ) {
    if (intersection.length === 0) {
      intersection = arrays[i].filter((item) =>
        new Set(arrays[i + 1]).has(item)
      );
      i += 2;
    } else {
      intersection = intersection.filter((item) =>
        new Set(arrays[i]).has(item)
      );
      i += 1;
    }
  }

  return [...new Set(intersection)];
};

// Тесты
console.log(
  findUnion(
    [7, 17, 1, 9, 1, 17, 56, 56, 23],
    [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
  )
); // => [ 17, 1, 56, 23 ]

console.log(
  findUnion(
    [7, 17, 1, 9, 1, 17, 56, 56, 23],
    [56, 17, 17, 1, 23, 34, 23, 1, 8, 1],
    [1, 231, 3567, 2344, 17]
  )
); // => [ 17, 1 ]
