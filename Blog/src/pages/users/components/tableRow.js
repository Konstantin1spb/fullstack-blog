import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableRowContainer = ({ className, children }) => (
	<div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	font-size: 18px;
	border: ${({ border }) => (border ? `1.5px solid #000` : '')};

	div {
		padding: 0 10px;
	}

	.login-column {
		width: 172px;
	}

	.registered-at-column {
		width: 213px;
	}

	.role-column {
		display: flex;
	}
`;

TableRow.propTypes = {
	children: PropTypes.node.isRequired,
};
