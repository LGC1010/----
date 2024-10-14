function solution(s) {
  var answer = [];
  let txt = s.split(' ');
  for (i = 0; i < txt.length; i++) {
    let word = '';
    for (j = 0; j < txt[i].length; j++) {
      if (j % 2 === 0) {
        word += txt[i][j].toUpperCase();
      } else {
        word += txt[i][j].toLowerCase();
      }
    }
    answer.push(word);
  }
  return answer.join(' ');
}

console.log(solution('try hello world'));
