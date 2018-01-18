## Specs
X The program does nothing to non-alphabetical characters, since they do not Xcontain consonants or vowels.
XExample Input: 3
XExample Output: 3

X The program adds "ay" to single-letter words beginning with a vowel.
XExample Input: i
XExample Output: iay

X The program adds "way" to multi-letter words beginning with a vowel.
X Example Input: and
X Example Output: andway

XFor words beginning with a single consonant, including y, the program moves Xthe consonant to the end of the word and adds "ay".
XExample Input: banana
XExample Output: ananabay

XFor words beginning with multiple consonants the program moves the consonants Xto the end of the word and adds "ay".
XExample Input: Chronic, cry
XExample output: onicChray, ycray

XFor words that contain "qu" in the first consonants, move qu and other first Xconsonants to the end of the word and add "ay"
XExample Input: Squawk
XExample Output: awkSquay

xThe program applies the previous rules to single word entries
xExample Input: Beef
xExample Output eefBay

xThe program applies the previous rules to multi-word entries
xExample Input: I am tired
xExample output: Iay amway iredtay

The program will make sure ending punctuation remains at the end of the sentence
Example Input: I am tired.
Example Output: Iay amway iredtay.

The program will keep commas at the end of their respective words
Example Input: Hey, you smell.
Example Output: eyHay, ouyay ellsmay.
