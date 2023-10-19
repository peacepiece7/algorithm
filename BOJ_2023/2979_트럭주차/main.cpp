// https://www.acmicpc.net/problem/2979

#include <bits/stdc++.h>
using namespace std;
int t[100], a, b, c, x, y;

int main() {
  cin >> a >> b >> c;

  for (int i = 0; i < 3; i++) {
    cin >> x >> y;
    for (; x < y; x++) t[x]++;
  }
  int cost = 0;
  for (int i = 0; i < sizeof(t) / sizeof(int); i++) {
    if (t[i] == 1) cost += a;
    if (t[i] == 2) cost += (b * 2);
    if (t[i] == 3) cost += (c * 3);
  }
  cout << cost << "\n";
  return 0;
}
