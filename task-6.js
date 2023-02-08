const multiplicationTable = (limit) => {
  const showRow = (row, line) => console.log(row || " ", line.join(" "));

  for (let row = 0; row <= limit; row++) {
    let line = [];
    for (let number = 1; number <= limit; number++) {
      if (row === 0) {
        line.push(number);
      } else {
        line.push(number * row);
      }
    }

    showRow(row, line);
  }
};

multiplicationTable(9);
