# Theme Creator App

Theme Creator app as part of the neuefische Web Development Bootcamp

## Table of Contents

1. [Description](#description)
2. [Constraints](#constraints)
3. [Challenges](#challenges)
4. [Learnings](#learnings)
5. [Feature ideas](#feature-ideas)
6. [How to use](#how-to-use)
7. [Dependencies](#dependencies)
8. [Tech Stack](#tech-stack)

## Description

A small app to explore and create different colors and themes. Just create a new theme and start adding colors. Each theme and color can also be edited and deleted.

## Constraints

-   Create a home and theme page
-   Use global states for data handling
-   Provide possibility to add/edit/delete a theme/color
-   Ensure sufficient contrast between text/color

## Challenges

-   [x] Handle dynamic routing
-   [x] Slice components properly
-   [x] Enable state management

## Learnings

-   Import fonts with Next.js build in feature
-   Using Zustand for centralizing state management
-   Provide safe destructuring with logical OR `||` operator
    -   `const { key } = object || {};`
-   How to style `<input type="color">` elements with css
-   Use `font: inherit;` and `color: inherit;` for input element reset
-   Utilize `usePathname()` for enabling active state in navigation
-   Make use of dynamic routes combined with `useParams()`
-   How to utilize `next/font` for automatic font optimization
-   Use `defaultValue` for uncontrolled input fields

## Feature ideas

-   Make layout responsive
-   Refactor theme delete functionality

### Implemented

-   Use singular/plural for headlines

## How to use

The application uses _Next.js_ as it's foundation.

-   Clone the whole repository
-   Run `npm install` in the app directory to install dependencies
-   Run `npm run dev` to start the application

## Dependencies

-   uid
-   next
-   sass
-   react
-   zustand
-   react-dom

## Tech Stack

-   VSC
-   GitHub
-   Next.js
-   React
-   SCSS
-   HTML
