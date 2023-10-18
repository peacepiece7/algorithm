#include <bits/stdc++.h>
using namespace std;

int a;
int b;
double c;
string s;
string bufferflush;
int T;

int main() {
  // * scanf, printf
  // c : char
  // d : int
  // s : string
  // lf : double
  // ld : long long

  // * Number
  // 2.11
  scanf("%d.%d", &a, &b);
  scanf("%lf", &c);
  scanf("%d %d", &a, &b);

  // * String
  // 한 줄 입력
  getline(cin, s);  // 양영주 바보\n
  cin >> a >> b;    // 양영주 바보 || 양영주\n 바보

  // n줄의 문자 입력
  cin >> T;
  for (int i = 0; i < T; i++) {
    getline(cin, s);
    printf("%s\n", s);
  }

  return 0;
}
