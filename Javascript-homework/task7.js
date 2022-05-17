
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

function getFirstLetters(string) {
    const firstLetters = string
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  
    return firstLetters;
  }
  
  console.log(getFirstLetters(text));
  
  