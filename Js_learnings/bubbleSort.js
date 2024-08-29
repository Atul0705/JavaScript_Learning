let arr = [1,3,2,44,5];
let n = arr.length;
console.log('Before Sorting :'+ arr);
console.log('After sorting :'+bubbleSort(arr,n));
function bubbleSort(arr,n)
{
      for(let i  = 0 ;i<n-1;++i)
      {
        for(let j =i+1; j <n;++j)
        {
            if(arr[i]>=arr[j])
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
      }
      return arr;
}