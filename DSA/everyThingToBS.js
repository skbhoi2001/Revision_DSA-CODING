function runProgram(input){
    input = input.split("\n")
    var n = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    var k = Number(input[2])
    var low = 0
    var high = n-1

    var sol = []
    var lower = lowerElem(arr,n,k,low,high)
    var upper = upperElem(arr,n,k,low,high)
    var count = upperElem(arr,n,k,low,high) - lowerElem(arr,n,k,low,high) +1

    sol.push(lower)
    sol.push(upper)
    sol.push(count)
    console.log(sol.join(" "));
    
}

function upperElem(arr,n,k,low,high){
    var res = -1
    while(low<=high){
        var mid = low+Math.floor((high-low)/2)
        if(arr[mid] === k){
            res = mid
            low = mid+1
        }
        else if(arr[mid]>k){
            high = mid-1
        }
        else{
            low = mid+1
        }
    }
    return res
}
function lowerElem(arr,n,k,low,high){
    var res = -1
    while(low<=high){
        var mid = low+Math.floor((high-low)/2)
        if(arr[mid] === k){
            res = mid
            high = mid-1
        }
        else if(arr[mid]>k){
            high = mid-1
        }
        else{
            low = mid+1
        }
    }
    return res
}


runProgram(`6
1 1 1 2 2 2	
1`)