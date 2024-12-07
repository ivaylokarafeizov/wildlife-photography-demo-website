import { useState, useEffect } from 'react';
import './Cards.css';
import { cardsServiceFactory } from '../../services/cardsService';
import Card from './Card/Card';
import SearchBar from '../SearchBar/SearchBar';

function Cards() {
	const [allCards, setAllCards] = useState([]);
	const [filteredCards, setFilteredCards] = useState([]);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		const cardsService = cardsServiceFactory();

		cardsService.getAllCards().then((data) => {
			setAllCards(data);
			setFilteredCards(data);
		});
	}, []);

	const handleSearch = (searchTerm) => {
		if (searchTerm.trim() === '') {
			setFilteredCards(allCards);
		} else {
			const filtered = allCards.filter((card) =>
				card.title.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredCards(filtered);
		}
	};

	const handleReset = () => {
		setFilteredCards(allCards);
	};

	return (
		<div className='cards-page'>
			<SearchBar onSearch={handleSearch} onReset={handleReset} />
			<section className='cards'>
				{filteredCards.map((card) => (
					<Card key={card._id} {...card} />
				))}
			</section>
		</div>
	);
}

export default Cards;
