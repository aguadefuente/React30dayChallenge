import NumGenerator from "./NumGenerator";
import Countries from "./Countries";
import HexaColors from "./ClassColors";

function App() {
  const fiveColors = ["#FF0000", "#FFFF00", "#00FFFF", "#C0C0C0", "#0000FF"];

  return (
    <>
      <h1>Mapping Arrays</h1>
      <NumGenerator times={10} />
      <Countries />
      <h2>Class Coponent Colors</h2>
      {fiveColors.map((color) => (
        <HexaColors key={color} color={color} />
      ))}
      ;
    </>
  );
}

export default App;
