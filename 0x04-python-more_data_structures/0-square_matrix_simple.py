#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    matrix1 = []

    if len(matrix) > 0:
        for element in matrix[:]:
            matrix1.append(list(map(lambda x: x ** 2, element)))
    return matrix1
