function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
}

const arr = [1, 2, 3, 4, 5];
const k = 3;   

const rotated = rotateArray(arr, k);

console.log("Original Array:", arr);
console.log("Rotated Array:", rotated);