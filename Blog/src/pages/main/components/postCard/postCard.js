import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title}></img>
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon id="fa-calendar-o" size="18px" nopointer={true} />
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon id="fa-comment-o" size="18px" nopointer={true} />
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	width: 280px;

	h4 {
		margin: 0 0 5px 0;
	}

	img {
		max-width: 280px;
		max-height: 150px;
	}

	.post-card-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.published-at,
	.comments-count {
		display: flex;
		align-items: center;
		gap: 7px;
	}
`;

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
