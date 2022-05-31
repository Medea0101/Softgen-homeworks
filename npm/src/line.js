/*II დონე - Line (მონაკვეთი)
დაწერეთ კლასი Line(point1, point2), რომელსაც კონსტრუქტორში გადეცემა 
ორი Point ტიპის ობიექტი point1 და point2;
წერტილების შეცვლა შექმნილ ობიექტში არ უნდა შეიძლებოდეს;
კლასს უნდა ჰქონდეს მეთოდი length() რომელიც დააბრუნებს 
მონაკვეთის სიგრძეს;
კლასს უნდა ჰქონდეს toString() მეთოდი, 
რომელიც დააბრუნებს ასეთ სტრიქონს: Line(Point(5, 10), Point(20, 40) მაგალითად; */

import {DistanceCount} from './points.js';

class Line extends DistanceCount{
    #point1;
    #point2;
    constructor (point1, point2){
        super();
        this.#point1 = point1;
        this.#point2 = point2;
    }
    length(){
        return this.#point2 - this.#point1;
    }
    toString(){
        return `Point(${lengthCount.#point1}, ${lengthCount.#point2})`
    }
}
const lengthCount = new Line(20, 35)
console.log(lengthCount.length())
console.log(lengthCount.toString())