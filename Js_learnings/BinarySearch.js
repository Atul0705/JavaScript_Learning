

function binarySearch(arr,key,start,end)
{

    if(start<=end)
    {
        let mid = start + Math.floor((end - start)/2);
        if(arr[mid] == key)
        return mid;
        if(arr[mid]>key)
            return binarySearch(arr,key,start,mid-1);
        
            return binarySearch(arr,key,mid+1,end);
    }
    return -1;
}

let arr = [1,2,3,4,6,8];
let n = arr.length
let start = 0, end = n - 1;
console.log(binarySearch(arr,4,start,end));