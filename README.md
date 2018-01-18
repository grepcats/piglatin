## Specs
The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3

The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

The program adds "way" to multi-letter words beginning with a vowel.
Example Input: and
Example Output: andway

For words beginning with a single consonant, including y, the program moves the consonant to the end of the word and adds "ay".
Example Input: banana
Example Output: ananabay

For words beginning with multiple consonants the program moves the consonant to the end of the word and adds "ay".
Example Input: Chronic, cry
Example output: onicChray, ycray

For words that contain "qu" in the first consonants, move qu and other first consonants to the end of the word and add "ay"
Example Input: Squawk
Example Output: awkSquay

The program applies the previous rules to single word entries
Example Input: Beef
Example Output eefBay

The program applies the previous rules to multi-word entries
Example Input: I am tired
Example output: Iay amway iredtay

The program will make sure ending punctuation remains at the end of the sentence
Example Input: I am tired.
Example Output: Iay amway iredtay.

The program will keep commas at the end of their respective words
Example Input: Hey, you smell.
Example Output: eyHay, ouyay ellsmay.
