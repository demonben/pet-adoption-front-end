import { CardInfoAnimal } from "./CardInfoAnimal";
const { Link } = require("react-router-dom");

const AnimalItem = ({ animal }) => {
  return (
    <div className="animalItem">
      <img src={animal.picture} alt="No picture" width="200" height="200"></img>
      <div>{animal.name_animal}</div>
      <div>{animal.type}</div>
      <Link to={`/pet/${animal.id}`}>Change</Link>
      <CardInfoAnimal animal={animal} />
    </div>
  );
};

export default AnimalItem;

