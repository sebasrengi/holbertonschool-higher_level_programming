#!/usr/bin/python3
"""
Contains the "read_lines" function
"""


def append_write(filename="", text=""):
    """returns the number of chars appended to "filename" from "text" """
    with open(filename, 'a', encoding='utf=8') as f:
        return f.write(text)
