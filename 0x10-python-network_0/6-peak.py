#!/usr/bin/python3
"""
find peak of list of unsorted numbers
"""


def find_peak(list_of_integers):
    """BRUTE force implementation for question
    """
    max_i = None
    for ele in list_of_integers:
        if max_i is None or max_i < ele:
            max_i = ele
    return max_i


def function(list, start, end):
    """"function"""
    mid = int((start + end) / 2)

    if mid + 1 >= len(list) or list[mid + 1] <= list[mid]:
        if mid - 1 < 0 or list[mid - 1] <= list[mid]:
            return list[mid]
        else:
            return function(list, 0, mid)
    else:
        return function(list, mid + 1, end)
