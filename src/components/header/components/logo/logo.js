import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IconContainer = ({ className }) => (
	<div className={className}>
		<i className="fa fa-code" aria-hidden="true"></i>
	</div>
);

const Icon = styled(IconContainer)`
	font-size: 70px;
	margin-right: 10px;
`;

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;
	margin-top: 17px;
`;

const SmallText = styled.div`
	font-size: 18px;
	color: #666;
`;

const LogoConteiner = ({ className }) => (
	<Link className={className} to="/">
		<Icon />
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>веб-разработчика</SmallText>
		</div>
	</Link>
);

export const Logo = styled(LogoConteiner)`
	display: flex;
	margin-top: -21px;
`;
