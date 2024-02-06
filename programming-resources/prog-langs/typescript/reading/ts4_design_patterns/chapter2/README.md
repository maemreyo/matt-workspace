# Chapter 2: TypeScript Core Principal

## Working with advanced types

### Using utility types

- **Record**: If you want to define an object type that contains property keys taken from a specific type and values from another, you should use Record.
- **Partial**: If you have a type and you want to create another type but with all property keys as optional, then you can use the Partial type.
- **Required**: You want to use this type to create another type but with all property keys as required instead.
- **Pick**: If you have a type and you want to create another type but with only specific properties selected out of the present ones, then you should use the Pick type. This is quite effective in cases when you have a fat interface and you want to extract part of its properties for use in your components.
- **Omit**: This is the exact opposite of the Pick type. We utilize this type to generate another type with the specified property or properties excluded from this list instead. This is very practical if you want to take all existing properties of a type but redeclare a few of them with a distinctive signature.

> NOTE: Both the **Partial** and **Required** types only work on the **first level** of the type property list. This means that they will not recurse into deeply nested properties of objects and so on. If you know that an object contains multiple nested objects, then you will have to explicitly mark them as **Partial** or **Required** as well.

### Using advanced types and assertions

- Capturing the property keys
  - ***keyof***: The keyof operator can be used to capture all the keys of a type. You can use this operator in many places especially when you want to declare as a union type out of an existing variable or type.
  - ***typeof***: When you have an existing variable and you want to use keyof, you want to use the typeof operator to get its type
- Unique branded types
- Conditional types
