"use strict";
function mergeSort(arr, low, high) {
  console.log(arr[low], arr[high]);
  if (low >= high) return;
  //   const mid = Math.ceil((low + high) / 2);
  const mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  console.log(low, arr[low], mid, arr[mid], high, arr[high]);
  merge(arr, low, mid, high);
  console.log(arr);
}

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low; //pointer for left array
  let right = mid + 1; //pointer for right array

  // till one of the list is exhausted
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  // check now which list is exhausted and copy the elements to temp
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function swap(index1, index2, arr) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function mergeSort2(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort2(arr, low, mid);
  mergeSort2(arr, mid + 1, high);
  sort2(arr, low, mid, high);
  console.log(arr);
}

function sort2(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  //once this is done check the exhausted list and append to temp
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}
function main() {
  //   const arr = [5, 2, 1, 2, 3, 5, 7, 8, 4];
  const arr = [3, 2, 4, 1, 3];
  //   const arr = [3, 2, 1, 5];
  const low = 0;
  const high = arr.length - 1;
  mergeSort2(arr, low, high);
}
main();
