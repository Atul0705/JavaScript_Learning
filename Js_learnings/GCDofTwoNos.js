let a = 13, b = 24;
console.log(findGCD(a,b));
function findGCD(a,b)
{
    if(b===0)
    return a;
    return findGCD(b,a%b);
}