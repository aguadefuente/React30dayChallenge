import NumGenerator from "./NumGenerator";
import Countries from "./Countries";

function App() {
  return (
    <>
      <h1>Mapping Arrays</h1>
      <NumGenerator times={10} />
      <Countries />
    </>
  );
}

export default App;
