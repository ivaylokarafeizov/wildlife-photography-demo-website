import { useEffect } from 'react';
import { useCardsContext } from '../../contexts/CardsContext';
import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';
import { cardsServiceFactory } from '../../services/cardsService';
import { useParams } from 'react-router-dom';
import './EditCard.css';

function EditCard() {
	const { cardId } = useParams();
	const { onCardEditSubmit } = useCardsContext();
	const cardsService = useService(cardsServiceFactory);

	const { values, changeHandler, onSubmit, changeValues } = useForm(
		{
			name: '',
			location: '',
			title: '',
			imageUrl: '',
			price: '',
		},
		onCardEditSubmit
	);

	useEffect(() => {
		cardsService.getCard(cardId).then((cardData) => {
			changeValues(cardData);
		});
	}, [cardId]);

	return (
		<section id='edit-page'>
			<form id='edit-form' method='post' onSubmit={onSubmit}>
				<h3 className='edit-h3'>Редактиране на обява</h3>

				<label htmlFor='name' className='edit-label'>
					Име:
				</label>
				<input
					className='edit-input'
					value={values.name}
					onChange={changeHandler}
					type='text'
					id='name'
					name='name'
					placeholder='Въведи име и фамилия...'
				/>

				<label htmlFor='location' className='edit-label'>
					Локация:
				</label>
				<input
					className='edit-input'
					value={values.location}
					onChange={changeHandler}
					type='text'
					id='location'
					name='location'
					placeholder='Въведи локация...'
				/>

				<label htmlFor='title' className='edit-label'>
					Заглавие:
				</label>
				<input
					className='edit-input'
					value={values.title}
					onChange={changeHandler}
					type='text'
					id='title'
					name='title'
					placeholder='Въведи заглавие...'
				/>

				<label htmlFor='imageUrl' className='edit-label'>
					Изображение:
				</label>
				<input
					className='edit-input'
					value={values.imageUrl}
					onChange={changeHandler}
					type='text'
					id='imageUrl'
					name='imageUrl'
					placeholder='Въведи адрес на изображението...'
				/>

				<label htmlFor='price' className='edit-label'>
					Цена:
				</label>
				<input
					className='edit-input'
					value={values.price}
					onChange={changeHandler}
					type='text'
					id='price'
					name='price'
					placeholder='Въведи цена...'
				/>

				<button type='submit' className='edit-btn'>
					Запази промените
				</button>
			</form>
		</section>
	);
}

export default EditCard;
