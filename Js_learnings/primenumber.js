let number = 3;
console.log(primeOrNot(number))
function primeOrNot(number)
{
    for(let i = 2;i<=number/2;++i)
    {
        if(number%i==0)
        return false;
    }
    return true;
}