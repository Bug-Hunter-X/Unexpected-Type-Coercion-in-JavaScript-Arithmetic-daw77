# Unexpected Type Coercion in JavaScript Arithmetic

This repository demonstrates a common JavaScript bug related to unexpected type coercion in arithmetic operations.  JavaScript's loose typing can lead to unexpected results when different data types are involved in calculations.

## The Bug

The `foo` function attempts to add two values. However, due to loose typing, when one operand is a string, the '+' operator performs string concatenation rather than numerical addition.

## The Solution

The solution involves explicitly converting operands to numbers before performing the addition using `parseInt()` or `Number()`.  This ensures that the arithmetic operation is performed correctly.