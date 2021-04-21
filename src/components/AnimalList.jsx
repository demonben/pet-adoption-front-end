import AnimalItem from "./AnimalItem";

const AnimalList = ({ animals }) => {
  console.log(animals);
  return (
    <div className="animalList">
      {animals.map((animal) => (
        <AnimalItem animal={animal} key={animal.id} />
      ))}
    </div>
  );
};

export default AnimalList;
