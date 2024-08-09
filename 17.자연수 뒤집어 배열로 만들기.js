function solution(n) {
    var answer = [];
    var num = n.toString();
    for(i=0; i<num.length; i++){
        answer.push(parseInt(num[i]))
    }
    answer.reverse();
    return answer;
}

console.log(solution(12345))