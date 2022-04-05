function first(arr,n,k){
    var ans = -1
    var low = 0
    var high = n-1
    while(low<=high){
        var mid = low + Math.floor((high-low)/2)
        if(k == arr[mid]){
            ans = mid
            high = mid-1
        }
        else if(k>arr[mid]){
            low = mid+1
        }
        else{
            high = mid-1
        }
    }
    return ans
}
function last(arr,n,k){
    var ans = -1
    var low = 0
    var high = n-1
    while(low<=high){
        var mid = low + Math.floor((high-low)/2)
        if(k == arr[mid]){
            ans = mid
            low = mid+1
        }
        else if(k>arr[mid]){
            low = mid+1
        }
        else{
            high = mid-1
        }
    }
    return ans
}
function runProgram(input){
    input = input.split("\n")
    var cont = input[0].split(" ").map(Number)
    var n = cont[0]
    var k = cont[1]
    var arr = input[1].split(" ").map(Number)
    var low = 0
    var high = arr.length-1
    var x = first(arr,n,k)
    var y = last(arr,n,k)
    //console.log(x,y)
    if(x === -1 && y === -1){
        console.log(0)
    }
    else{
        console.log(y-x+1)
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});