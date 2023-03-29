
// const Add=(a,b)=>a+b;
// console.log(Add(1,2));

// const div=(a,b)=>a/b;
// console.log(div(10,2));

// const no = [1,2,3,4,5];
// const double = no.map(item => item * 2);
// console.log(double);

// const no =[1,2,3,4];
// const array = no.map(item => console.log(item));
// // console.log(array);

// const person = ['manu','ramu','sunil'];
// const array = person.map(item => console.log('welcome', item));

// const no = [1,2,3,4,5,6,7,8,9,10];
// const even = no.filter(item => item % 2 === 0);
// console.log(even);

const no = [1,2,3,4,5,6,7,8,9,10];
const result = 0;
const total = no.map((total,item) => total + item);
console.log(total);

const no = [1,2,3,4,5,6,7,8,9,10];
const result = 0;
const total = no.reduce((total,item) => total + item);
console.log(total);


// const even = no.filter(item => {
//     if(item % 2 ===0)
//     {
//         console.log(item)
//     }
// })