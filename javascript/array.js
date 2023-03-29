// const name=[
//     "megha", "sofiya", "athira"
// ]
// console.log(name[0]);

// const no = [
//     1,2,3,
// ]
// console.log(no[2]);


// const a = [1, 2, 3]
// for(let i = 0; i <= 3; i++)
// {
//     console.log(a[i]);
// }

// const no = [ 1, 2, 3, 4, 5, 6]
// no[4] = 100;
// for(let i = 0; no[i] <= 3; i++)
// {
//     console.log(no[i]);
// }

// const a=[];
// let x = 1 ;

// for(i = 0; i <= 100; i++)
// {
    
//     a[i] = x;
//     x++;
    
// }
// for(i = 0; i < a.length; i++)
// {
//     console.log(a[i]);
// }

 

let temp, i,j;
const a = [40, 24, 68, 31, 9, 104, 51, 47, 2, 17]

for(j = 1; j <= 9; j++)
{
    for(i = 0; i <= 9; i++) 
    {
        if(a[i] > a[i + 1])
        {
            temp = a[i];
            a[i] = a[i + 1];
            a[i + 1] = temp;
           
    
        }
       
    }
}
console.log(a);
    





