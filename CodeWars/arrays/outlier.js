/*
You are given an array (which will have a length of at least 3, but could be 
very large) containing integers. The array is either entirely comprised of odd 
integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160
*/

integers = [-58147294,-113705388,-45386248,-84102434,-75152554,129001704,52100652,-28406708,50677648,124225740,79534934,63322698,4559156,-36749914,143411444,-638248,-168199228,-137693202,-109234808,150022160,96619758,-14274056,18628742,31602406,-119218120,147785962,-165758144,-130435994,-172094350,-91998166,108041068,-138999374,55345594,-125988268,-4360725,-55499318,-183283374,174181116,137076400,-199186210,-148076294,-12901864,-81214812]

function findOutlier(integers){
    let even = integers.filter(function(el) {
        return el % 2 === 0;
    });
    let odd = integers.filter(function(el) {
        return el % 2 === 1 || el % 2 === -1;
    });

    return odd.length < even.length ? odd[0] : even[0];
}

answer = findOutlier(integers);
console.log(answer); // -4360725

/*
Test.assertEquals(findOutlier([0, 1, 2]), 1)
Test.assertEquals(findOutlier([1, 2, 3]), 2)
Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
*/
