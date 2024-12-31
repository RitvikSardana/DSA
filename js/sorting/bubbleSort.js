function bubbleSort(arr) {
  console.log(arr);
  const n = arr.length;
  // looping from last element to first
  for (let i = n - 1; i >= 1; i--) {
    let didSwap = false;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        // if in the first loop swap did not occur, it means that the array is in ascending order best case so O(N) else O(N^2)
        didSwap = true;
      }
    }
    if (!didSwap) break;
    console.log("RAN");
  }
  console.log(arr);
}

const bubbleSort2 = (arr) => {
  console.log(arr);
  const len = arr.length;
  for (let i = len - 1; i >= 1; i--) {
    let didSwap = false;
    // i-1 coz j+1 we wont find for (j<= i)
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        didSwap = true;
      }
    }
    if (!didSwap) break;
  }
  console.log(arr);
};

function recursiveBubbleSort(arr, start) {
  if (start === 1) return;

  let didSwap = false;
  for (let j = 0; j <= start - 2; j++) {
    if (arr[j] > arr[j + 1]) {
      didSwap = true;
      swap(j, j + 1, arr);
    }
  }
  if (!didSwap) return;
  recursiveBubbleSort(arr, start - 1);
  console.log(arr);
}

function swap(index1, index2, arr) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function main() {
  const arr = [13, 46, 24, 52, 20, 9];
  const arr2 = [1, 2, 3, 4, 5, 6];
  const len = arr.length;
  recursiveBubbleSort(arr, len);
}

main();
