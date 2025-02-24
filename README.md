# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numerical value of a field in a document. This example shows the error that arises from providing it with a string instead of a number. 

## Bug Description
The provided code snippet demonstrates incorrect usage of the `$inc` operator.  The `$inc` operator expects a numeric value to increment the field by. Passing a string value leads to an error in MongoDB.

## Solution
The solution involves providing the correct numeric value to the `$inc` operator. The corrected code snippet in `bugSolution.js` shows how to properly increment the `count` field using a number.

## How to Reproduce
1. Clone this repository.
2. Run the `bug.js` file. This will attempt to increment the field with a string value resulting in an error.
3. Compare with the corrected version in `bugSolution.js`.
