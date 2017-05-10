/*
    1/11/17
    Building permutations of first n-1 characters

    P(a1) = a1;

    P(a1a2) = a1a2, a2a1

    P(a1a2a3) = a1a2a3, a1a3a2, a2a1a3, a2a3a1, a3a2a1, a3a1a2

    P(a1a2a3a4) is a more interesting case. How do we get P(a1a2a3a4) based on the result of P(a1a2a3)?
    Each permutation of a1a2a3a4 represents an ordering of a1a2a3. For example, a2a4a1a3 represents the order a2a1a3.

    As such, if we take all permutations of a1a2a3, and insert a4 into all possible position, we will get all the permutations of a1a2a3a4.

    a1a2a3: a4a1a2a3, a1a4a2a3, a1a2a4a3, a1a2a3a4
    a1a3a2: a4a1a3a2, a1a4a3a2, a1a3a4a2, a1a3a2a4
    a2a1a3: a2a4a1a3, a2a1a4a3, a2a1a4a3, a2a1a3a4
    a2a3a1: a4a2a3a1, a2a4a3a1, a2a3a4a1, a2a3a1a4
    a3a2a1: a4a3a2a1, a3a4a2a1, a3a2a4a1, a3a2a1a4
    a3a1a2: a4a3a1a2, a3a4a1a2, a3a1a4a2, a3a1a2a4

    http://collabedit.com/t2bya

*/
