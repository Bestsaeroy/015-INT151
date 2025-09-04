// Funtion Practice

// Anagram Checker
// เขียนฟังก์ชัน areAnagrams(str1, str2) ที่ตรวจสอบว่าสองคำเป็น anagram หรือไม่
// (Anagram = การสลับตัวอักษร เช่น "listen" กับ "silent")

function areAnagrams(str1, str2) {
    const format = (str => str.toLowerCase().split('').sort().join(''))
    return format(str1) === format(str2)
}
console.log(areAnagrams('heLlo','ollhe'))


// ใช้ Arrow Function ร่วมกับ .filter() เพื่อดึงเฉพาะเลขคู่จากอาร์เรย์
// ตัวอย่างการใช้งาน
// console.log(getEvenNumbers([1,2,3,4,5,6])); // [2,4,6]

function getEvenNumbers(num) {
    return num.filter(num => num % 2 == 0)
}
console.log(getEvenNumbers([1,2,3,4,5,6])); 

// ใช้ Arrow Function ร่วมกับ .map() เพื่อแปลงอาร์เรย์ของสตริงให้เป็นอาร์เรย์ของความยาว
// console.log(getLengths(["apple", "banana", "kiwi"])); // [5,6,4]
function getLengths(num) {
    return num.map(num => num.length)
}
console.log(getLengths(["apple", "banana", "kiwi"])); // [5,6,4]





