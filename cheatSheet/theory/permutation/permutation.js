// * 순열, Permutation
// 순서와 관계 있음
// * 조합, Combination
// 순서와 관계 없음

// {1,2,3}중 두 개를 뽑는 순열
// {1,2}, {1,3}, {2,1}, {2,3}, {3,1}, {3,2}

// {1,2,3}중 두 개를 뽑는 조합
// {1,2}, {2,3}, {3,1}

const v = [2, 1, 3, 100, 200]
const r=5

const swap = (arr, a, b) => {
    const temp = arr[a]
    arr[a] = arr[b];
    arr[b] = temp;
}

const makePermutation = (n,r,depth) => {
    if(r == depth) {
        // * logic
        console.log(v.join(" "))
        return
    }
    for(let i=depth; i<n; i++) {
        swap(v, i, depth)
        makePermutation(n,r,depth+1)
        swap(v, i, depth)
    }
}
v.sort((a,b) => a - b)
makePermutation(v.length,r,0)