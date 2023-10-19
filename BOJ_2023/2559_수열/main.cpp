// https://www.acmicpc.net/problem/2559

#include <bits/stdc++.h>
using namespace std;
int n, m, mx = -987654321;
int psum[100004];
int arr[100004];

int main() {
  cin >> n >> m;
  for (int i = 1; i <= n; i++) {
    cin >> arr[i];
    psum[i] = psum[i - 1] + arr[i];
  }
  for (int i = m; i <= n; i++) {
    int num = psum[i] - psum[i - m];
    mx = max(num, mx);
  }
  cout << mx << "\n";
  return 0;
}