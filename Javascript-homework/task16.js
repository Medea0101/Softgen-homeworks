
const text = "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."

function count(string) {
    let word = {};
    string.split(' ')
    .forEach(function(i) {
        word[i] = word[i] ? ++word[i] : 1;
    });   
    return word;
  }
  
  console.log(count(text));