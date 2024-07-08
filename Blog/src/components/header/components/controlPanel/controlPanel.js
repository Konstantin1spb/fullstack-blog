import { Link, useNavigate } from 'react-router-dom';
import { Icon, Button } from '../../../index';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserLogin, selectUserRole } from '../../../../selectors';
import { ROLE } from '../../../../constants/role';
import { logout } from '../../../../actions';
import { checkAccess } from '../../../../utils/checkAccess';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLogoutContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 18px;
	font-weight: bold;
	i {
		margin-left: 8px;
	}
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
		navigate('/');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);
	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<StyledLogoutContainer>
						<div>{login}</div>
						<Icon id="fa-sign-out" size="24px" onClick={onLogout} />
					</StyledLogoutContainer>
				)}
			</RightAligned>
			<RightAligned>
				<Icon
					id="fa-backward"
					size="24px"
					margin="10px 0 0 0"
					onClick={() => navigate(-1)}
				/>
				{isAdmin && (
					<>
						<Link to="/post">
							<Icon
								id="fa-file-text-o"
								size="24px"
								margin="10px 0 0 16px"
							/>
						</Link>
						<Link to="/users">
							<Icon id="fa-users" size="24px" margin="10px 0 0 16px" />
						</Link>
					</>
				)}
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
