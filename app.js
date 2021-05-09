const color = 'teal';

const obj = {};
obj.color = '#3723ff'
obj[color] = '#3723Ff'

// for (let [k, v] of Object.entries(obj)) {
//     console.log(`${k}---${v}`)
// }

// const myMath = {
//     add: function(x, y){
//         return x + y;
//     },
//     mult: (x,y) => {
//         return x * y;
//     }
// }

const myMath = {
    add(x,y) {
        return x + y;
    },
    square(x) {
        return x * x;
    }
}


