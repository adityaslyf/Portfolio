import "./CardsDesign.css";
import data from "./cards.json";
import image from "../assets/projectimg.webp";
function ProjectCards() {
  return (
    <div>
      {data.map((cards) => (
        
        <div key={cards.id} className=" cards">
          <img src={image} alt="profile" />
          <h3 className=" ">{cards.title}</h3>
          <p>{cards.description}</p>
          <a href={cards.githubLink}>Github</a>
          <a href={cards.liveDemoLink}>Live</a>
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;
