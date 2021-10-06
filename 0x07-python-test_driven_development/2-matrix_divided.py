#!/usr/bin/python3
"""
Function that divides
Return quotient in matrix
"""


def matrix_divided(matrix, div):
    """
    Divides all elements of a matrix
    """
    error1 = "matrix must be a matrix (list of lists) of integers/floats"
    error2 = "Each row of the matrix must have the same size"
    error3 = "div must be a number"

    if not matrix:
        raise TypeError(error1)

    if matrix == [[]] or matrix == []:
        raise TypeError(error1)

    count = len(matrix[0])

    for i in matrix:
        comp = len(i)
        for j in i:
            if type(j) is not int and type(j) is not float:
                raise TypeError(error1)

            if comp != count:
                raise TypeError(error2)

    if type(div) is not int and type(div) is not float:
        raise TypeError(error3)

    if div == 0:
        raise ZeroDivisionError("division by zero")

    NewMatrix = [[round(t/div, 2) for t in row] for row in matrix]

    return NewMatrix
