import cardData from "../cardData.js"
import Card from "./Card.jsx"

export default function Container() {
    const cards = cardData.map(card => {
        return (
            <Card key={card.id} 
                {... card} />
        )
    })

    return (
        <main>
            <div className="container">
            {cards}
        </div>
        </main>
        
    )
}