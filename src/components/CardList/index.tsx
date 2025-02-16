import React from "react";
import Card from "../Card";
import { CardData } from "../../assets/data";

type CardItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech?: undefined;
} | {
  tech: { id: number; name: string; image: string; }[];
  id?: undefined;
  title?: undefined;
  description?: undefined;
  image?: undefined;
};

const CardList: React.FC = () => {
  const cardData = CardData.filter((item): item is CardItem => 
    !('tech' in item) && 
    typeof item.id === 'number' && 
    typeof item.title === 'string' && 
    typeof item.description === 'string' && 
    typeof item.image === 'string'
  );
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {cardData.map((item) => (
        <Card 
          key={item.id} 
          title={item.title || ''} 
          description={item.description || ''} 
          image={item.image || ''}
        />
      ))}
    </div>
  );
};

export default CardList;