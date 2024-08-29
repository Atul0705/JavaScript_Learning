console.log(sum(10));

function sum(limit)
{
    let sum =0;
    for(let i = 0;i<=limit;++i)
    {
        if(i%3 ===0 || i%5 ===0)
            sum+=i;

    }
    return sum;
}


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