import styled from 'styled-components';

const IconContainer = ({ className, iconClassName }) => (
	<div className={className}>
		<i className={iconClassName} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = '0' }) => margin};
`;
