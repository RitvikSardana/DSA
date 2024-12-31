let cnt = 0;
function func1() {
  if (cnt === 1000) return;

  console.log(cnt);
  cnt++;

  func1();
}

// Name n times
function func2(i, n) {
  if (i > n) return;
  console.log("Raj");
  func2(i + 1, n);
}

// 1 to N (tail recursion)
// I have printed i now you do recursion dont care
function func3(i, n) {
  if (i > n) return;
  console.log(i);
  func3(i + 1, n);
}

// N to 1
function func4(i, n) {
  if (i < 1) return;
  console.log(i);
  func4(i - 1, n);
}

// 1 to N using backtracking
function func5(i, n) {
  if (i < 1) return;
  func5(i - 1, n);
  console.log(i);
}

// N to 1 using backtracking
// backtracking means last function executes first
function func6(i, n) {
  if (i > n) return;
  func6(i + 1, n);
  console.log(i);
}

// sum from 1 to N or i
function func7(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  func7(i - 1, sum + i);
}

// sum of 1 to N using functional return method
function func8(n) {
  if (n === 1) return 1;

  return n + func8(n - 1);
}

// factorial of N using functional return method
function func9(n) {
  if (n === 1) return 1;

  return n * func9(n - 1);
}

// reverse an array using recursion
function func10(i, arr, n) {
  if (i >= n / 2) return;

  p1 = i;
  p2 = n - i - 1;
  swap(arr, p1, p2);
  func10(i + 1, arr, n);

  // console.log(arr);
}

function swap(arr, p1, p2) {
  [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
}

//palindrome string using recursion
function func11(i, str) {
  let size = str.length;
  // console.log(i, size / 2, i >= size / 2);
  if (i >= size / 2) return true;

  p1 = i;
  p2 = size - i - 1;

  // console.log(p1, p2, str[p1], str[p2]);

  if (str[p1] !== str[p2]) {
    return false;
  }

  return func11(i + 1, str);
}

// fibonacci
function func12(n) {
  if (n <= 1) return n;
  return func12(n - 1) + func12(n - 2);
}

// print Hello worl n times
function func13(str, n) {
  if (n === 0) return;

  console.log(str);
  n--;
  func13(str, n);
}

// practice recursion with fibonacci
function func14(n) {
  if (n <= 1) return n;

  return func14(n - 1) + func14(n - 2);
}

//binary tree search
function func15(arr, target) {}

function main() {
  // func1();
  // func2(1, 5);
  // func3(1, 5);
  // func4(5, 5);
  // func5(5, 5);
  // func6(1, 5);
  // func6(1, 5);
  // console.log(func7(5, 0));
  // console.log(func8(4));
  // console.log(func9(4));
  //
  // const arr = [1, 2, 3, 4, 5, 6, 9];
  // func10(0, arr, arr.length);
  // console.log(arr);
  //
  // const str = "MAAADAAAM";
  // console.log(func11(0, str));
  // func12(4);
  // func13("Hello World", 5);
  // func13( 5);
  console.log(func14(5));
}

main();
