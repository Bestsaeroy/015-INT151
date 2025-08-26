// Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.

function checkob_arr(x) {
    if (x.length == 0 || Object.keys(x).length === 0) {
        return true
    } else {
        return false
    }
};

console.log(checkob_arr({name: "Aom", age: 20, student: true}))
console.log(checkob_arr({}))
console.log(checkob_arr([]))

// โจทย์: ระบบธนาคาร (Bank Account)
// สร้าง Object account ที่เก็บ: accountNumber, owner, balance
// Method:
// deposit(amount) → เพิ่มเงินในบัญชี
// withdraw(amount) → ถอนเงิน (ถ้าเงินพอ)
// getBalance() → แสดงยอดเงินคงเหลือ

const account = {
  accountNumber: 15,
  ower: 'Thanakorn',
  total: 0,
  
  deposit(money) {
    this.total += money
    console.log(`deposit ${money} success`)
  },

  withdraw(money) {
    if (money <= this.total) {
      this.total -= money
      console.log(`withdraw ${money} success`)
    } else {
      console.log('ยอดเงินไม่เพียงพอ')
    }
    
  },

  getTotal() {
    console.log(this.total)
  }
}

account.deposit(100000)
account.withdraw(20)
account.getTotal()













