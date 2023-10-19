// * FS 모듈 활용
const fs = require('fs')
// CASE : 한 글자 입력받기
let input = fs.readFileSync('/div/stdin').toString().trim()
let word = input

// CASE : 공백 기준 여러 글자 (한 줄) 입력
input = fs.readFileSync('/dev/stdin').toString().split(' ')

// CASE : 여러 줄 입력받기
input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// CASE : 첫 줄에 자연수 n, 다음 줄 공백으로 구분된 여러 값
let [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split(/\s/)

// * readline 모듈 활용
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// CASE : 한 줄
rl.on('line', function (line) {
  console.log(line)
  rl.close()
}).on('close', function () {
  process.exit()
})

// CASE : 여러 줄
const test = []
rl.on('line', function (line) {
  test.push(line)
  // ctrl + d
}).on('close', function () {
  console.log(test)
  process.exit()
})
