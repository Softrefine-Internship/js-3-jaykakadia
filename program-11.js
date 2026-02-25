// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

function isAnagram(str1, str2) {
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 === sortedStr2;
}
console.log(isAnagram("evil", "vile"));
console.log(isAnagram("a gentleman", "elegant man"));
console.log(isAnagram("eleven plus two", "twelve plus one"));   
console.log(isAnagram("hello", "Wp"));
