const NumGenerator = ({ times }) => {
  const numArr = new Array(times).fill(null);
  console.log(times);
  console.log(numArr);

  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  };

  const numContainer = {
    display: "flex",
    gap: "10px",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    border: "1px solid rgba(255, 255, 255)",
    padding: "20px",
    margin: "20px",
  };

  const numDiv = {
    display: "flex",
    gap: "10px",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100px",
    backgroundColor: "green",
    fontSize: "30px",
  };

  return (
    <>
      <h2>Number Generator</h2>
      <div style={numContainer}>
        {numArr.map((_, i) => (
          <div
            style={{
              ...numDiv,
              backgroundColor: isPrime(i)
                ? "red"
                : i % 2 === 0
                ? "green"
                : "gold",
            }}
            key={i}
          >
            {i}
          </div>
        ))}
      </div>
    </>
  );
};

export default NumGenerator;
