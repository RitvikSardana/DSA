// my approach
function countOfNumber(number) {
  let count = 0;

  while (number) {
    number = Math.floor(number / 10);
    count++;
  }

  return count;
}

// optimal approach
function countOfNumber2(number) {
  return Math.floor(Math.log10(number)) + 1;
}

function reverseANumber(number) {
  if (number === 0) return 0;

  let reverseNum = 0;

  while (number) {
    let lastDigit = number % 10;
    reverseNum = reverseNum * 10 + lastDigit;

    number = Math.floor(number / 10);
  }

  return reverseNum;
}

function isPalindrome(number) {
  if (number === 0) return 0;

  let reverseNum = 0;
  let ogNumber = number;
  while (number) {
    let lastDigit = number % 10;
    reverseNum = reverseNum * 10 + lastDigit;

    number = Math.floor(number / 10);
  }

  return reverseNum === ogNumber;
}

function HCF(n1, n2) {
  let gcd = 1;
  for (let index = 0; index < Math.min(n1, n2); index++) {
    if (n1 % index === 0 && n2 % index === 0) {
      gcd = index;
    }
  }
  return gcd;
}

function HCF2(n1, n2) {
  let gcd = 1;
  for (let index = Math.min(n1, n2); index > 0; index--) {
    if (n1 % index === 0 && n2 % index === 0) {
      return index;
    }
  }
  return gcd;
}

// HCF(a,b) = HCF(a-b,b) given that a > b
// or HCF (a,b) = HCF (a%b,b) given that a > b
function HCF3(n1, n2) {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) {
      n1 = n1 % n2;
    } else {
      n2 = n2 % n1;
    }
  }
  if (n1 === 0) return n2;
  return n1;
}

function isArmstrong(num) {
  let power = countOfNumber(num);
  let sum = 0;
  let tempNum = num;

  while (num) {
    let ld = num % 10;
    sum += ld ** power;
    num = Math.floor(num / 10);
  }
  return sum === tempNum;
}

function allDivisors(num) {
  let divisors = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

// optimal solution
//  after square root of num the divisors are just in reverse order

// Time Complexity: O(sqrt(N))
// Space Complexity : O(2*sqrt(N))where N is the input number. This approach allocates memory for an array to hold all the divisors. The size of this array could go to be 2*(sqrt(N)).
function allDivisors2(num) {
  let divisors = [];
  let sqrt = Math.sqrt(num);

  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (num / i !== i) {
        divisors.push(num / i);
      }
    }
  }
  return divisors;
}

function isPrime(num) {
  const _allDivisors = allDivisors2(num);
  return _allDivisors.length === 2 ? true : false;
}

// console.log(countOfNumber(202));
// console.log(countOfNumber2(202));
// console.log(reverseANumber(1010120));
// console.log(isPalindrome(123454321));
// console.log(HCF(24, 36));
// console.log(HCF2(24, 36));
// console.log(HCF3(24, 29));
// console.log(isArmstrong(159))
// console.log(allDivisors2(97))
console.log(isPrime(99));
