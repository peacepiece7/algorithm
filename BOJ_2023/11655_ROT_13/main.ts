{
  const input = 'Baekjoon Online Judge'

  function rot13(char: string) {
    const ascii = char.charCodeAt(0)
    if (ascii >= 97 && ascii <= 122) {
      if (ascii + 13 > 122) {
        return String.fromCharCode(122 - ascii + 13 + 96)
      }
      return String.fromCharCode(ascii + 13)
    } else if (ascii >= 65 && ascii <= 97) {
      if (ascii + 13 > 97) {
        return String.fromCharCode(97 - ascii + 13 + 64)
      }
      return String.fromCharCode(ascii + 13)
    }
    return char
  }

  function solve(input: string) {
    let answer = ''
    input.split('').forEach((char) => {
      const ascii = char.charCodeAt(0)
      if (ascii >= 97 && ascii <= 122) {
        if (ascii + 13 > 122) {
          answer += String.fromCharCode(122 - ascii + 13 + 96)
        } else {
          answer += String.fromCharCode(ascii + 13)
        }
      } else if (ascii >= 65 && ascii <= 97) {
        if (ascii + 13 > 97) {
          answer += String.fromCharCode(97 - ascii + 13 + 64)
        } else {
          answer += String.fromCharCode(ascii + 13)
        }
      } else {
        answer += char
      }
    })
    console.log(answer)
  }
  solve(input)
}
