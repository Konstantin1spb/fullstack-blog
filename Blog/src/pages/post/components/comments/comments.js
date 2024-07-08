import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '../../../../components';
import { Comment } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../../selectors';
import { PROP_TYPE, ROLE } from '../../../../constants';
import { addCommentAsync } from '../../../../actions';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState();
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (postId, content) => {
		if (!content) {
			return;
		}
		dispatch(addCommentAsync(postId, content));
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;
	return (
		postId && (
			<div className={className}>
				{!isGuest && (
					<div className="new-comment">
						<textarea
							name="comment"
							value={newComment}
							placeholder="Комментарий..."
							onChange={({ target }) => setNewComment(target.value)}
						></textarea>
						<Icon
							id="fa-paper-plane-o"
							size="18px"
							margin="0 0 0 10px"
							height="18px"
							onClick={() => onNewCommentAdd(postId, newComment)}
						/>
					</div>
				)}

				<div className="comments">
					{comments.map(({ id, author, publishedAt, content }) => (
						<Comment
							key={id}
							postId={postId}
							id={id}
							author={author}
							publishedAt={publishedAt}
							content={content}
						/>
					))}
				</div>
			</div>
		)
	);
};

export const Comments = styled(CommentsContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 580px;
	margin: 30px auto;

	.new-comment {
		display: flex;
		width: 100%;
		justify-content: center;
	}

	textarea {
		width: 100%;
		height: 120px;
		resize: none;
		border: 1.5px solid #000;
		border-radius: 2px;
	}
`;

Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
	postId: PropTypes.string.isRequired,
};
