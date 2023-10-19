#include <bits/stdc++.h>
using namespace std;
int n;
string p;

int main() {
  cin >> n;
  cin >> p;
  string lt = p.substr(0, p.find('*'));
  string rt = p.substr(p.find("*") + 1);
  for (int i = 0; i < n; i++) {
    string text;
    cin >> text;
    if (text.size() < lt.size() + rt.size()) {
      printf("%s\n", "NE");
      continue;
    }

    string sl = text.substr(0, lt.size());
    string sr = text.substr(text.size() - rt.size());
    if (lt == sl && rt == sr) {
      printf("%s\n", "DA");
    } else {
      printf("%s\n", "NE");
    }
  }
  return 0;
}