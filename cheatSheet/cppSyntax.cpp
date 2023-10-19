// syntax for algorithm

#include <bits/stdc++.h>
// using namespace std;
// #pragma warning(disable : 4996)

int main() {
  // * Input
  printf("%s\n", "Input : ");
  // std::cout << std::fixed;
  // std::cout.precision(3); 소수점 3자리 고정
  // * Char
  char str1[] = "foo";
  char str2[] = "1.1";
  char str3[] = "1.23";

  printf("%d %f\n", atoi(str2), atof(str3));                  // 1 1.230000
  std::cout << atoi(str2) << " " << atof(str3) << std::endl;  // 1 1.23
  strcmp(str1, str2);                                         // 1
  strcmp(str1, str1);                                         // 0
  strlen(str1);                                               // 3
  std::reverse(str1, str1 + strlen(str1));                    // oof

  // * ASCII
  char a = 'a';
  char z = 'z';
  char A = 'A';
  char Z = 'Z';
  (int)a;  // 97
  (int)z;  // 122
  (int)A;  // 65
  (int)Z;  // 90

  (int)a - 97;  // 0
  (int)z - 97;  // 25

  // * String
  std::string str4("abc");
  std::string str5 = "def";
  str4.find("d");
  str4.pop_back();
  str4.push_back('d');
  str4.length();
  str5.size();
  str4.substr(1, 2);                   // bc
  str4.erase(1, 2);                    // a
  strcmp(str4.c_str(), str5.c_str());  // -1
  str4.compare(str4);                  // 0

  // 123 1
  printf("%d %d\n", std::to_string(123).c_str(), std::to_string(true).c_str());
  std::cout << std::to_string(123) << " " << std::to_string(true) << std::endl;

  // * Array
  std::array<int, 3> arr1 = {1, 2, 3};
  std::array<int, 3> arr2 = {4, 5, 6};
  int arr3[3] = {1, 2, 3};
  // arr1.at(4);                                  //  => error!
  arr1.at(0);                  // 1
  arr1.at(2);                  // 3
  arr1.size();                 // array 사이즈
  arr1.front();                // 1
  arr1.back();                 // 3
  sizeof(arr3) / sizeof(int);  // int[] 사이즈

  // printf("%d\n", std::size(arr3)); C++17 이상 지원
  arr1.swap(arr2);  // arr1 => arr2

  int m1[3][3] = {{1, 2, 3}, {1, 2, 3}, {1, 2, 3}};
  int m2[3][3] = {{}, {}, {}};
  int m3[3][3] = {};

  // copy
  std::copy(&m1[0][0], &m1[0][0] + 3 * 3, &m3[0][0]);  // m1 => m3
  memcpy(&m2, &m1, sizeof(m1));                        // m1 => m2

  // fill
  std::fill(&m2[0][0], &m2[0][0] + 3 * 3, 1);  // 1로 초기화
  memset(m3, 0, sizeof(m3));                   // 0으로 초기화

  // * Vector
  std::vector<int> v = {1, 2, 3};
  v.resize(5);      // 5개로 사이즈 조정, 빈 요소는 0 할당
  v.push_back(99);  // 1 2 3 0 0 99
  v.pop_back();     // 1 2 3 0 0
  v.size();         // 5

  sort(v.begin(), v.end(), std::greater<int>());  // 3 2 1 0 0
  std::sort(v.begin(), v.end());                  // 0 0 1 2 3
  std::reverse(v.begin(), v.end());               // 3 2 1 0 0
  std::max_element(v.begin(), v.end());
  std::min_element(v.begin(), v.end());
  v.erase(v.begin() + 1);  // 3 1 0 0
  v.clear();

  // * Pair
  int x, y;
  std::vector<std::pair<int, int>> v1 = {{1, 2}, {3, 4}};
  std::tie(x, y) = v1[0];
  v1[0].first;   // x
  v1[0].second;  // y

  // * Map
  std::map<std::string, int> mp;
  mp.insert({"foo", 123});
  mp["baz"] = 234;
  auto it = mp.find("bar");
  if (it == mp.end()) printf("%s\n", "Not Found");

  for (auto it = mp.begin(); it != mp.end(); it++) {
  };

  // * Stack, Queue
  std::stack<int> st;
  std::queue<int> q;

  st.push(1);
  st.push(2);
  st.top();
  q.front();  // st.top => q.front, 나머지는 stack과 동일
  st.size();
  st.pop();

  // * Deqeue
  std::deque<int> dq = {1, 2, 3};
  dq.pop_back();      // 1 2
  dq.pop_front();     // 2
  dq.push_back(99);   // 2 99
  dq.push_front(99);  // 99 2 99
  dq.size();          // 3
  dq.clear();
  return 0;
}
