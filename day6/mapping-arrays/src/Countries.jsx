const tenHighestPopulation = [
  { country: "World", population: 7693165599 },
  { country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "USA", population: 323947000 },
  { country: "Indonesia", population: 258705000 },
  { country: "Brazil", population: 206135893 },
  { country: "Pakistan", population: 194125062 },
  { country: "Nigeria", population: 186988000 },
  { country: "Bangladesh", population: 161006790 },
  { country: "Russia", population: 146599183 },
  { country: "Japan", population: 126960000 },
];

const worldPopulation = tenHighestPopulation[0].population;
console.log(typeof worldPopulation);

const outerContainer = {
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  alignItems: "center",

  gap: "5px",
};

const forma = {
  width: "100px",
  height: "20px",
};

const Country = ({ country: { country, population } }) => {
  return (
    <>
      <div style={outerContainer}>
        <h3 style={forma}>{country}</h3>
        <div
          style={{
            background: `linear-gradient(to right, #607D8B ${
              (population * 100) / worldPopulation
            }%,#000000 ${(population * 100) / worldPopulation}%)`,
            width: "300px",
            height: "20px",
          }}
        >
          {((population * 100) / worldPopulation).toFixed(2)}%
        </div>
        <p style={{ ...forma, color: "pink" }}>{population}</p>
      </div>
    </>
  );
};

const Contries = () => {
  const countryList = tenHighestPopulation.map((country) => (
    <Country key={country.country} country={country} />
  ));

  return (
    <>
      <h2>Countries</h2>
      <div>{countryList}</div>
    </>
  );
};

export default Contries;
