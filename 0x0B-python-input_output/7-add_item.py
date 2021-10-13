#!/usr/bin/python3
"""
Script that adds all arguments to a Python list, and then saves them to a file
"""

from sys import argv
save_to_json_file = __import__('5-save_to_json_file').save_to_json_file
load_from_json_file = __import__('6-load_from_json_file').load_from_json_file


List = []
try:
    List = load_from_json_file("add_item.json")
except FileNotFoundError:
    List = []
for args in argv[1:]:
    NewList.append(args)
save_to_json_file(NewList, "add_item.json")
