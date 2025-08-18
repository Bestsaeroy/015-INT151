// 1. เขียนฟังก์ชันที่รับ Array ของตัวเลข แล้วคืนค่าเฉลี่ย
function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }
  return sum / arr.length; 
}

console.log(average([10, 20, 30, 40])); // 25

// 2. เขียนฟังก์ชัน findMax(arr) ที่รับ array ของตัวเลข แล้ว return ค่าที่มากที่สุด
function findMax(arr) {
  let max = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; 
    }
  }
  return max;
}

console.log(findMax([5, 12, 8, 20, 7])); // 20

// 3. เขียนฟังก์ชัน factorial(n) ที่หาค่าแฟกทอเรียล
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i; 
  }
  return result;
}

console.log(factorial(5)); // 120

// 4. เขียนฟังก์ชันที่รับ array ของคำ แล้วคืนค่า array ใหม่ที่ตัวอักษรทั้งหมดเป็นตัวพิมพ์ใหญ่
function toUppercase(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }
  return result;
}

console.log(toUppercase(["dog", "cat", "fish"])); // ["DOG", "CAT", "FISH"]

// 5.เขียนฟังก์ชัน unique(arr) ที่คืนค่า array ใหม่โดยลบค่าที่ซ้ำออก
function unique(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]); 
    }
  }
  return result;
}

console.log(unique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

