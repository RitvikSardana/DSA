function hash1(arr, queryArray) {
  const hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (hashMap.hasOwnProperty(element)) {
      hashMap[element] += 1;
    } else {
      hashMap[element] = 1;
    }
  }

  for (let i = 0; i < queryArray.length; i++) {
    const element = queryArray[i];
    if (hashMap.hasOwnProperty(element)) {
      console.log(element, "occurs", hashMap[element], "times");
    } else {
      console.log(element, "occurs", 0, "times");
    }
    // console.log(element, hashMap[element]);
  }

  return hashMap;
}

function hashBetter(size, arr, queryArr) {
  const hashArray = new Array(size + 1).fill(0);
  for (let i = 0; i < size; i++) {
    hashArray[arr[i]] += 1;
  }

  for (let i = 0; i < queryArr.length; i++) {
    console.log(i, hashArray[queryArr[i]]);
  }
  //   console.log(hashArray);
}

function hashString() {
  const hashMap = new Array(256).fill(0);
  for (let i = 0; i < str.length; i++) {
    // ascii value of a is 97
    // ascii of i
    const element = str.charCodeAt(i);
    hashMap[element] += 1;
  }

  for (let i = 0; i < str.length; i++) {
    const element = str.charCodeAt(i);
    const letter = String.fromCharCode(element);
    console.log(letter, "occurs", hashMap[element], "times");
  }
}

const arr = [1, 2, 1, 3, 2];
const queryArr = [1, 3, 4, 2, 10];

const str = "abcdahebfa";

function hashMap(arr, cb = () => {}) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  console.log(map);
  map.forEach((v, k) => {
    // console.log(k);
    console.log(k, "occurs", v + " times");
  });
  return map;
}

function minMaxFreq(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  let minFreq = Infinity;
  let maxFreq = 0;
  let minElement = 0;
  let maxElement = 0;
  map.forEach((frequency, element) => {
    if (frequency > maxFreq) {
      maxElement = element;
      maxFreq = frequency;
    }
    if (frequency < minFreq) {
      minElement = element;
      minFreq = frequency;
    }
  });
  console.log("Max Frequency: ", "Number " + maxElement + " Occurs " + maxFreq);
  console.log("Min Frequency: ", "Number " + minElement + " Occurs " + minFreq);
}

function main() {
  // console.log(hash1(arr, queryArr));
  // hashBetter(5, arr, queryArr);
  //   hashString();
  const arr = [3, 1, 2, 3, 1, 12, 2, 12, 1, 20];
  //   hashMap(arr);
  minMaxFreq(arr);
}

main();
