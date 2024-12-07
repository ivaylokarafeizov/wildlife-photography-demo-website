import './Register.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';

export default function Register() {
	const { onRegisterSubmit } = useContext(AuthContext);
	const { values, changeHandler, onSubmit } = useForm(
		{ email: '', username: '', password: '', confirmPassword: '' },
		onRegisterSubmit
	);

	return (
		<section className='register-section'>
			<form
				className='register-form'
				id='register'
				method='post'
				onSubmit={onSubmit}
			>
				<h3 className='register-h3'>Регистрация</h3>
				<label className='register-label' htmlFor='username'>
					Потребителско име
				</label>
				<input
					className='normal register-input'
					type='text'
					id='username'
					name='username'
					placeholder='Bruce Wayne'
					value={values.username}
					onChange={changeHandler}
				/>
				<label className='register-label' htmlFor='email'>
					Имейл
				</label>
				<input
					className='normal register-input'
					type='email'
					id='email'
					name='email'
					placeholder='maria@email.com'
					value={values.email}
					onChange={changeHandler}
				/>
				<div className='double'>
					<div className='inputGroup'>
						<label className='register-label' htmlFor='password'>
							Парола
						</label>
						<input
							className='register-input'
							type='password'
							name='password'
							id='register-password'
							placeholder='***********'
							value={values.password}
							onChange={changeHandler}
						/>
					</div>
					<div className='inputGroup'>
						<label className='register-label' htmlFor='rePass'>
							Повтори парола
						</label>
						<input
							className='register-input'
							type='password'
							name='confirmPassword'
							placeholder='***********'
							id='confirm-password'
							value={values.confirmPassword}
							onChange={changeHandler}
						/>
					</div>
				</div>
				<button className='register-btn' type='submit' value='Register'>
					Продължи
				</button>
				<div className='register-actions'>
					<Link className='register-create-acc' to='/login'>
						Вход
					</Link>
					<Link className='register-home' to='/'>
						Начало
					</Link>
				</div>
			</form>
		</section>
	);
}
