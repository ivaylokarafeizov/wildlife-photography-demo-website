import './CardDetails.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cardsServiceFactory } from '../../../services/cardsService';
import { cartServiceFactory } from '../../../services/cartService';

export default function CardDetails() {
	const navigate = useNavigate();
	const [card, setCard] = useState([]);
	const { cardId } = useParams();
	const isOwner =
		JSON.parse(localStorage.getItem('auth'))?._id === card._ownerId;
	const cardsService = cardsServiceFactory();

	useEffect(() => {
		cardsService.getCard(cardId).then(setCard);
	}, [cardId]);

	const onDeleteClick = async () => {
		// eslint-disable-next-line no-restricted-globals
		const result = confirm(
			`Are you sure you want to delete "${card.title}"`
		);

		if (result) {
			await cardsService.delete(card._id);

			navigate('/cards');
		}
	};

	const handleAddToCart = () => {
		const cartService = cartServiceFactory();

		cartService.getAllCartItems().then((cartItems) => {
			const isItemInCart = cartItems.some(
				(item) => item._id === card._id
			);

			if (!isItemInCart) {
				alert('Този артикул вече е в кошницата ви!');
			} else {
				cartService.postCartItem(card).then(() => {
					alert('Артикулът беше успешно добавен в кошницата!');
				});
			}
		});
	};

	const onEditClick = () => {
		navigate(`/edit/${cardId}`);
	};

	return (
		<section className='card-component'>
			<div className='left-section'>
				<img
					src={card.imageUrl}
					alt={card.name}
					className='main-image'
				/>
			</div>
			<div className='right-section'>
				<div className='card-desc'>
					<h4>{card.name}</h4>
					<h3>{card.title}</h3>

					<h4>Локация: {card.location}</h4>
					<p>{card.description}</p>
					<p>Цена: {card.price} лева</p>
				</div>
				<div className='actions'>
					{isOwner ? (
						<>
							<button className='edit' onClick={onEditClick}>
								Редактирай
							</button>
							<button className='delete' onClick={onDeleteClick}>
								Изтрий
							</button>
						</>
					) : (
						<></>
					)}
					<button className='addToCart' onClick={handleAddToCart}>
						Добави в количка
					</button>
				</div>
			</div>
		</section>
	);
}
