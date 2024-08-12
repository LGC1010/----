function solution(n) {
    var answer = 0;
    let num = Math.sqrt(n)
    if(n%num == 0){
        answer = (num+1)*(num+1);
    }else(
        answer = -1
    )
    return answer;
}

console.log(solution(121))
console.log(solution(3))