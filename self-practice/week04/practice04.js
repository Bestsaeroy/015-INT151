 // Array medthod
 // 1) จัดการข้อมูลนักเรียน
//  โจทย์:
// กรองนักเรียนที่ได้คะแนน มากกว่า 70
// คืน array แค่ชื่อของนักเรียนเหล่านั้น
// เรียงชื่อตามลำดับ A → Z

const students = [
  { name: "Alice", score: 85, subjects: ["Math", "English"] },
  { name: "Bob", score: 58, subjects: ["Math", "History"] },
  { name: "Charlie", score: 72, subjects: ["Science", "English"] },
  { name: "David", score: 90, subjects: ["Math", "Science"] }
];

const passedStudents = students.filter(s => s.score > 70).map(s => s.name).sort();                       
console.log(passedStudents);

// 2) นับจำนวนคำ (Word Frequency)
// โจทย์:
// ให้เขียนโค้ดเพื่อหาว่าแต่ละคำปรากฏกี่ครั้ง โดยใช้ reduce
// ผลลัพธ์ที่ต้องการ: { apple: 3, banana: 2, orange: 1 }

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;  
  return acc;
}, {});
console.log(wordCount);

// 3) กลุ่มนักเรียนตามเกณฑ์
// ให้จัดกลุ่มนักเรียนจาก students
// ถ้า score >= 70 → อยู่กลุ่ม "pass"
// ถ้า score < 70 → อยู่กลุ่ม "fail"
// ผลลัพธ์ต้องเป็น object แบบนี้:

const grouped = students.reduce((acc, s) => {
  if (s.score >= 70) {
    acc.pass.push(s.name);
  } else {
    acc.fail.push(s.name);
  }
  return acc;
}, { pass: [], fail: [] });

console.log(grouped);
