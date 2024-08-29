function binaryToGray(x)
{
    //Taking the last digit to check
    let a = x%10;

    // extracting second last digit for 
    let b = (x/10)%10;

    // checking if bot bits are equal or not
    // if equal then 
    if((a& ~b) || (~a& b))
    return (1+10*binaryToGray(x/10));
    return (10*binaryToGray(x/10));
    
}

// driver code
let x = 1001;
console.log("Gray code of " + x + " is " + binaryToGray(x));