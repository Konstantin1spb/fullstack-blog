import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
	return <input className={className} {...props} ref={ref}></input>;
});

export const Input = styled(InputContainer)`
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
	height: 40px;
	padding: 5px 10px;
	border: 1px solid #000;
	border-radius: 2px;
`;

Input.propTypes = {
	width: PropTypes.string,
};
