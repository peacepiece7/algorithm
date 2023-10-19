// https://www.acmicpc.net/problem/10808

#include <bits/stdc++.h>
using namespace std;
char str[101];
int arr[26];

int main() {
  cin >> str;
  for (int i = 0; i < strlen(str); i++) {
    arr[str[i] - 'a'] += 1;
  }
  for (auto i : arr) cout << i << " ";
  return 0;
}
