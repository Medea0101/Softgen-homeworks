let x = 'is medea a good girl?';
function is_string(){
    if(typeof x === "string"){
        if (x.indexOf("?") > -1){
            return true
        } else {
            return false
        }
    } else {
        throw "error"
    }
}
console.log(is_string())
