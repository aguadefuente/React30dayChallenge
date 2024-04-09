APUNTES

- Runtime environment: 
https://www.codecademy.com/article/introduction-to-javascript-runtime-environments
- Front-end applications: Applications created for and executed in the browser


Exercises: Level 1
What is a module?
A single or multiple functions, that can be exported and imported when needed
In React we do not use link to access modules or packages, instead we import 
the module
eg:
//math.js
export const addTwo = (a, b) => a + b
export default function doSomeMath() {...}
//index.js
import doSomeMath from './math.js'
import { addTwo} from './math.js'
import * as everything from './math.js' // to import everything remaining

What is package?
is a module or a collection of modules

What is NPM?
The World's Largest Software Registry (Library)
https://docs.npmjs.com/about-npm

What is Webpack?
is a module bundler
https://webpack.js.org/concepts/

How do you create a new React project?
I have used Vite https://vitejs.dev/guide/ 
- npm create vite@latest

What is your favorite code editor (I believe that it is Visual Studio Code)? yes
Visual Studio Code extensions: eg. prettier, ESLint etc.


