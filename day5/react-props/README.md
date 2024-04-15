# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

//// APUNTES: https://www.freecodecamp.org/news/props-in-react/
What is props in a React component ?
Any data passed into a react component.
Similar to HTML attributes
unidirectional: from parent component down to child component
read-only
components only accept a single argument: the props object

How do you access props in a React component?
con props keyword en Child component o con destructuring
eg:
export default function App() {
return <DummyComponent name="Tooba" a={5} b={2} />
}

function DummyComponent(props) {
const sum = props.a + props.b

    return (
    	<>
        	<p>My name is {props.name}</p>
            <p>The sum of the numeric props I received is {sum}</p>
        </>
    )

}
eg:
const DestructureComponentName = ({ propName }) => {
return <div>{propName}</div>;
};

default props value:
eg: function Avatar({person, size=100}){...} //va a servir cuando size prop no se defina, no cuando sea null, 0, u otro valor en el padre

What data types can we pass as props to components ?
Can be any JS value (objects, arrays, functions, jsx)

What is a propTypes?
helps us to assign the data types of the props we passed to a component. Ahora usamos TypeScript

What is a default propTypes?
can be used when we want to have some default proptypes for a component.
