
import data from "./cards.json";
import "./CardsDesign.css";

function ProjectCards() {
  return (
    <div className="bg-slate-500 text-md flex flex-row justify-end w-[160vh] h-[45vh] mx-48">
      {data.map((card) => (
        <div key={card.id} className="m-4 bg-white rounded overflow-hidden shadow-lg">
          <img src={card.image} alt="project" className="w-full h-40 object-cover" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{card.title}</div>
            <p className="text-gray-700 text-base">{card.description}</p>
          </div>
          <div className="px-6 py-2">
            <a
              href={card.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              Github
            </a>
            <a
              href={card.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
            >
              Live
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;
