A = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]

for row in A:
    print("row {}".format(row))
    for i in row[::-1]:
        print("i: {}".format(i))

