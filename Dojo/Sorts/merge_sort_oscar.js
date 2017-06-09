//var arr = [2, 3, 1, 5, 123, 9, 0, 1, 8]
//var arr = [3, 9, 1, 4, 7];
var arr = [4,15,16,50,8,23,42,108];


function mergeSort(data, start, end){
    if(start == undefined || end == undefined){
        start = 0; end = data.length - 1;
    }
    if((end - start) < 1){
        return;
    }

    var midPoint = Math.floor((start + end) / 2);            
    mergeSort(data, start, midPoint)
    mergeSort(data, midPoint + 1, end)

    return merge(
        data,
        start,
        midPoint,
        end
    );
}

function merge(arr, start, midPoint, end){    
    var left = arr.slice(start, midPoint + 1); // Holds the data in the first half of the array
    
    var i = 0; // will be what iterates through the first half of our working array
    var j = midPoint + 1; // will be what iterates through the second half of our working array
    var z = start; // will be what iterates through our entire working array

    while(i < left.length && j <= end){
        arr[z++] = (left[i] < arr[j]) ? left[i++] : arr[j++]
    }
    while(i < left.length){
        arr[z++] = left[i++];
    }
    while(j <= end){
        arr[z++] = arr[j++]
    }
    return arr;
}

var done = mergeSort(arr);
console.log(done)
