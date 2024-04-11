import authorImg from "./images/asabeneh.jpg";
import "./card.css";

const Card = () => {
  const data = {
    name: "Asabeneh",
    lastname: "Yetayeh",
    job: "Senior Developer",
    country: "Finland",
    skills: ["Html", "Css", "Sass", "JScript", "React"],
    image: authorImg,
  };

  const style_skills = {
    backgroundColor: "#ff5722",
    margin: "5px",
    width: "50px",
    height: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };

  const techskills = data.skills.map((tech) => (
    <li style={style_skills} key={Math.random()}>
      {tech}
    </li>
  ));
  console.log(techskills);

  return (
    <>
      <div className="card-container">
        <img src={data.image} alt="authorImg" />
        <h2>
          {data.name} {data.lastname}
        </h2>
        <p>{data.country}</p>
        <p>{data.job}</p>
        <h2>Skills</h2>
        <ul className="skills-container">{techskills}</ul>
      </div>
    </>
  );
};

export default Card;
