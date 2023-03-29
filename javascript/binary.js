

// let i = 2,no = 100;
// while(no !== 0 )
// {
//     if(no % i == 1)
//     {
//         rem = no % 2;
//         console.log(rem);
//         no = no / i;

//     }

// } 

let no = 100,i=2,rem;
while(no !== 0)
{
    if(no % 2 == 1)
    {
        console.log(no % 2);
        no = no - 1;
        no = no / 2;
    }
    else
    {
        console.log(no % 2);
        rem = no % 2;
        no = no / 2;
        
    }

}

