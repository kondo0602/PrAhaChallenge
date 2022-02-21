export const add = (numbers) => {
	if (numbers.length === 0) {
		return 0;
	} else if (numbers.length > 30) {
		throw new Error("Aruguments are 30 or less.");
	}

	if (numbers.some((number) => typeof number !== "number")) {
		throw new Error("Aruguments should be numbers.");
	}

	const result = numbers.reduce((augend, addend) => augend + addend);

	if (result > 1000) {
		return "too big";
	}

	return result;
};

export const multiply = (numbers) => {
	if (numbers.length === 0) {
		return 0;
	} else if (numbers.length > 30) {
		throw new Error("Aruguments are 30 or less.");
	}

	if (numbers.some((number) => typeof number !== "number")) {
		throw new Error("Aruguments should be numbers.");
	}

	const result = numbers.reduce(
		(multiplier, multiplicand) => multiplier * multiplicand
	);

	if (result > 1000) {
		return "big big number";
	}

	return result;
};

export const subtract = (numbers) => {
	if (numbers.length === 0) {
		return 0;
	} else if (numbers.length > 30) {
		throw new Error("Aruguments are 30 or less.");
	}

	if (numbers.some((number) => typeof number !== "number")) {
		throw new Error("Aruguments should be numbers.");
	}

	const result = numbers.reduce((minuend, subtrahend) => minuend - subtrahend);

	if (result < 0) {
		return "negative number";
	}

	return result;
};
