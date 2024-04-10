import authorImg from "./images/asabeneh.jpg";

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
    backgroundColor: "powderBlue",
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
        <h3>
          {data.name} {data.lastname}
        </h3>
        <p>{data.country}</p>
        <p>{data.job}</p>
        <ul>{techskills}</ul>
      </div>
    </>
  );
};

export default Card;
