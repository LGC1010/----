function solution(x) {
    var str = x.toString();
    var num = 0;
    // answer = str[0];
    for(i=0; i<str.length; i++){
        num += Number(str[i]);
    }
    return x % num == 0 ? true : false;
}

console.log(solution(10));