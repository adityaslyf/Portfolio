
import "./CardsDesign.css"; // Import your additional styles
import data from "./cards.json";

function ProjectCards() {
  return (
    <div className="bg-slate-500 text-md flex flex-row flex-wrap justify-center w-full">
      {data.map((cards) => (
        <div key={cards.id} className="m-4 bg-white rounded overflow-hidden shadow-lg">
          <img src={cards.image} alt="project" className="w-full h-40 object-cover" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{cards.title}</div>
            <p className="text-gray-700 text-base">{cards.description}</p>
          </div>
          <div className="px-6 py-2">
            <a
              href={cards.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              Github
            </a>
            <a
              href={cards.liveDemoLink}
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
