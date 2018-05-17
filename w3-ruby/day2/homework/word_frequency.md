# Word Frequency

## Directions
In this project, you will use Ruby's `File` class and your knowledge of iterators to calculate the frequency of words in a text file. A starter file with a class and some method names is provided, as is a test suite for your code.

To calculate the frequency of words, you must:

- remove punctuation
- normalize all words to lowercase
- remove "stop words" -- words used so frequently they are ignored
- go through the file word by word and keep a count of how often each word is used

When your program is complete, you should be able to run `ruby wordfreq.rb seneca_falls.txt` and get a printed report like this:

```
     her | 33 *********************************
     all | 12 ************
   which | 12 ************
     she | 7  *******
   their | 7  *******
    they | 7  *******
   right | 6  ******
  rights | 6  ******
    such | 6  ******
    them | 6  ******
```

## Starter Files

The class is located in `word_frequency.rb` in the 'starter_files' folder. To run the tests to see if your code is correct, run `ruby word_frequency_test.rb`.

