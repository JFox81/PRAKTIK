import styled from 'styled-components';

// Создаем простые компоненты без styled-components
const Logo = () => (
	<div style={{ display: 'flex', alignItems: 'center' }}>
		<i
			className="fa fa-code"
			style={{ fontSize: '30px', marginRight: '10px' }}
		></i>
		<div>
			<div style={{ fontSize: '24px', fontWeight: 'bold' }}>Блог</div>
			<div style={{ fontSize: '14px', color: '#666' }}>
				веб-разработчика
			</div>
		</div>
	</div>
);

const ControlPanel = () => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
		<button
			style={{
				padding: '8px 16px',
				backgroundColor: '#007bff',
				color: 'white',
				border: 'none',
				borderRadius: '4px',
				cursor: 'pointer',
			}}
		>
			Войти
		</button>
		<button
			style={{
				padding: '8px 16px',
				backgroundColor: '#007bff',
				color: 'white',
				border: 'none',
				borderRadius: '4px',
				cursor: 'pointer',
			}}
		>
			Кнопка 2
		</button>
	</div>
);

const Discription = styled.div`
	font-style: italic;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Discription>
			Веб-технологии
			<br />
			написание кода
			<br />
			разбор ошибок
		</Discription>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	background-color: #fff;
	box-shadow: 0px -2px 17px #000;
`;
