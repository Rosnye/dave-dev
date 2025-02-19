import React from "react";
import Card from "../Card";
import { CardData } from "../../assets/data";

const CardList: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {CardData.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CardList;