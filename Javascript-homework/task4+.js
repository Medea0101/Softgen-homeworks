// const rectangles = [
//     {
//         id: 1,
//         width: 5,
//         height: 10,
//         color: 'green'
//     },
//     {
//         id: 2,
//         width: 2,
//         height: 4,
//         color: 'blue'
//     },
//     {
//         id: 3,
//         width: 6,
//         height: 3,
//         color: 'green'
//     },
//     {
//         id: 4,
//         width: 7,
//         height: 7,
//         color: 'purple'
//     },
//     {
//         id: 5,
//         width: 10,
//         height: 10,
//         color: 'red'
//     }      
// ];

// for (let i in rectangles){
//     let color = rectangles[i].color;
//     let id  = rectangles[i].id;
//     let width = rectangles[i].width;
//     let height = rectangles[i].height;
    
//     if(color == 'green' || color == 'red'){
//         let result = id + ":" + " " + width*height;
//         (console.log(result))
//     }
// }



//using filter map and forEach

const rectangles = [
    {
        id: 1,
        width: 5,
        height: 10,
        color: 'green'
    },
    {
        id: 2,
        width: 2,
        height: 4,
        color: 'blue'
    },
    {
        id: 3,
        width: 6,
        height: 3,
        color: 'green'
    },
    {
        id: 4,
        width: 7,
        height: 7,
        color: 'purple'
    },
    {
        id: 5,
        width: 10,
        height: 10,
        color: 'red'
    }      
];

rectangles
    .filter(rect => rect.color == 'green' || rect.color == 'red')
    .map(rect => rect.id + ': ' + rect.width * rect.height)
    .forEach(line => console.log(line))
    
    
