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
- Almost any value can be converted to a string by wrapping them in ('', "", or ``)
- wrapping a line break \n requires ``
- a '\' can precede any special character and it will be included in your string example "'\\n'"

- `${}` - template literal can allow for the injection of evaluated/invoked values
- Unary vs Binary operators
  - unary: only requires one value (ex: typeof or - as in -8 or !false )
  - binary: an operator that separates two values (3+5)*-1
  - ternary: a conditional operator that is used for determining a value based on conditional

-- Comparisons

- comparing strings : 'Z' < "a" && "!" < "A"
- the only value that does not equal itself == NaN
- ternary: !someConditional ? truthyValue : falsey/default value

-- Automatic Type Conversion
- type coercion ":When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect"

- Ex:
    - "8* null" >> 0
    - "5"-1 >> 4 && "5"+1 >> "51"
    - "five"*2 >> NaN
    - false == 0 >> true

- if you want to compare to a precise boolean/value using === or !== will prevent type conversion
- short-circuit evaluation: if you want to skip a secondary evaluation someFalsyValue && X, in this case if (someFalsyValue == false ), X is skipped all together
-
*/
