function solution(n) {
    var answer = 0;
    answer = Array.from(n.toString()).sort((a,b)=>b-a).join('');
    return answer;
}

console.log(solution(118732))