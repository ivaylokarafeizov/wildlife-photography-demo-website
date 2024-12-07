import { useCardsContext } from '../../contexts/CardsContext';
import { useForm } from '../../hooks/useForm';
import './CreateCard.css';
import { v4 as uuid } from 'uuid';

function CreateCard() {
	const _id = uuid();
	const { onCreateCardSubmit } = useCardsContext();
	const { values, changeHandler, onSubmit } = useForm(
		{
			name: '',
			location: '',
			title: '',
			imageUrl: '',
			_ownerId: JSON.parse(localStorage.getItem('auth'))._id,
			_id,
			price: '',
		},
		onCreateCardSubmit
	);

	return (
		<section id='create-page'>
			<form id='create-form' method='post' onSubmit={onSubmit}>
				<h3 className='create-h3'>Обява</h3>

				<label htmlFor='name' className='create-label'>
					Име:
				</label>
				<input
					className='create-input'
					value={values.name}
					onChange={changeHandler}
					type='text'
					id='name'
					name='name'
					placeholder='Въведи име и фамилия...'
				/>

				<label htmlFor='location' className='create-label'>
					Локация:
				</label>
				<input
					className='create-input'
					value={values.location}
					onChange={changeHandler}
					type='text'
					id='location'
					name='location'
					placeholder='Въведи локация...'
				/>

				<label htmlFor='title' className='create-label'>
					Заглавие:
				</label>
				<input
					className='create-input'
					value={values.title}
					onChange={changeHandler}
					type='text'
					id='title'
					name='title'
					placeholder='Въведи заглавие...'
				/>

				<label htmlFor='imageUrl' className='create-label'>
					Изображение:
				</label>
				<input
					className='create-input'
					value={values.imageUrl}
					onChange={changeHandler}
					type='text'
					id='imageUrl'
					name='imageUrl'
					placeholder='Въведи адрес на изображението...'
				/>

				<label htmlFor='price' className='create-label'>
					Цена:
				</label>
				<input
					className='create-input'
					value={values.price}
					onChange={changeHandler}
					type='text'
					id='price'
					name='price'
					placeholder='Въведи цена...'
				/>

				<button
					type='submit'
					value='Create Card'
					className='create-btn'
				>
					Създаване на обява
				</button>
			</form>
		</section>
	);
}

export default CreateCard;
