import { requestFactory } from './requester';

let baseUrl = 'http://localhost:3030/jsonstore/wild-rhodopes';

export const cartServiceFactory = (token) => {
	const request = requestFactory(token);

	const getAllCartItems = async () => {
		const result = await request.get(`${baseUrl}/cart`);

		return Object.values(result);
	};

	const postCartItem = async (cartItemData) => {
		const result = await request.post(`${baseUrl}/cart`, cartItemData);

		return result;
	};

	const clearCart = () => request.delete(`${baseUrl}/cart`);

	const deleteCartItem = (cartItemId) =>
		request.delete(`${baseUrl}/cart/${cartItemId}`);

	return {
		getAllCartItems,
		postCartItem,
		clearCart,
		delete: deleteCartItem,
	};
};
