

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let firstLetters = text
    .split(" ")
    .map(word => word[0])
    .join('')
    .toUpperCase()
    
    console.log(firstLetters)