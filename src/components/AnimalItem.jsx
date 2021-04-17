

const AnimalItem = ({animal}) => {
    return (
      <div className="animalItem">
        <div className="dateStyle">
          {new Date(animal.dateCreated).toLocaleDateString()}
        </div>
        <div>{animal.nameAnimal}</div>
      </div>
    );
}

export default AnimalItem
