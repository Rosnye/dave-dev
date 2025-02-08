import {useState} from "react";

const Card = () => {

    const [cards, setCards] = useState([]);
    
    
    return(
        <div className="bg-zinc-500 border rounded-lg flex flex-col max-w-32 p-4">
            {cards.map(card => (
                <div className="flex flex-col items-center">
                    <img src={card.image} alt={card.title} className="h-24 w-24" />
                    <h1 className="text-white text-lg">{card.title}</h1>
                    <p className="text-white text-sm">{card.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Card;