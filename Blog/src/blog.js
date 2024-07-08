import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { Routes, Route } from 'react-router-dom';
import { ERROR } from './constants';
import { Error, Header, Footer, Modal } from './components';
import { Authorization, Main, Post, Registration, Users } from './pages';
import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: #fff;
	margin: auto;
`;

const Page = styled.div`
	padding: 120px 0 50px 0;
`;

const Blog = () => {
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);
	return (
		<>
			<AppColumn>
				<Header></Header>
				<Page>
					<Routes>
						<Route path="/" element={<Main />}></Route>
						<Route path="/login" element={<Authorization />}></Route>
						<Route path="/register" element={<Registration />}></Route>
						<Route path="/users" element={<Users />}></Route>
						<Route path="/post" element={<Post />}></Route>
						<Route path="/post/:id" element={<Post />}></Route>
						<Route path="/post/:id/edit" element={<Post />}></Route>
						<Route
							path="*"
							element={<Error error={ERROR.PAGE_NOT_EXIST} />}
						></Route>
					</Routes>
				</Page>
				<Footer></Footer>
			</AppColumn>
			<Modal></Modal>
		</>
	);
};

export default Blog;
