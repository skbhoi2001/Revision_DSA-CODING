function runProgram(input){
    input = input.split("\n")
    var n = Number(input[0])
    var arr = input[1].split(" ").map(Number)

    console.log(check(arr,n));
}

function check(arr,n){
    let low = 0;
    let high = n-1;
    let ans = arr[0];
    
    while(low <= high){
        let mid =  Math.floor((low+(high-low)/2))
        if(arr[mid] < arr[mid-1]){
            ans =  arr[mid]
            return "Yes"
        }
        else if (arr[mid] > arr[mid+1]){
            ans =  arr[mid+1]
            return "Yes"
        } 
        else if (arr[low] <= arr[mid]){
            low = mid +1 
        } 
        else {
            high = mid-1
        }   
    }
    
   return "No"
}

runProgram(`6
3 4 7 9 1 2`)