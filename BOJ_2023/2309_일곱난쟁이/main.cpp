// https://www.acmicpc.net/problem/2309

#include <bits/stdc++.h>
using namespace std;

int arr[9];
vector<int> answer;
void combi(int start, int n, int r, vector<int> v) {
  if (r == v.size()) {
    int sum = 0;
    for (auto i : v) sum += i;
    if (sum == 100) answer = v;
    return;
  }

  for (int i = start + 1; i < n; i++) {
    v.push_back(arr[i]);
    combi(i, n, r, v);
    v.pop_back();
  };
}

int main() {
  for (int i = 0; i < 9; i++) {
    cin >> arr[i];
  }
  vector<int> v;
  combi(-1, sizeof(arr) / sizeof(int), 7, v);
  sort(answer.begin(), answer.end());
  for (auto i : answer) cout << i << "\n";
  return 0;
}
