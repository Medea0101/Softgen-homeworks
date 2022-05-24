
let z = '*';
let y = 0;
while (y < 5){
    y++
    console.log(z)
    z += '*'
}



// 2


function draw(n){
    for (let i = 1; i <= n; i++){
        console.log(stars(i))
    }
}

function stars(n){
    let line = '';
    for (let i = 0; i < n; i++){
        line += '* '
    }
    return line;
}
draw(5);