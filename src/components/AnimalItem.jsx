const { Link } = require("react-router-dom")

const AnimalItem = ({ animal }) => {
  return (
    <div className="animalItem">
      <div className="dateStyle">
        {new Date(animal.dateCreated).toLocaleDateString()}
      </div>
      <div>{animal.name_animal}</div>
      <div>{animal.type}</div>
      <Link to={`/pet/${animal.id}`}>Change</Link>
    </div>
  );
};

export default AnimalItem;
