#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    New_matrix = []

    if len(matrix) > 0:
        for element in matrix[:]:
            New_matrix.append(list(map(lambda x: x ** 2, element)))
    return New_matrix
