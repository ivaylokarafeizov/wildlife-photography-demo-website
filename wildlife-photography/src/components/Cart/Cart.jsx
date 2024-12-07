import React, { useState, useEffect } from 'react';
import './Cart.css';
import { cartServiceFactory } from '../../services/cartService';

const Cart = () => {
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const cartService = cartServiceFactory();

		cartService.getAllCartItems().then((items) => {
			setCart(items);

			const total = items.reduce((acc, item) => acc + item.price, 0);
			setTotalPrice(total);
		});
	}, []);

	const handleRemoveFromCart = (id) => {
		const cartService = cartServiceFactory();

		cartService.delete(id).then(() => {
			cartService.getAllCartItems().then((updatedItems) => {
				setCart(updatedItems);
				const updatedTotal = updatedItems.reduce(
					(acc, item) => acc + item.price,
					0
				);
				setTotalPrice(updatedTotal);
			});
		});
	};

	const handleCheckout = () => {
		const cartService = cartServiceFactory();

		cartService.clearCart().then(() => {
			setCart([]);

			setTotalPrice(0);

			alert('Благодарим за поръчката!');
		});
	};

	return (
		<div className='cartContainer'>
			<div className='cart'>
				<h2>Вашата количка</h2>
				<div className='cartItems'>
					{cart.length > 0 ? (
						cart.map((item, index) => (
							<div className='cartItem' key={index}>
								<img
									src={item.imageUrl}
									alt={item.name}
									className='itemImage'
								/>
								<span className='itemTitle'>{item.title}</span>
								<span className='itemPrice'>
									{item.price} лева
								</span>
								<button
									className='removeButton'
									onClick={() =>
										handleRemoveFromCart(item._id)
									}
								>
									Премахни
								</button>
							</div>
						))
					) : (
						<p className='emptyCart'>Количката е празна.</p>
					)}
				</div>
				{cart.length > 0 && (
					<div className='cartFooter'>
						<div className='total'>
							Обща сума:
							<span>
								{parseFloat(totalPrice).toFixed(2)} лева
							</span>
						</div>
						<button
							className='checkoutButton'
							onClick={handleCheckout}
						>
							Завърши поръчката
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
