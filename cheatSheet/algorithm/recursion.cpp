#include <bits/stdc++.h>
using namespace std;

// 종료 조건이 있어야 함, 기저사례
// f(a) -> f(b) x, for로 해결되면 for
// f(a) -> f(a-1) x, 재귀로 해결되면 재귀

// * factorial
// f(n) = n * f(n-1)
int fact(int n) {
  if (n == 1 || n == 0) return 1;
  return n * fact(n - 1);
};

// * fibo
// f(n) = f(n-1) + f(n-2)
int fibo(int n) {
  if (n == 0 || n == 1) return n;
  return fibo(n - 1) + fibo(n - 2);
};

int main() { return 0; }