const AnimalItem = ({ animal }) => {
  return (
    <div className="animalItem">
      <div className="dateStyle">
        {new Date(animal.dateCreated).toLocaleDateString()}
      </div>
      <div>{animal.name_animal}</div>
      <div>{animal.type}</div>
    </div>
  );
};

export default AnimalItem;
