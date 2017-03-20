"""
Given a set of stock prics over time, return the max profit from a buy/sell.
"""

def max_profit(stock):
    min_price = stock[0]
    max_profit = 0
    max_sell_price = 0
    min_sell_price = 0

    for index, price in enumerate(stock):
        if price < min_price:
            min_price = price

        profit = price - min_price
        if profit > max_profit:
            max_profit = profit
            max_sell_price = price
            min_sell_price = min_price

    return max_profit, min_sell_price, max_sell_price

print max_profit([90, 100, 50, 80, 120, 40, 60])
