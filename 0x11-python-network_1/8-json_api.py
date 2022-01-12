#!/usr/bin/python3
"""
Write a Python script that takes in a letter and sends a POST request to
http://0.0.0.0:5000/search_user with the letter as a parameter.
"""
from sys import argv
import requests


if __name__ == "__main__":
    if len(argv) > 1:
        q = argv[1]
    else:
        q = ''

    try:
        url = 'http://0.0.0.0:5000/search_user'
        data = {'q': q}
        r = requests.post(url, data).json()

        if len(r) == 0 or not r.get('id') or not r.get('name'):
            print('No result')
        else:
            print('[{}] {}'.format(r.get('id'), r.get('name')))

    except ValueError:
        print('Not a valid JSON')
