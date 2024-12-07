import { requestFactory } from './requester';

let baseUrl = 'http://localhost:3030/jsonstore/wild-rhodopes';

export const cardsServiceFactory = (token) => {
	const request = requestFactory(token);

	const getAllCards = async () => {
		const result = await request.get(`${baseUrl}/cards`);

		return Object.values(result);
	};

	const getByCount = async (count) => {
		const result = await request.get(
			`http://localhost:3030/data/cards?pageSize=${count}`
		);

		return Object.values(result);
	};

	const createCard = async (cardData) => {
		const result = await request.post(`${baseUrl}/cards`, cardData);

		return result;
	};

	const getCard = async (cardId) => {
		const result = await request.get(`${baseUrl}/cards/${cardId}`);

		return result;
	};

	const editCard = (cardId, data) =>
		request.put(`${baseUrl}/cards/${cardId}`, data);

	const deleteCard = (cardId) => request.delete(`${baseUrl}/cards/${cardId}`);

	return {
		getAllCards,
		getByCount,
		getCard,
		createCard,
		editCard,
		delete: deleteCard,
	};
};
