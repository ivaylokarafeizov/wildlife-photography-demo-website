import './Login.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

const LoginFormKeys = {
	email: 'email',
	password: 'password',
};

export default function Login() {
	const { onLoginSubmit } = useAuthContext();
	const { values, changeHandler, onSubmit } = useForm(
		{
			[LoginFormKeys.email]: '',
			[LoginFormKeys.password]: '',
		},
		onLoginSubmit
	);

	return (
		<section className='login-section'>
			<form
				className='login-form'
				id='login'
				method='POST'
				onSubmit={onSubmit}
			>
				<h3 className='login-h3'>Вход</h3>
				<label className='login-label' htmlFor='email'>
					Имейл
				</label>
				<input
					className='login-input'
					type='email'
					id='email'
					placeholder='bruceWayne@abv.bg'
					name={LoginFormKeys.email}
					value={values[LoginFormKeys.email]}
					onChange={changeHandler}
				/>
				<label className='login-label' htmlFor='password'>
					Парола
				</label>
				<input
					className='login-input'
					type='password'
					placeholder='********'
					id='password'
					name={LoginFormKeys.password}
					value={values[LoginFormKeys.password]}
					onChange={changeHandler}
				/>
				<button className='login-btn' type='submit' value='Login'>
					Продължи
				</button>
				<div className='login-actions'>
					<Link className='login-create-acc' to='/register'>
						Създай профил
					</Link>
					<Link className='login-home' to='/'>
						Начало
					</Link>
				</div>
			</form>
		</section>
	);
}
