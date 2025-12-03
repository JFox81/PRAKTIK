import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import styled from 'styled-components';

const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	min-height: 100vh;
	padding: 20px 0;
`;

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	-webkit-box-pack: justify;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	margin: 0 auto;
`;

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;

const Footer = ({ className }) => <footer className={className}>Футер</footer>;

const StyledFooter = styled(Footer)`
	height: 60px;
	background-color: #f8f9fa;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid #e9ecef;
`;

export const Blog = () => {
	return (
		<AppContainer>
			<AppColumn>
				<Header />
				<Content>
					<H2>Контент страницы</H2>
					<Routes>
						<Route
							path="/"
							element={<div>Главная страница </div>}
						/>
						<Route path="/login" element={<div>Авторизация</div>} />
						<Route
							path="/register"
							element={<div>Регистрация</div>}
						/>
						<Route
							path="/users"
							element={<div>Пользователи</div>}
						/>
						<Route path="/post" element={<div>Новая статья</div>} />
						<Route
							path="/post/ :postId"
							element={<div>Статья</div>}
						/>
						<Route path="*" element={<div>Ошибка</div>} />
					</Routes>
				</Content>
				<StyledFooter />
			</AppColumn>
		</AppContainer>
	);
};
