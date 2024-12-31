function fibo(n) {
  if (n <= 1) return n;

  return fibo(n - 1) + fibo(n - 2);
}

function fiboFormula(n) {
  let outerTerm = 1 / Math.sqrt(5);

  let innerFirstTerm = ((1 + Math.sqrt(5)) / 2) ** n;
  let innerSecondTerm = ((1 - Math.sqrt(5)) / 2) ** n; //redundant on bigger number can be removed

  return Math.floor(outerTerm * innerFirstTerm);
}

console.log(fiboFormula(42));
console.log(fibo(42));
