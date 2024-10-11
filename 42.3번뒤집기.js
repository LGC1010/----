function solution(n) {
    let answer = n.toString(3).split("").reverse().join("");

    return parseInt(answer, 3);
}

console.log(solution(45));

// toString으로 3진법으로 바꾼다움 parseInt를 사용하여 3진법으로 바꾸어 변환하였다
