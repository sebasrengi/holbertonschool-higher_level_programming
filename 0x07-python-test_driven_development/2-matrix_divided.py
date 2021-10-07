#!/usr/bin/python3
"""

This is the "2-matrix_divided" module.

The 2-matrix_divided module supplies one function, matrix_divided(matrix, div).

"""

def matrix_divided(matrix, div):
    """Divides all elements in the matrix by div"""
    if type(matrix) is not list:
        raise TypeError(
            "matrix must be a matrix (list of lists) of integers/floats")
    length = None
    for i in matrix:
        if type(i) is not list:
            raise TypeError(
                "matrix must be a matrix (list of lists) of integers/floats")
        if length is None:
            length = len(i)
        elif length != len(i):
            raise TypeError("Each row of the matrix must have the same size")
        for n in i:
            if type(n) is not int and type(n) is not float:
                raise TypeError("matrix must be a matrix (list of lists) of \
                integers/floats")
    if type(div) is not int and type(div) is not float:
        raise TypeError("div must be a number")
    if div == 0:
        raise ZeroDivisionError("division by zero")
    return [[round(n / div, 2) for n in i] for i in matrix]
