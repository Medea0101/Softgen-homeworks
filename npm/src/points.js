/* I დონე - Point (წერტილი)
დაწერეთ კლასი Point(x, y) , რომელსაც კონსტრუქტორში გადაეცემა x და y კოორდინატები;
Point კლასის ობიექტის შექმნის შემდეგ კოორდინატების ცვლილება არ უნდა შეიძლებოდეს;
კლასს უნდა ჰქონდეს გეტერები x და y -ისთვის;
კლასს უნდა ჰქონდეს მეთოდი distance(point2) , რომელსაც გადაეცემა ამავე კლასის 
სხვა ობიექტი და დააბრუნებს მიმდინარე (this) და 
პარამეტრად გადაცემულ წერტილებს შორის მანძილს (https://en.wikipedia.org/wiki/Distance#Mathematics);
კლასს უნდა ჰქონდეს toString() მეთოდი, რომელიც დააბრუნებს ასეთ სტრიქონს 
Point(5, 10) მაგალითად, თუ x = 5 და y = 10, */


export class DistanceCount {
    distance(){};
    toString(){};
    length(){};
}
class Point extends DistanceCount{
    #x;
    #y;
    constructor(x,y){
        super();
        this.#x = x;
        this.#y = y;
    }
    get x(){
        return this.#x;
    }
    get y(){
        return this.#y;
    }
    distance(){
        return Math.sqrt(this.#x**2 + this.#y**2);   //მიმდინარე წერტილი ვერ მივხვდი
    }
    toString(){
        return `Point(${coordinates.#x}, ${coordinates.#y})`
    }
}
const coordinates = new Point(3,4);
console.log(coordinates.toString()) 
const distanceObj = new Point(3,4);
console.log(distanceObj.distance());