export const findPrimeNumber = (numberValue) => {
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  let currentPosition = 2;
  let foundPrimes = 0;

  while (foundPrimes < numberValue + 2) {
    if (isPrime(currentPosition)) foundPrimes++;
    currentPosition++;
  }
  return currentPosition - 1;
};

export const findTriangularNumber = (numberValue) => {
    const newNumber = numberValue - 2;
    const result = newNumber*(newNumber + 1 ) / 2
    return result;
    }

export const findFibonacciNumber = (numberValue) => {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= numberValue; i++) {
    const total = a + b;
    a = b;
    b = total;
  }
  return b;
};
