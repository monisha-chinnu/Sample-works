// let age=6;
// if(age > 18)
// {
//     console.log("Eligible for vote");
// }
// else{
//     console.log(" Not eligible for vote");
// }

// let i=0;
// if(i % 2 == 0 && i != 0)
// {
//     console.log("Even No");
// }
// else if(i % 2 != 0)
// {
//     console.log("Odd no");
// }
// else
// {
//     console.log("Zero");
// }

// let a,b,c;
// switch()
// {
//     case 1 : c = a + b;
//     console.log("Sum=",c);
//     break;

//     case 2 : c = a - b;
//     console.log("Sub=",c);
//     break;

//     case 3 : c = a * b;
//     console.log("Prd=",c);
//     break;

//     case 4 : c = a / b;
//     console.log("Div=",c);
//     break;

//     default: break;
// }


let a=50;
if(a == 100)
{
    a = 1;
}
if(a >= 90 && a <= 99)
{
    a = 2;
}
if (a >= 80 && a <= 89)
{
    a = 3;
}
if(a >= 70 && a <= 79)
{
    a = 4;
}
if(a >= 60 && a <= 69)
{
    a = 5;
}
if(a < 50 && a <= 59)
{
    a = 6;
}

switch(a)
{
    case 1:
        console.log("O");
        break;

    case 2:
        console.log("A+");
        break;

    case 3:
        console.log("A");
        break;

    case 4:
        console.log("B+");
        break;

    case 5: 
        console.log("B");
        break;
    
    case 6:
        console.log("B+");
        break;

    default : 
        console.log("Failed");
        break;
}
