function runProgram(input){
    input = input.split("\n")
    var cont = input[0].split(" ").map(Number)
    var n = cont[0]
    var k = cont[1]
    var arr = input[1].split(" ").map(Number)
    var low = 0
    var high = arr.length-1
    console.log(binaryRecursionn(arr,n,k,low,high))
}

function binaryRecursionn(arr,n,k,low,high){
    
    if(high>=low){
        var mid = low + Math.floor((high-low)/2)
        if(arr[mid]===k){
            return 1
        }
        else if(arr[mid]>k){
            return binaryRecursionn(arr,n,k,low,mid-1)
        }
        return binaryRecursionn(arr,n,k,mid+1,high)
    }
    return -1
}

runProgram(`5 0
2 -2 0 3 4`)