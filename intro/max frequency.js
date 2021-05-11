let arr = [1,2,3,4,4,4,5,45,56,4,5,2,1];
let max = 0;
let ele;
for(let i = 0;i<arr.length;i++)
{
    let count = 1;
    for(let j = i+1;j<arr.length;j++)
    {
        if(arr[i] == arr[j])
        count += 1;
    }
    if(count>max)
    {
        max = count;
        ele = arr[i];
    }
}
console.log(arr[i]);