import React, { useState, useEffect } from 'react';
import CardsPreview from '../CardsPreview/CardsPreview';
import './Home.css';

function Home() {
	const images = [
		'src/assets/images/DSC4927.jpg',
		'src/assets/images/Studen_kladenetz.jpg',
		'src/assets/images/vultures.jpg',
		'src/assets/images/horses.jpg',
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section id='home'>
			<div className='carousel'>
				<div
					className='carousel-inner'
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{images.map((image, index) => (
						<div className='carousel-item' key={index}>
							<img src={image} alt={`Slide ${index + 1}`} />
						</div>
					))}
				</div>
				<div className='slogan'>
					Родопи: Душата на дивата природа на България
				</div>
				<div className='description'>
					Родопите са прочути със своите спиращи дъха пейзажи и
					богатото биоразнообразие. С живописни долини, гъсти гори и
					уникални скални образувания, те предлагат истински рай за
					любителите на природата и ентусиастите на открито.
				</div>
			</div>
			<CardsPreview />
		</section>
	);
}

export default Home;
