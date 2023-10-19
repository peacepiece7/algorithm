#include <bits/stdc++.h>
using namespace std;
int psum[100004], a[100004], n, m, b, c;

// * 정적 구간 쿼리 문제, 누적합
int main() {
  cin >> n >> m;
  for (int i = 1; i < n; i++) {
    cin >> a[i];
    psum[i] = psum[i - 1] + a[i];
  };

  for (int i = 0; i < m; i++) {
    cin >> b >> c;
    cout << psum[c] - psum[b] << "\n";
  }
  return 0;
}