const argsEmptyCheck = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
};

const argsLengthCheck = (numbers) => {
  if (numbers.length > 30) {
    throw new Error("Aruguments are 30 or less.");
  }
};

const argsTypeCheck = (numbers) => {
  if (numbers.some((number) => typeof number !== "number")) {
    throw new Error("Aruguments should be numbers.");
  }
};

export const add = (numbers) => {
  if (argsEmptyCheck(numbers) === 0) return 0;
  argsLengthCheck(numbers);
  argsTypeCheck(numbers);

  const result = numbers.reduce((augend, addend) => augend + addend);

  if (result > 1000) {
    return "too big";
  }

  return result;
};

export const multiply = (numbers) => {
  if (argsEmptyCheck(numbers) === 0) return 0;
  argsLengthCheck(numbers);
  argsTypeCheck(numbers);

  const result = numbers.reduce(
    (multiplier, multiplicand) => multiplier * multiplicand
  );

  if (result > 1000) {
    return "big big number";
  }

  return result;
};

export const subtract = (numbers) => {
  if (argsEmptyCheck(numbers) === 0) return 0;
  argsLengthCheck(numbers);
  argsTypeCheck(numbers);

  const result = numbers.reduce((minuend, subtrahend) => minuend - subtrahend);

  if (result < 0) {
    return "negative number";
  }

  return result;
};

export const divide = (numbers) => {
  if (argsEmptyCheck(numbers) === 0) return 0;
  argsLengthCheck(numbers);
  argsTypeCheck(numbers);

  const result = numbers.reduce((dividend, devisor) => dividend / devisor);

  if (result === Infinity) {
    throw new Error("Devisor should be greater than 0.");
  }

  return Math.floor(result);
};
