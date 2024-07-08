import { Logo, ControlPanel } from './components';
import styled from 'styled-components';

const Description = styled.div`
	font-style: italic;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Description>
			Веб-технологии
			<br />
			Написание кода
			<br />
			Разбор ошибок
		</Description>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 -1px 12px black;
	background-color: #fff;
	z-index: 2;
`;
