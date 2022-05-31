/* I დონე - Point (წერტილი)
დაწერეთ კლასი Point(x, y) , რომელსაც კონსტრუქტორში გადაეცემა x და y კოორდინატები;
Point კლასის ობიექტის შექმნის შემდეგ კოორდინატების ცვლილება არ უნდა შეიძლებოდეს;
კლასს უნდა ჰქონდეს გეტერები x და y -ისთვის;
კლასს უნდა ჰქონდეს მეთოდი distance(point2) , რომელსაც გადაეცემა ამავე კლასის 
სხვა ობიექტი და დააბრუნებს მიმდინარე (this) და 
პარამეტრად გადაცემულ წერტილებს შორის მანძილს (https://en.wikipedia.org/wiki/Distance#Mathematics);
კლასს უნდა ჰქონდეს toString() მეთოდი, რომელიც დააბრუნებს ასეთ სტრიქონს 
Point(5, 10) მაგალითად, თუ x = 5 და y = 10, */

class Point{
    #x;
    #y;
    constructor(x,y){
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
        return Math.sqrt(this.#x**2 + this.#y**2);   //მიმდინარე (this) წერტილი ვერ მივხვდი
    }
    toString(){
        return `Point(${coordinates.#x}, ${coordinates.#y})`
    }
}
const coordinates = new Point(3,4);
console.log(coordinates.toString()) 

const distanceObj = new Point(5,10); //distance მეთოდისთვის ამავე კლასის სხვა ობიექტის გადაცემა ამას ნიშნავს?
console.log(distanceObj.distance());


/*II დონე - Line (მონაკვეთი)
დაწერეთ კლასი Line(point1, point2), რომელსაც კონსტრუქტორში გადეცემა 
ორი Point ტიპის ობიექტი point1 და point2;
წერტილების შეცვლა შექმნილ ობიექტში არ უნდა შეიძლებოდეს;
კლასს უნდა ჰქონდეს მეთოდი length() რომელიც დააბრუნებს 
მონაკვეთის სიგრძეს;
კლასს უნდა ჰქონდეს toString() მეთოდი, 
რომელიც დააბრუნებს ასეთ სტრიქონს: Line(Point(5, 10), Point(20, 40) მაგალითად; */

class Line {
    #point1;
    #point2;
    constructor (point1, point2){
        this.#point1 = point1;
        this.#point2 = point2;
    }
    length(){
        return this.#point2 - this.#point1;
    }
    toString(){
        return `Line(Point(${lengthCount.#point1}, ${lengthCount.#point2}))`
    }
}

const lengthCount = new Line(20, 35)

console.log(lengthCount.length())
console.log(lengthCount.toString())


/*III დონე
შექმენით npm package (npm init )
Line და Point კლასები ჩაწერეთ სხვადასხვა ფაილში (მოდულში);
დაწერეთ unit ტესტები ორივე კლასისთვის mocha და chai 
ბიბლიოთეკების გამოყენებით;


IV დონე
Line კლასს გაუკეთეთ projectionX() და projectionY() მეთოდები, 
რომლებიც დააბრუნებენ მონაკვეთის პროექციებს შესამაბამისად X და Y ღერძებზე.
*/
