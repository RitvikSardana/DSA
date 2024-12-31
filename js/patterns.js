// ***
// ***
// ***
function pattern1(n) {
  let starPattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      starPattern += "★";
    }
    starPattern += "\n";
  }
  return starPattern;
}

// *
// **
// ***
function pattern2(n) {
  let starPattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      starPattern += "★";
    }
    starPattern += "\n";
  }
  return starPattern;
}

// 1
// 12
// 123
function pattern3(n) {
  let starPattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i + 1; j++) {
      starPattern += j;
    }
    starPattern += "\n";
  }
  return starPattern;
}

// 1
// 22
// 333
// 4444
function pattern4(n) {
  let starPattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      starPattern += i;
    }
    starPattern += "\n";
  }

  return starPattern;
}

// ***
// **
// *
function pattern5(n) {
  let starPattern = "";
  for (let i = n; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      starPattern += "★";
    }
    starPattern += "\n";
  }
  return starPattern;
}

// 123
// 12
// 1
function pattern6(n) {
  let starPattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      starPattern += n - j + 1;
    }
    starPattern += "\n";
  }
  return starPattern;
}

//     *
//    ***
//   *****
//  *******
// *********
function pattern7(n) {
  let starPattern = "";
  for (let i = 0; i < n; i++) {
    // 3 loops needs to be used
    // fir spaces before star
    for (let j = 0; j < n - i - 1; j++) {
      starPattern += " ";
    }
    // for star
    for (let j = 0; j < 2 * i + 1; j++) {
      starPattern += "*";
    }
    // for spaces after star
    for (let j = 0; j < n - i - 1; j++) {
      starPattern += " ";
    }

    starPattern += "\n";
  }

  return starPattern;
}

// *********
//  *******
//   *****
//    ***
//     *

function pattern8(n) {
  let starPattern = "";
  for (let i = 2 * n - 1; i > 0; i = i - 2) {
    // 3 loops needs to be used
    // fir spaces before star
    for (let j = 0; j < (2 * n - i + 1) / 2; j++) {
      starPattern += " ";
    }
    // for star
    for (let j = 0; j < i; j++) {
      starPattern += "*";
    }
    // for spaces after star
    for (let j = 0; j < (2 * n - i + 1) / 2; j++) {
      starPattern += " ";
    }

    starPattern += "\n";
  }

  return starPattern;
}

function pattern9(n) {
  return pattern7(n) + pattern8(n);
}

// ★
// ★★
// ★★★
// ★★★★
// ★★★★★
// ★★★★
// ★★★
// ★★
// ★
function pattern10(n) {
  return pattern2(n) + pattern5(n - 1);
}

// 1
// 01
// 101
// 0101
// 10101
function pattern11(n) {
  let starPattern = "";
  let start = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      start = 1;
    } else {
      start = 0;
    }
    for (let j = 0; j <= i; j++) {
      starPattern += start;
      start = 1 - start;
    }
    starPattern += "\n";
  }
  return starPattern;
}

// 1      1
// 12    21
// 123  321
// 12344321
function pattern12(n) {
  let starPattern = "";
  for (let i = 0; i < n; i++) {
    // 3 loops needs to be used
    // for number
    for (let j = 1; j < i + 2; j++) {
      starPattern += j;
    }
    // for space
    for (let j = 0; j < 2 * (n - i - 1); j++) {
      starPattern += " ";
    }
    // for number in reverse
    for (let j = i + 1; j > 0; j--) {
      starPattern += j;
    }

    starPattern += "\n";
  }

  return starPattern;
}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
function pattern13(n) {
  let starPattern = "";
  let num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i + 1; j++) {
      starPattern += num + " ";
      num++;
    }
    starPattern += "\n";
  }
  return starPattern;
}

// A
// AB
// ABC
// ABCD
// ABCDE
function pattern14(n) {
  let starPattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      // String.fromCharCode(65) is 'A'
      starPattern += String.fromCharCode(65 + j);
    }
    starPattern += "\n";
  }
  return starPattern;
}

// ABCDE
// ABCD
// ABC
// AB
// A
function pattern15(n) {
  let starPattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      // starPattern += n - j + 1;
      starPattern += String.fromCharCode(64 + n - j + 1);
    }
    starPattern += "\n";
  }
  return starPattern;
}

// A
// BB
// CCC
// DDDD
// EEEEE
function pattern16(n) {
  let starPattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      starPattern += String.fromCharCode(64 + i);
    }
    starPattern += "\n";
  }

  return starPattern;
}

// *        *
// **      **
// ***    ***
// ****  ****
// **********
function pattern19_sub1(n) {
  let starPattern = "";
  for (let i = 0; i < n; i++) {
    // 3 loops needs to be used
    // for number
    for (let j = 1; j < i + 2; j++) {
      starPattern += "*";
    }
    // for space
    for (let j = 0; j < 2 * (n - i - 1); j++) {
      starPattern += " ";
    }
    // for number in reverse
    for (let j = i + 1; j > 0; j--) {
      starPattern += "*";
    }

    starPattern += "\n";
  }

  return starPattern;
}

// **********
// ****  ****
// ***    ***
// **      **
// *        *

function pattern19_sub2(n, removeFirstRow = false) {
  let starPattern = "";
  for (let i = 0; i < n; i++) {
    // 3 loops needs to be used
    if (i === 0 && removeFirstRow) {
      continue;
    }
    // for number
    for (let j = n - i; j > 0; j--) {
      starPattern += "*";
    }

    // for space
    for (let j = 2 * i; j > 0; j--) {
      starPattern += " ";
    }

    // for number in reverse
    for (let j = n - i; j > 0; j--) {
      starPattern += "*";
    }

    starPattern += "\n";
  }

  return starPattern;
}

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

function pattern19(n) {
  return pattern19_sub2(n) + pattern19_sub1(n);
}

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *
function pattern20(n) {
  return pattern19_sub1(n) + pattern19_sub2(n, true);
}

function pattern21(n) {
  let starPattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0 || i == n - 1 || j == n - 1) {
        starPattern += "*";
      }
      // if not border index, print space.
      else starPattern += " ";
    }
    starPattern += "\n";
  }

  return starPattern;
}

function pattern22(n) {
  let starPattern = "";
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      let distanceFromTop = i;
      let distanceFromBottom = 2 * n - 1 - 1 - i;
      let distanceFromLeft = j;
      let distanceFromRight = 2 * n - 1 - 1 - j;
      starPattern +=
        n -
        Math.min(
          distanceFromTop,
          distanceFromBottom,
          distanceFromLeft,
          distanceFromRight
        );
      // starPattern += n - n;
    }

    starPattern += "\n";
  }

  return starPattern;
}

// console.log(pattern1(5));
// console.log(pattern2(5));
// console.log(pattern3(5));
// console.log(pattern4(5));
// console.log(pattern5(5));
// console.log(pattern6(5));
// console.log(pattern7(5));
// console.log(pattern8(5));
// console.log(pattern9(5));
// console.log(pattern10(5));
// console.log(pattern11(5));
// console.log(pattern12(4));
// console.log(pattern13(5));
// console.log(pattern14(5));
// console.log(pattern15(5));
// console.log(pattern16(5));
// console.log(pattern17(5)); **
// console.log(pattern18(5)); **
// console.log(pattern19(5));
// console.log(pattern20(5));
// console.log(pattern21(5));
console.log(pattern22(4));
