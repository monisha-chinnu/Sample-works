// for(let i = 4;i >= 1;i--)
// {
//     console.log(i);
// }

let n,no = 2022;
while(no !== 0)
{
    n = no % 10;
    console.log(n);
    no = no - n;
    no = no / 10;
}