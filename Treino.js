const num = -123456789
let str = num.toString()
let res = ''
let pos;

if (num > 0) {
  pos = 0
    
} else if (num < 0) {
  pos = 1
    res = '-'
    
} else console.log(0)

for (let i = str.length -1; i>=pos; i--) {
  res += str[i]
}


console.log(res)
