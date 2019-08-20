""" 804. Unique Morse Code Words
International Morse Code defines a standard encoding where each letter is mapped
to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...",
"c" maps to "-.-.", and so on.

Now, given a list of words, each word can be written as a concatenation of the
Morse code of each letter. For example, "cba" can be written as "-.-.-....-",
(which is the concatenation "-.-." + "-..." + ".-"). We'll call such a
concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

https://leetcode.com/problems/unique-morse-code-words
"""
from typing import List


class MorseCode:
    def unique_morse_representations(self, words: List[str]) -> int:
        morse_mapping = self._morse_map()

        seen = {}
        for word in words:
            print("word: " + word)
            morse_code = ""
            for letter in word:
                morse_code += morse_mapping.get(letter)

            print("morse_code: " + morse_code)
            if seen.get(morse_code):
                seen[morse_code] += 1
            else:
                seen[morse_code] = 1

        return len(seen)

    # noinspection PyMethodMayBeStatic
    def _morse_map(self):
        return {
            "a": ".-",
            "b": "-...",
            "c": "-.-.",
            "d": "-..",
            "e": ".",
            "f": "..-.",
            "g": "--.",
            "h": "....",
            "i": "..",
            "j": ".---",
            "k": "-.-",
            "l": ".-..",
            "m": "--",
            "n": "-.",
            "o": "---",
            "p": ".--.",
            "q": "--.-",
            "r": ".-.",
            "s": "...",
            "t": "-",
            "u": "..-",
            "v": "...-",
            "w": ".--",
            "x": "-..-",
            "y": "-.--",
            "z": "--.."
        }


"""
typing
https://docs.python.org/3/library/typing.html

List[str] - user-defined generic
https://mypy.readthedocs.io/en/latest/generics.html#variance-of-generics

function annotations
https://www.python.org/dev/peps/pep-3107/

"""
