import { useState, useEffect } from 'react';
import './CardsPreview.css';
import { cardsServiceFactory } from '../../services/cardsService';
import Card from '../Cards/Card/Card';

function CardsPreview() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		const cardsService = cardsServiceFactory();

		cardsService.getByCount(6).then(setCards);
	}, []);

	return (
		<section className='cards'>
			{cards.map((card) => (
				<Card key={card._id} {...card} />
			))}
		</section>
	);
}

export default CardsPreview;
