// https://www.acmicpc.net/problem/2979

{
  const a = 10,
    b = 8,
    c = 6
  const v = [
    [15, 30],
    [25, 50],
    [70, 80]
  ]

  //   const a = 5,
  //     b = 3,
  //     c = 1
  //   const v = [
  //     [1, 6],
  //     [3, 5],
  //     [2, 8]
  //   ]

  //   const x = ['5 3 1', '1 6', '3 5', '2 8']
  //   const [A, B, C] = x.shift()!.split(' ').map(Number)
  //   const t = x.map((i) => i.split(' ').map(Number))

  const time: number[] = Array(100).fill(0)

  const solve = () => {
    for (let i = 0; i < v.length; i++) {
      for (let j = v[i][0]; j < v[i][1]; j++) time[j]++
    }

    console.log(
      time.reduce((acc, cur) => {
        if (cur === 1) return acc + cur * a
        if (cur === 2) return acc + cur * b
        if (cur === 3) return acc + cur * c
        return acc
      })
    )
  }

  solve()
}
