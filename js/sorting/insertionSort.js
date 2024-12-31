function insertionSort(arr) {
  const len = arr.length;
  console.log(arr);
  for (let i = 0; i <= len - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      console.log("RAN");
      swap(j - 1, j, arr);
      j--;
    }
  }
  console.log(arr);
}

const insertionSort2 = (arr) => {
  console.log(arr);
  const len = arr.length;
  for (let i = 0; i <= len - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(j - 1, j, arr);
      j--;
    }
  }
  console.log(arr);
};

function recursiveInsertionSort(arr, n) {
  if (n === arr.length) return;
  let j = n;
  // const arr = [13, 24, 46, 52, 20, 9];
  while (j > 0 && arr[j] < arr[j - 1]) {
    swap(j - 1, j, arr);
    j--;
  }
  recursiveInsertionSort(arr, n + 1);
  console.log(arr);
}

function swap(index1, index2, arr) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function main() {
  const arr = [13, 46, 24, 52, 20, 9];
  const arr2 = [1, 2, 3, 4, 5, 6];
  //   insertionSort(arr2);
  recursiveInsertionSort(arr, 0);
  //   insertionSort2(arr);
}

main();
