let x = "is Medea a good girl?";
function is_string(){
    if(typeof x === "string"){
        if (x.indexOf("?") > 0){
            return true
        } else {
            return false
        }
    } else {
        throw "is not a string"
    }
}
console.log(is_string(x))


