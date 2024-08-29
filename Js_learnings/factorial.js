let num = 10;
console.log(factorialofNum(num));

function factorialofNum(num)
{
    let fact =1;
    for(let i = 2 ;i<=num;++i)
    {
        fact*=i;
    }
    return fact;
}

let arr = ['atul','kumar','singh'];
console.log(arr.length);