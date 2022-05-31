
const text = "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."

const wordsCount = text
    .split (' ')
    .map ((words) => words)
    .reduce((total, words) =>{
        if(!(words in total)){
            total[words] = 0
        }
        total[words] ++;
        return total 
    }, {})

  console.log(wordsCount)

