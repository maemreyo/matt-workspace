# Chapter 1: Getting Started with TypeScript 4

## Introducing TS4

Understanding the basic language constructs of TS is very valuable when learning design patterns.

The basic structure of a TS program consists of statements or expressions. The following is a list of basic types that are partly associated with JS runtime types:

- Primitive types: **number**, **string**, **boolean**, **void**, **null**, **undefined**, **unknown**, **never**, **unique**, **bigint** and **any**
- Enum: Allow us to create named constants
- Array and tuples
  - Array: represent a collection of items of the same type, and they can have a variable size
  - Tuples: represent a fixed array, with each element having a defined type
- Classes: define objects of a specific shape with properties, methods and visibility modifiers.
- Interfaces and types
  - Interface: is abstractions that let you define the shape of an object and its properties, but without specifying an implementation.
  - Type: is a similar concept to interfaces but it a bit more flexible. You can combine a *type* with another *type* either as a *union* or as an *intersection* type

> Ref: [intro.ts](codesamples/intro.ts)
>
### Useful TS4 features

- Variadic tuple types: Tuples are interesting data structures as they represent fixed array types, where each element has a specific type
- Labeled tuples: are useful for documentation purposes
- Template literal types: allow us to combine types. This helps when defining new types out of existing ones and you want to avoid repetition

> Ref: [features](codesamples/features.ts)
