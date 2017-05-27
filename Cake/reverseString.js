
function reverseString(str) {
    var str_list = str.split(""),
        lo = 0,
        hi = str_list.length - 1;

    while (lo < hi) {
        var temp = str_list[lo];
        str_list[lo] = str_list[hi];
        str_list[hi] = temp;
        lo++;
        hi--;
    }
    return str_list.join("");
}

var str = "hello word";
console.log(str);
var answer = reverseString(str);
console.log(answer);
