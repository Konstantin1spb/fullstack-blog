import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconContainer = ({ className, id, ...props }) => (
	<div className={className} {...props}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size }) => size};
	margin: ${({ margin }) => margin};
	line-height: ${({ lineheight }) => lineheight};
	height: ${({ height }) => height};
	color: ${({ disabled }) => (disabled ? '#ccc;' : '#000;')};
	cursor: ${({ disabled }) => (disabled ? 'default;' : 'pointer;')};
	cursor: ${({ nopointer }) => (nopointer ? 'default;' : 'pointer;')};
`;

Icon.propTypes = {
	id: PropTypes.string.isRequired,
};
