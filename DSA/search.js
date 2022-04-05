function runProgram(input){
    input = input.split("\n")
    var n = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    var k = Number(input[2])

    console.log(check(arr,n,k));

}

function check(arr,n,k){
    var low = 0
    var high = n-1
    while(low<=high){
        var mid = low + Math.floor((high-low)/2)
        if(arr[mid] === k){
            return mid
        }
        else if(arr[mid]<k){
            low = mid+1
        }
        else{
            high = mid-1
        }
    }
    return -1
}