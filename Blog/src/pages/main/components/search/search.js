import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<div className="search-controls">
				<Input
					value={searchPhrase}
					width="335px"
					placeholder="Поиск..."
					onChange={onChange}
				/>
				<Icon id="fa-search" size="20px" nopointer={true} />
			</div>
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
	z-index: 1;

	.search-controls {
		position: relative;
	}

	input {
		padding-right: 35px;
	}

	i {
		position: absolute;
		top: 10px;
		right: 10px;
		background-color: #fff;
		color: #737373;
	}
`;

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
