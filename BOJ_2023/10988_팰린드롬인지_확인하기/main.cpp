#include <bits/stdc++.h>
using namespace std;
string s, rs;

int main() {
  cin >> s;
  rs = s;
  reverse(rs.begin(), rs.end());
  cout << (rs == s) << "\n";
  return 0;
}