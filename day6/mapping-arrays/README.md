# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

//// APUNTES:
Why you need to map an array?
We use map to modify an array

Why we need keys during mapping an array ?
Keys help React to identify items which have changed, added, or removed. Keys should be given to the elements inside the array to give the elements a stable identity. The key should be unique

What is the importance of destructuring your code?
It makes it easier to extract values from arrays or properties from objects and assign them to variables in a readable way

Does destructuring make your code clean and easy to read?
yes
