// * 순열, Permutation
// 순서와 관계 있음
// * 조합, Combination
// 순서와 관계 없음

// {1,2,3}중 두 개를 뽑는 순열
// {1,2}, {1,3}, {2,1}, {2,3}, {3,1}, {3,2}

// {1,2,3}중 두 개를 뽑는 조합
// {1,2}, {2,3}, {3,1}

#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

// * Permutation
// n개의 원소 중 r개를 뽑는 경우의 수
// nPr = n! / (n-r)!

// * next_permutation (오름차순)
//  prev_permutation (내림차순)

vector<int> vec = {2, 1, 3, 100, 200};

int makePermutation(int n, int r, int depth) {
  if (r == depth) {
    for (auto i : vec) cout << i << " ";
    cout << "\n";
    return 0;
  };

  for (int i = depth; i < n; i++) {
    swap(vec[i], vec[depth]);
    makePermutation(n, r, depth + 1);
    swap(vec[i], vec[depth]);
  };
};

int main() {
  int a[] = {1, 2, 3};
  do {
    for (int i : a) cout << i << " ";
  } while (next_permutation(&a[0], &a[0] + 3));
  cout << '\n';
  // next_permutation(a, a + 3)

  // 순열은 오름차순 정렬필수
  // 5개 중 2개 뽑기
  sort(vec.begin(), vec.end());
  do {
    for (auto i : vec) cout << i << " ";
    // for (int i = 0; i < 2; i++) {
    //   cout << vec[i] << " ";
    // }
    cout << "\n";
  } while (next_permutation(vec.begin(), vec.end()));

  //   makePermutation(5, 2, 0);
}
