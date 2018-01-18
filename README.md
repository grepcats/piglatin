#_Pig Latin Translator_

#### _Translates your pig latin, 1/18/2018_

#### By _Kayla Ondracek and Chase Bowden_

## Description

This site takes user-provided text and translates it into pig latin.

## Specs
The program does nothing to non-alphabetical characters, since they do not Xcontain consonants or vowels.
Example Input: 3
Example Output: 3

The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

The program adds "way" to multi-letter words beginning with a vowel.
Example Input: and
Example Output: andway

For words beginning with a single consonant, including y, the program moves Xthe consonant to the end of the word and adds "ay".
Example Input: banana
Example Output: ananabay

For words beginning with multiple consonants the program moves the consonants Xto the end of the word and adds "ay".
Example Input: Chronic, cry
Example output: onicChray, ycray

For words that contain "qu" in the first consonants, move qu and other first Xconsonants to the end of the word and add "ay"
Example Input: Squawk
Example Output: awkSquay

The program applies the previous rules to single word entries
Example Input: Beef
Example Output eefBay

The program applies the previous rules to multi-word entries
Example Input: I am tired
Example output: Iay amway iredtay

The program will make sure periods remain at the end of the sentence
Example Input: I am tired.
Example Output: Iay amway iredtay.

The program will keep commas at the end of their respective words
Example Input: Hey, you smell.
Example Output: eyHay, ouyay ellsmay.

## Setup/Installation instructions

* git clone repository
* open index.html and enter text

## Support and contact details
Please open a ticket on github if you run into issues or have feedback

## Technologies used
HTML, CSS, Bootstrap, JavaScript, jQuery

### License
Copyright (c) 2018 **_Chase Bowden & Kayla Ondracek_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
