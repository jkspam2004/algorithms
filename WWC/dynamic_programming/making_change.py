
def makeChange(amt, coins):
    if amt < 0:
        return -1
    if amt == 0:
        return 0

    best = -1

    for coin in coins:
        curr = makeChange(amt - coin, coins)
        if curr < 0:
            continue

        print("amount: {}, coin: {}, curr: {}, best: {}".format(amt, coin, curr, best))
        if best == -1 or curr + 1 < best: 
            best = curr + 1

    return best

coins = [1, 5, 9, 10]

amt = 14
print(makeChange(amt, coins))
