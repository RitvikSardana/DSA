function mySort(arr) {
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(i, j, arr);
      }
    }
  }
  console.log(arr);
}

// find min swap, then increment count
function selectionSort(arr) {
  console.log(arr);
  const length = arr.length;
  // -2 coz we swapping till second last element
  for (let i = 0; i <= length - 2; i++) {
    let min = i;
    // looping till last element
    for (j = i; j <= length - 1; j++) {
      if (arr[j] < arr[i]) {
        min = j;
      }
    }
    swap(i, min, arr);
  }

  console.log(arr);
}

function swap(index1, index2, arr) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function main() {
  const arr = [13, 46, 8, 24, 52, 20, 9];
  const arr2 = [1, 2, 3, 4, 5, 6];
  // mySort(arr);
  // selectionSort(arr);
}

main();
