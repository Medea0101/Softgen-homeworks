let x = "is Medea a good girl";
function is_string(){
    if(typeof x === "string"){
        if (x.indexOf("?") > 0){
            return true
        }
    } else {
        throw "is not a string"
    }
}
console.log(is_string(x))


// function questionMark (text){
//     if (typeof text !== "string"){
//         throw new Error("not string")
//     }
//     return text.includes("?");
// }

// console.log(questionMark('medea'))
