""" Path hack to make tests work. """

import os
import sys

dirname = os.path.dirname(os.path.realpath('.'))
sys.path.insert(0, dirname)

# -- alternatively, adding path, adding list
# bp = os.path.dirname(os.path.realpath('.')).split(os.sep)
# modpath = os.sep.join(bp + ["src"])
# sys.path.insert(0, modpath)

# print("os.sep: " + os.sep)  # /
# print("path: " + os.path.realpath('.'))  # /Users/eto/Git/leetcode/tests
# print("dirname: " + os.path.dirname(os.path.realpath('.')))  # /Users/eto/Git/leetcode
# print("bp: ", bp)  # ['', 'Users', 'eto', 'Git', 'leetcode']
# print("modpath: ", modpath)  # /Users/eto/Git/leetcode/src

