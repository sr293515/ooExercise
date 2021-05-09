class Triangle { // Always use the first word as a capital letter
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet() {
        console.log('HELLO FROM TRIANGLE!!!')
    }
    display() {
        console.log(`Triangle with sides of ${this.a} and ${this.b}`)
    }
}
// never return value from constructor
const firstTri = new Triangle();
// Manually add pieces of data
firstTri.a = 3;
firstTri.b = 4;
const secondTri = new Triangle();
secondTri.a = 9;
secondTri.b = 12;


// class Triangle { // Always use the first word as a capital letter
//     constructor(a, b, c) {
//         for (let side of [a, b, c]) {
//             if (!Number.isFinite(side) || side <= 0) {
//                 throw new Error('Sides must be positive numbers!');
//             }
//         }
//         // if (!Number.isFinite(a) || a <= 0) {
//         //     throw new Error('Sides must be positive numbers!');
//         // }
//         // if (!Number.isFinite(b) || b <= 0) {
//         //     throw new Error('Sides must be positive numbers!');
//         // }
//         // if (!Number.isFinite(c) || c <= 0) {
//         //     throw new Error('Sides must be positive numbers!');
//         // }
//         this.a = a;
//         this.b = b;
//         this.c = c;
         
//     }
//     greet() {
//         console.log('HELLO FROM TRIANGLE!!!')
//     }
//     display() {
//         console.log(`Triangle with sides of ${this.a} and ${this.b}`)
//     }
//     getArea() {
//         const { a, b, c} = this;
//         const s = (a + b + c) / 2;
//         return Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     }
//     isBig(){
//         return this.getArea() > 50;
//     }
// }

// const t1 = new Triangle(3, 4, 5);
// const t2 = new Triangle(5, 9, 10);
// t1.display();

class RightTriangle extends Triangle { // Always use the first word as a capital letter
    constructor(a, b, c) {
        for (let side of [a, b, c]) {
            if (!Number.isFinite(side) || side <= 0) {
                throw new Error('Sides must be positive numbers!');
            }
        }
        if (a * a + b * b !== c * c) {
            throw new Error('Invalid C side for right triangle!');
        }
        this.a = a;
        this.b = b;
        this.c = c;
         
    }
    greet() {
        console.log('HELLO FROM TRIANGLE!!!')
    }
    display() {
        console.log(`Triangle with sides of ${this.a} and ${this.b}`)
    }
    getArea() {
        const { a, b, c} = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
    isBig(){
        return this.getArea() > 50;
    }
}

const t1 = new Triangle(3, 4, 5);
const t2 = new Triangle(5, 9, 10);
t1.display();