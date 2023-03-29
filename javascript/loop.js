// let x = 3;
// for(let i = 1; i <= 10; i++)
// { 
//     z = i * x;
//     console.log(x,"*" ,i, "=",z);
// }

// let pdt = 1,i = 1;
// while(pdt <= 100)
// {
//     pdt = pdt * i;
//     i++;
//     console.log(pdt,"*",i);
// }


let i = 2,x = 1000;
while(x !== 1 || 0)
{
    if(x % i == 6)
    {
        console.log(x,"---",i);
        x = x / i;
    }
    else
    {
        i++;
    }
} 

