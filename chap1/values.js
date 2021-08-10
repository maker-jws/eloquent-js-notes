/* INTRODUCTION
- "best practices" are a narrowly defined set of techniques and syntaxes (strict rules) that allow the programmer to manage complexity
- "best practices" may not be applicable in developing new techniques / approaches
- "A sense of what a good program looks like is developed in practice, not learned from a list of rules."

- in primitive computing one would not be able to compare 'two memory locations' only the current evaluation of a value at a given locations
- while is a 'construct'
- in first example the while loop is compareable to reducing the sum of numbers in a range { sum(range(1,10))}

- Javascript began in 1995 as a way to add programs to webpages in the Netscape Navigator browser
- After adaptation of Javascript outside of Netscape, ECMAScript was the standard specficiation from with others could verify using the same language
- ECMAScript v3 came into ascendence between 2000>2010
- v4 was abandoned in 2008
- v5 ES5 was released in 2009
- v6 ES6 was released in 2015

- Notes: later chapters require related files/assets, refer to page 7 if further resources are required.
- There will be five projects to test our understanding of Javascript programming:
  // 1. A delivery robot; 2. a programming language; 3. a platform game; 4. a pixel paint program (browser); 5. a dynamic website
*/

/*
Values:

- Bits - binary data described as ones and zeros  (two valued structure)
an 8 bit value stores 8 00000000 each representing a base 2 value (2^0, 2^1, ... 2^7) 128, 64, 32, 16, 8, 4, 2, 1
- Chunks of bits are captured as 'values' prior to modern hardware numbers might be stored in 8 bit or 16 bit chunks, now modern JS uses 2^64 (18 with 18 zeros behind it)
-- Numbers
- fractional numbers (floats) store numbers using a dot
- largest fractional (non-integers) must account for dot position
- e - exponent (2.998e8) = 299,800,000 m/s > speed of light

-- Operators
- + addition
- - subtraction
- / division
- % modulus
- * multiplication
- ** exponentation

- Special Numbers: NaN (not a number)
- Infinity & -Infinity (capitalized) > not mathematically accurate

-- Strings
*/
