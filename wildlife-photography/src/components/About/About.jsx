import './About.css';

function About() {
	return (
		<div class='about-container'>
			<header class='about-header'>
				<h1>За нас</h1>
				<p>Научете повече за това кои сме и какво правим.</p>
			</header>

			<section class='about-content'>
				<img
					src='https://media.istockphoto.com/id/1350474131/photo/business-team-portrait.jpg?s=612x612&w=0&k=20&c=_rwVn8lkmzXc-_Q5tSyH-Jt0tt_acwxvXVYCckg8v0M='
					alt='About Us Image'
					class='about-image'
				/>
				<div class='about-text'>
					<h2>Нашата мисия</h2>
					<p>
						Нашата мисия е да предоставяме висококачествени продукти
						и услуги, които носят стойност на нашите клиенти.
						Вярваме в иновациите, почтеността и поставянето на
						хората на първо място. Работим усилено, за да отговорим
						на нуждите на нашите клиенти, като същевременно
						гарантираме устойчивост и социална отговорност.
					</p>

					<h2>Защо да изберете нас?</h2>
					<ul>
						<li>Отдадени на качеството</li>
						<li>Клиентоориентиран подход</li>
						<li>Иновативни решения</li>
						<li>Опитен и отдаден екип</li>
					</ul>
				</div>
			</section>
		</div>
	);
}

export default About;
