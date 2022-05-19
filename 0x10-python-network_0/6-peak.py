#!/usr/bin/python3
"""
find peak of list of unsorted numbers
"""


def find_peak(list_of_integers):
    """"find_peak"""
    long = len(list_of_integers)

    if not list_of_integers:
        return None

    return function(list_of_integers, 0, long - 1)


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
