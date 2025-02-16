import React from "react";

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  id?: number;
}

const Card: React.FC<CardProps> = ({ title = '', description = '', image = '' }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-slate-300">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
