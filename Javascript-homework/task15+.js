
function questionMark (text){
    if (typeof text !== "string"){
        throw new Error("not a string")
    }
    return text.includes("?");
}

console.log(questionMark('medea?'))
