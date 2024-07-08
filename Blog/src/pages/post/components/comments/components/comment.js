import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, CLOSE_MODAL, removeCommentAsync } from '../../../../../actions';
import { Icon } from '../../../../../components';
import { selectUserRole } from '../../../../../selectors';
import { ROLE } from '../../../../../constants';
import styled from 'styled-components';

const CommentContainer = ({ className, postId, id, author, publishedAt, content }) => {
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onCommentRemove = (id, postId) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(id, postId));
					dispatch(CLOSE_MODAL);
					document.body.style.overflow = '';
				},
				onCancel: () => {
					dispatch(CLOSE_MODAL);
					document.body.style.overflow = '';
				},
			}),
		);
		document.body.style.overflow = 'hidden';
	};

	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon id="fa-user-circle-o" size="20px" nopointer={true} />
						{author}
					</div>
					<div className="published-at">
						<Icon id="fa-calendar-o" size="18px" nopointer={true} />
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{isAdminOrModerator && (
				<Icon
					id="fa-trash-o"
					size="23px"
					margin="0 0 0 10px"
					height="23px"
					onClick={() => onCommentRemove(id, postId)}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 15px;

	.comment {
		width: 552px;
		border: 1.5px solid #000;
		border-radius: 2px;
		padding: 4px 10px;
	}

	.information-panel {
		display: flex;
		justify-content: space-between;
	}

	.author,
	.published-at {
		display: flex;
		align-items: center;
		gap: 7px;
	}

	.comment-text {
		font-size: 18px;
		margin: 4px 0;
	}
`;

Comment.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};
