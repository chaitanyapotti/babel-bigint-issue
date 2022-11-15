// This number syntax is only supported in browsers mentioned here (https://caniuse.com/bigint) which doesn't include ios safari/safari 13 etc.
const a = 32n;

// This is especially a problem for exponentiation operator since babel transforms it to Math.pow which is incorrect for BigInt
const b = a ** 5n;
