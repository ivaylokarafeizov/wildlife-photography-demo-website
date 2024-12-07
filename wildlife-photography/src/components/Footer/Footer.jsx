import './Footer.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/8653130.png';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				<p className='title'>Wildlife photography</p>
				<img className='logo' src={logo} alt='logo' />
				<nav className='footer-nav'>
					<ul className='footer-links'>
						<li>
							<NavLink to='/'>Начало</NavLink>
						</li>
						<li>
							<NavLink to='/about'>За нас</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>Контакти</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<div className='footer-bottom'>
				<p>© 2024 Wildlife photography. Всички права запазени</p>
			</div>
		</footer>
	);
}

export default Footer;
