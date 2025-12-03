import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../icon/icon';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	font-size: 18px;
	width: 100px;
	height: 32px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #343a40;
	border-radius: 4px;
	color: inherit;
	background-color: #eee;
`;

const StyledButton = styled.div`
	&:hover {
	cursor: pointer

const ControlPanelContainer = ({ className }) => {
	const navigste = useNavigate ();
	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAligned>
			<RightAligned>
				<div onClick={() => navigste(-1)}></div>
				   <Icon id="fa fa-backward" margin="10px 0 0 10px" />
				</div>

				<Link to="/post">
					<Icon
						iconClassName="fa fa-file-text-o"
						margin="10px 0 0 16px"
					/>
				</Link>
				<Link>
					<Icon iconClassName="fa fa-users" margin="10px 0 0 16px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
