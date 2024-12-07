import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { cardsServiceFactory } from '../services/cardsService';

export const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
	const navigate = useNavigate();
	const [cards, setCards] = useState([]);
	const cardsService = cardsServiceFactory();

	useEffect(() => {
		const cardsService = cardsServiceFactory();

		cardsService.getAllCards().then((result) => {
			setCards(result);
		});
	}, []);

	const onCreateCardSubmit = async (card) => {
		try {
			const { name, location, title, imageUrl } = card;

			if (!name || !location || !title || !imageUrl) {
				throw new Error('All fields are required');
			}

			const newCard = await cardsService.createCard(card);

			setCards((state) => [...state, newCard]);

			navigate(`/cards`);
		} catch (error) {
			alert('Error: ' + error.message);
		}
	};

	const onCardEditSubmit = async (values) => {
		try {
			const { name, location, title, imageUrl } = values;

			if (!name || !location || !title || !imageUrl) {
				throw new Error('All fields are required');
			}

			const result = await cardsService.editCard(values._id, values);

			setCards((state) =>
				state.map((x) => (x._id === values._id ? result : x))
			);

			navigate(`/details/${values._id}`);
		} catch (error) {
			alert('Error: ' + error.message);
		}
	};

	const getCard = (cardId) => {
		return cards.find((card) => card._id === cardId);
	};

	const contextValues = {
		cards,
		onCreateCardSubmit,
		onCardEditSubmit,
		getCard,
	};

	return (
		<CardsContext.Provider value={contextValues}>
			{children}
		</CardsContext.Provider>
	);
};

export const useCardsContext = () => {
	const context = useContext(CardsContext);

	return context;
};
