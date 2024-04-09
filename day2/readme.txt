////Exercises: What is React?
What is React?
A JavaScript Library for rendering user interface (ui)
Allows to create a single page application app (spa's)
React is Platform Agnostic: es decir yo quiero trabajar con aplicaciones web
que usan html markup como su ui primitive (<div> <p> <button>), pero tb podría usar
react para una mobile (react-native) or desktop (Windows / macOS) applications que usan otros primitive
(eg: Text, View, Pressable for react-native)

What is a library? 
https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/
Both libraries and frameworks are reusable code written by someone else, to help you solve common problems in easier ways.
- inversion control: When you use a library, you are in charge of the flow of the application
- opinionated: a library is more opinionated (less freedom a developer has when structuring their code).

A library is like going to Ikea. You already have a home, 
but you need a bit of help with furniture. 
You don’t feel like making your own table from scratch. 
Ikea allows you to pick and choose different things to go in your home. 
You are in control.

A framework, on the other hand, is like building a model home. 
You have a set of blueprints and a few limited choices when it 
comes to architecture and design. 
Ultimately, the contractor and blueprint are in control. 
And they will let you know when and where you can provide your input.

What is a single page application?
The content of the web application is loaded only once, 
because a single page application consists (as the name suggests) of 
only one web page. This means that there is only one HTML document, 
which is constantly manipulated by integrated JavaScript code during user 
interactions, to change the design of the website, for example. 
Because of this, the website does not need to be constantly reloaded since 
it works directly in the browser.
During a user interaction, data in JSON or XML format is loaded in 
the background and is invisible to the user. 
These are then automatically inserted into the DOM of the loaded web page.
The server only provides data, not entire web pages.

What is a component?
Core concept of react. 
A JavaScript function may returns some jsx markup that react render into the
browser
starts in capital letter. 
Uses a syntax extension called JSX to represent that markup. 
Uses props to comunicate each other. 
Reusable, nestable, isolated (modular)
In react every piece of UI is a component

What is the latest version of React?
https://github.com/facebook/react/releases
18.2.0 (June 14, 2022)

What is DOM?
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

What is React Virtual DOM?
https://legacy.reactjs.org/docs/faq-internals.html 
In React, for every DOM object, there is a corresponding “virtual DOM object.”
A virtual DOM object is a representation of a DOM object, like a lightweight copy.
A virtual DOM object has the same properties as a real DOM object, but it 
lacks the real thing’s power to directly change what’s on the screen.
Manipulating the DOM is slow. Manipulating the virtual DOM is much faster because nothing gets 
drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, 
as opposed to moving rooms in an actual house.
When you render a JSX element, every single virtual DOM object gets updated.

////Exercises: Why React?
Why did you chose to use react? 
is one of the most popular JavaScript libraries

What measures do you use to know popularity? 
github repository stars

What is more popular, React or Vue?

Exercises: JSX
What is an HTML element? How to write a self closing HTML element?
An HTML element has an opening and closing tags, content, and attribute in the opening tag. 
However, some HTML elements may not have content and a closing tag (self closing elements)

What is an HTML attribute? Write some of them
provide additional information about HTML elements. 
Usually come in name/value pairs like: name="value"
eg: The href Attribute <a href="https://www.w3schools.com">Visit W3Schools</a>

What is JSX?
a syntax extension. Looks like html but more stricter and display dinamic information.
Lets to add little Js logic with curly braces {...} (embeded Jscript) 
<h1>{person.name}</h1>

What is babel? What is a transpiler?
is a library which transpiles JSX to pure JavaScript
Transpilers are tools that convert one programming language into another language
Babel in react operates as a transpiler, converting the latest JavaScript syntax 
into a version that can run in all environments. This is done by converting the latest JavaScript 
syntax into an older version that is supported by all browsers.
is a crucial tool for React developers because it allows them to write code using the latest 
syntax and features while still ensuring that their code is compatible with all environments
Also Babel is commonly used for converting JSX syntax in React
It makes it easier for developers to write and understand React components, as they can 
visualize the components as they are being created. However, not all browsers support JSX 
syntax natively, so it needs to be transpiled into regular JavaScript before it can be run 
in the browser

