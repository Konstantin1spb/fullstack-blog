import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Icon } from '../../../../components';

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
	return (
		<div className={className}>
			<Button onClick={() => setPage(1)} disabled={page === 1}>
				<Icon id="fa-fast-backward" />
			</Button>
			<Button onClick={() => setPage(page - 1)} disabled={page === 1}>
				<Icon id="fa-chevron-left" />
			</Button>
			<div className="current-page">{page}</div>
			<Button onClick={() => setPage(page + 1)} disabled={page === lastPage}>
				<Icon id="fa-chevron-right" />
			</Button>
			<Button onClick={() => setPage(lastPage)} disabled={page === lastPage}>
				<Icon id="fa-fast-forward" />
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;

	button {
		width: 15px;
		border: none;
		background: none;
	}

	button div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.current-page {
		font-size: 20px;
		font-weight: 600;
	}
`;

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};
