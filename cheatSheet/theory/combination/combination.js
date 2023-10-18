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

const n = 5;
const r = 3;
const l = [];

// * 인덱스 기반 조합
function combi(start,list) {
    if(list.length == r) {
        console.log(list.join(" "))
        return;
    }
    // start+1 하면 중복이 혀옹되지 않는 조합
    // start+1 없으면 중복이 허용되는 조합 즉 모든  경우의 수
    for(let i = start+1; i < n; i++) {
        list.push(i);
        combi(i,list)
        list.pop();
    }
}

combi(-1,l);