---
title: Variables in CSS
date: "2020-07-18"
---

Variables are a feature used in almost all programming languages. In the frontend world, variables were one of the most requested CSS features. Previously, this feature could only be used with CSS preprocessors. Disadvantages of using preprocessors, such as long compilation times in large projects, became apparent. Looking at where CSS stands today, we can use this feature without the need for any preprocessors.

While working on a project, it is necessary to use the same values for many elements (such as text colors, background colors, etc.). In such situations, instead of repeatedly writing the same code, defining a value for a variable once and calling this variable where needed will provide consistency for our project and make maintenance easier.

Variables make it easy to manage CSS properties like colors, font types, and spacing values from a single point, facilitating consistency across a codebase. By assigning a value to a property using variables, we can reuse it in the necessary places within our CSS code.

#### In this section, I will try to address the following features of CSS variables:

- How to define variables in CSS and set default values for these variables?
- How can we use the variables we've defined in our project?
- What is the dynamic nature of variables, and how do they work with media queries in CSS?
- Current browser support status of variables.

## Variable Definition

Each preprocessor uses different syntax for defining variables. For example, in Sass, a variable is defined by adding a `$` sign before the variable name, while in Less, the `@` sign is used. However, to define a CSS variable, you use a syntax where the variable name starts with a double dash (--). The dash indicates to the CSS parser that this is a CSS variable. The value assigned to the variable will be used wherever the variable is referenced.

```css
--primary-color: #1a73e8;
```

As you may know, in JavaScript, we can define variables in two ways: globally and locally. The same applies to CSS variables.

```css
:root {
  --primary-color: #1a73e8;
}

p {
  --secondary-color: #191970;
}
```

The `:root` selector replaces the root element of the document (i.e., it represents the <html> tag in an HTML file). Therefore, variables defined under `:root` are considered global variables. On the other hand, the `--secondary-color` variable is a local variable.

Variable names are case-sensitive. Therefore, `--primary-color` and `--primary-Color` are two different variables.

```css
:root {
  --primary-color: #1a73e8;
  --primary-Color: #191970;
}
```

## Variable Usage

In CSS, variables are called using the `var()` function. For example, if we wanted to use the value assigned to the `--primary-color` variable as the background color for a button, we would do the following:

```css
:root {
  --primary-color: #1a73e8;
}

button {
  background-color: var(--primary-color);
}
```

We would need to define it in the following way.

CSS variables can only be used to set values for standard CSS properties. For example, we can't define and use a property name as a variable.

```css
:root {
  --top-border: border-top;
}

button {
  /* Invalid syntax */
  var(--top-border): 10px solid #1a73e8;
}
```

Additionally, we can't define and use a property value as a variable in CSS.

```css
:root {
  --text-color: 'color: orange';
}

button {
  /* Invalid syntax */
  var(--text-color);
}
```

One of the things we can't do is concatenate a variable as part of a string value.

```css
:root {
  --base-font-size: 10;
}

body {
  font-size: var(--base-font-size) px;
}
```

## Setting a Fallback

Using the `var()` function, we can assign a fallback value if the given variable is either not defined or has an invalid value.
The `var()` function can take a maximum of two values. The first one must be a property name, and the second, which is optional, is a value used when the first value is invalid.

```css
:root {
  --primary-color: #1a73e8;
}

button {
  background-color: var(--primary-color, blue);
}
```

If the `--primary-color` variable has been assigned a value, the background color will be #1a73e8. If it is not defined, the background color will default to the color of the blue keyword.

Inside the `var()` function, we can use another variable as the second value.

```css
:root {
  --primary-color: #1a73e8;
  --secondary-color: #191970;
}

button {
  background-color: var(--primary-color, var(--secondary-color));
}
```

In the above code block, if a value is assigned to the `--primary-color` variable, the background color will be the value assigned to `--primary-color`. If it is not defined, the background color will be the value assigned to `--secondary-color`. If neither variable is defined, the background color will default to the initial value of the property.

## Dynamic Structure and Usage with Media Queries

One of the greatest advantages of CSS variables is their dynamic nature. So, what does this dynamic structure entail?

Variables used with preprocessors have a static nature, unlike in CSS. In CSS, a defined variable has a dynamic structure, allowing it to be changeable.

One of the instances where we commonly utilize this dynamic feature is when working with media queries, especially for different screen sizes.

CSS variables can be used in conjunction with media queries, making it more convenient to manage styles for various screen sizes from a centralized point.

```css
:root {
  --button-padding: 1rem;
}

@media (min-width: 576px) {
  :root {
    --button-padding: 2rem;
  }
}

button {
  padding: var(--button-padding);
}
```

In the example above, the padding value for the button will be set to 1rem until the screen width reaches 576px. Once the screen width exceeds 576px, the padding value will be adjusted to 2rem.

## Browser Support

In CSS, variables are supported by many contemporary browsers. Internet Explorer does not support them in any version, while Microsoft Edge supports them from version 15 onward, and Safari supports them from version 9.1 onward. Despite Microsoft Edge version 15 supporting CSS variables, it still has a few issues.

![Thumbnail](./browser-support.png)

You can access the current browser support from <a href="https://caniuse.com/?search=Custom%20Properties" target="_blank">here</a>

#### In summary;

CSS Variables:

- Allow us to define variables without using any preprocessor,
- Enable us to write simple and maintainable CSS,
- Create a single reference point for repeated values,
- Facilitate easier management of values assigned for different screen sizes.

<br>

#### Resources:

- https://www.sitepoint.com/premium/books/css-master-2nd-edition
- https://fatihhayrioglu.com/css-degiskenleri-custom-properties/
