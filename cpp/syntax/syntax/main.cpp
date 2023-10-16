#include <bits/stdc++.h>

void matrix();
void structSummary();

int main() {
  matrix();
  return 0;
}

void structSummary() {
  struct EyeSight {
    float left;
    float right;
  };

  struct Human {
    EyeSight eyeSight;
    char name[10];
    int grade;
  };

  Human human = {{1.0, 1.1}, "david", 1};
  // Human* human2 = new Human{{1.0, 1.1}, "john", 1};
  return;
}

void matrix() {
  int mat1[3][4] = {{1, 2, 3, 4}, {4, 5, 6, 2}, {7, 8, 9, 1}};
  int mat2[3][3] = {};
  std::cout << sizeof(mat1) << std::endl;
  std::cout << sizeof(mat2) << std::endl;

  memcpy(&mat1, &mat2, sizeof(mat1));
  std::vector<int> vec = {1, 2, 3};
  std::array<int, 5> arr = {1, 2, 3, 4, 5};
  std::cout << sizeof(vec) << std::endl;
  std::cout << vec.size() << std::endl;
}