// * 순열, Permutation
// 순서와 관계 있음
// * 조합, Combination
// 순서와 관계 없음

// {1,2,3}중 두 개를 뽑는 순열
// {1,2}, {1,3}, {2,1}, {2,3}, {3,1}, {3,2}

// {1,2,3}중 두 개를 뽑는 조합
// {1,2}, {2,3}, {3,1}

// * Combination
// nCr = n! / r!(n-r)!
#include <bits/stdc++.h>

#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int n = 5, k = 3, a[5] = {5, 1, 2, 3, 7};

// * 인덱스 기반 조합 (recursion)
void combi(int start, vector<int> b) {
  if (b.size() == k) {
    for (auto i : b) cout << i << " ";
    cout << "\n";
    return;
  }
  // start+1 하면 중복이 혀옹되지 않는 조합
  // start+1 없으면 중복이 허용되는 조합 즉 모든  경우의 수
  for (int i = start + 1; i < n; i++) {
    b.push_back(i);
    combi(i, b);
    b.pop_back();
  }
}

// * 인덱스 기반 조합 (loop)
void dupLoop() {
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < i; j++) {
      for (int k = 0; k < j; k++) {
        cout << k << " " << j << " " << i << "\n";
      }
    }
  }
}

int main() {
  vector<int> v{};
  combi(-1, v);
  dupLoop();
  v.clear();
  return 0;
}
