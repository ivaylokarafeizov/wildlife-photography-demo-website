import './Contact.css';

function Contact() {
	const handleSubmit = () => {
		return alert('Формата за контакт е изпратена успешно!');
	};

	return (
		<div class='contact-container'>
			<header class='contact-header'>
				<h1>Свържете се с нас</h1>
				<p>Свържете се с нас чрез формата или ни посетете.</p>
			</header>

			<section class='contact-content'>
				<div class='contact-form'>
					<h2>Форма за контакт</h2>
					<form action='#' method='post'>
						<div class='form-group'>
							<label for='name'>Име и фамилия:</label>
							<input type='text' id='name' name='name' required />
						</div>
						<div class='form-group'>
							<label for='email'>Имейл:</label>
							<input
								type='email'
								id='email'
								name='email'
								required
							/>
						</div>
						<div class='form-group'>
							<label for='message'>Съобщение:</label>
							<textarea
								id='message'
								name='message'
								rows='5'
								required
							></textarea>
						</div>
						<button onClick={handleSubmit} class='submit-button'>
							Изпращане
						</button>
					</form>
				</div>

				<div class='contact-map'>
					<h2>Нашият адрес</h2>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10541.176289545483!2d25.644401554829578!3d41.47129911868925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad7fd310aa2bd5%3A0xc69d75c3878d5b69!2sKrumovgrad!5e1!3m2!1sen!2sbg!4v1729176409366!5m2!1sen!2sbg'
						allowfullscreen=''
						loading='lazy'
						referrerpolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</section>
		</div>
	);
}

export default Contact;
