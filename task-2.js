// 27 => 25, 27.8 => 30, 41.7 => 40.

const calculationBottomRounding = (number) => {
  const result = Math.floor(number * 0.1) * 10;
  const steps = Math.abs(number - result);

  return { result, steps };
};

const calculationMiddleRounding = (number) => {
  const result = Math.floor(number * 0.1) * 10 + 5;
  const steps = Math.abs(number - result);

  return { result, steps };
};

const calculationTopRounding = (number) => {
  const result = Math.ceil(number * 0.1) * 10;
  const steps = Math.abs(number - result);

  return { result, steps };
};

const roundNumber = (number) => {
  const roundingResult = [
    calculationBottomRounding(number),
    calculationMiddleRounding(number),
    calculationTopRounding(number),
  ];

  const findMinStep = Math.min(
    ...roundingResult.map((rounding) => rounding.steps)
  );

  const findIndex = roundingResult.findIndex(
    (rounding) => rounding.steps === findMinStep
  );

  return roundingResult[findIndex].result;
};

console.log(roundNumber(27)); // => 25
console.log(roundNumber(27.8)); // => 30
console.log(roundNumber(41.7)); // => 40
