function solution(a, b) {
    var answer = 0;
    
    if(a > b){
        for(i=b; i<=a; i++){
            answer += i
        }
    }else if(a<b){
        for(i=a; i<=b; i++){
            answer += i
        }
    }else{
        return a
    }
    return answer
}

console.log(solution(5,3))