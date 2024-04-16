import authorImg from "./images/asabeneh.jpg";
import "./card.css";

const Card = ({ name, lastname, job, country, skills, image }) => {
  const style_skills = {
    backgroundColor: "#ff5722",
    margin: "5px",
    width: "50px",
    height: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };

  const techskills = skills.map((tech) => (
    <li style={style_skills} key={Math.random()}>
      {tech}
    </li>
  ));
  console.log(techskills);

  return (
    <>
      <div className="card-container">
        <img src={image} alt="authorImg" />
        <h2>
          {name} {lastname}
        </h2>
        <p>{country}</p>
        <p>{job}</p>
        <h2>Skills</h2>
        <ul className="skills-container">{techskills}</ul>
      </div>
    </>
  );
};

function App() {
  const data = {
    name: "Asabeneh",
    lastname: "Yetayeh",
    job: "Senior Developer",
    country: "Finland",
    skills: ["Html", "Css", "Sass", "JScript", "React"],
    image: authorImg,
  };

  return (
    <>
      <h1>React Props</h1>
      {/* <Card
        name={data.name}
        lastname={data.lastname}
        county={data.country}
        job={data.job}
        image={data.image}
        skills={data.skills}
      /> */}
      <Card {...data} />{" "}
      {/*para no repetir data. tantas veces, si al final voy a usar todos los datos del objeto */}
    </>
  );
}

export default App;
