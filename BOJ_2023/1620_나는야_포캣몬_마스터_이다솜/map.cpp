// https://www.acmicpc.net/problem/1620
// https://www.acmicpc.net/submit/1620/51249264

#include <bits/stdc++.h>
using namespace std;
map<string, int> nmap;
map<int, string> imap;
int n, m;
string str;

int main() {
  cin >> n >> m;
  for (int i = 1; i <= n; i++) {
    cin >> str;
    nmap[str] = i;
    imap[i] = str;
  }

  for (int i = 0; i < m; i++) {
    cin >> str;
    if (atoi(str.c_str())) {
      cout << imap[atoi(str.c_str())] << "\n";
    } else {
      cout << nmap[str] << "\n";
    }
  }
  return 0;
}