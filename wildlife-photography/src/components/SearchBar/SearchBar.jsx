import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, onReset }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		onSearch(searchTerm);
	};

	const handleReset = () => {
		setSearchTerm('');
		onReset();
	};

	return (
		<div className='search'>
			<form className='search-form' onSubmit={handleSubmit}>
				<input
					className='input-field'
					type='text'
					value={searchTerm}
					onChange={handleChange}
					placeholder='Търсене...'
				/>
				<button className='search-button' type='submit'>
					Търсене
				</button>
			</form>
			<p className='show-all' onClick={handleReset}>
				Покажи всички обяви
			</p>
		</div>
	);
}

export default SearchBar;
