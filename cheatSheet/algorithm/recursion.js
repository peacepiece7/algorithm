// * factorial
// f(n) = n * f(n-1)
const fact = (n) => (n == 1 || n == 0  ? 1 : n*fact(n-1))

// * fibo
// f(n) = f(n-1) + f(n-2)
const fibo = (n) => (n == 1 || n == 0 ? n : fibo(n-1) + fibo(n-2))

