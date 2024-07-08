import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState();
	const [temperature, setTemperature] = useState();
	const [weather, setWeather] = useState();
	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg&units=metric&lang=ru&appid=96e9434d76e3dfe6d446c800b12a8dec',
		)
			.then((loadedData) => loadedData.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<footer className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web-developer@mail.ru</div>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} градусов, {weather}
				</div>
			</div>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 40px;
	height: 120px;
	font-weight: bold;
	box-shadow: 0 1px 12px black;
	background-color: #fff;
`;
