import './Header.css';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
	const { isAuthenticated } = useContext(AuthContext);

	return (
		<header className='header'>
			<img className='logo' src={logo} alt='vulture logo' />
			<nav className='navbar'>
				<ul className='nav-links'>
					<li>
						<NavLink to='/'>Начало</NavLink>
					</li>
					<li>
						<NavLink to='/cards'>Обяви</NavLink>
					</li>
					{isAuthenticated ? (
						<>
							<li>
								<NavLink
									to='/create'
									className='createCard-btn'
								>
									Създай обява
								</NavLink>
							</li>
						</>
					) : (
						<></>
					)}
					<li>
						<NavLink to='/cart'>
							<FaShoppingCart />
						</NavLink>
					</li>
					{isAuthenticated ? (
						<>
							<li>
								<NavLink to='/logout' className=' logOut-btn'>
									Изход
								</NavLink>
							</li>
						</>
					) : (
						<li>
							<NavLink to='/login' className='signIn-btn'>
								Вход
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
