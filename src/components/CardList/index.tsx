import React from "react";
import Card from "../Card";
import { CardData } from "../../assets/data";

interface CardItem {
  id: number;
  title: string;
  description: string;
}

const CardList: React.FC = () => {
  const cardData: CardItem[] = CardData;
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {cardData.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default CardList;