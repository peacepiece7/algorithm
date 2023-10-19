// https://www.acmicpc.net/problem/9375
{
  const input = [
    '2',
    '3',
    'hat headgear',
    'sunglasses eyewear',
    'turban headgear',
    '3',
    'mask face',
    'sunglasses face',
    'makeup face'
  ]

  function solve(input: string[]) {
    const c = Number(input.shift())
    for (let i = 0; i < c; i++) {
      const mp = new Map<string, number>()
      const n = Number(input.shift())
      let sum = 1
      for (let j = 0; j < n; j++) {
        const [val, key] = input.shift()?.split(' ')!
        if (mp.has(key)) mp.set(key, mp.get(key)! + 1)
        else mp.set(key, 1)
      }
      for (let [key, value] of mp) {
        sum *= value + 1
      }
      console.log(sum - 1)
    }
  }
  solve(input)
}
