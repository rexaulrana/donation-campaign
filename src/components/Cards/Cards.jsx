import Card from "../Card/Card";

const Cards = ({ cards }) => {
  return (
    <div className="grid gap-3 mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {cards?.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default Cards;
