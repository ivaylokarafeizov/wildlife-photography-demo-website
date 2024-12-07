import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card(props) {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/details/${props._id}`);
	};

	return (
		<div className='card'>
			<img
				src={props.imageUrl}
				alt={props.title}
				className='card-image'
			/>
			<div className='card-content'>
				<h2 className='card-title'>{props.title}</h2>
				<p className='card-location'>{props.location}</p>
				<h3 className='card-price'>{props.price} лева</h3>
				<button className='card-button' onClick={handleNavigate}>
					Научи повече
				</button>
			</div>
		</div>
	);
}

export default Card;
