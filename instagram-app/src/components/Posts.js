import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import CommentSection from './CommentSection/CommentSection';
import './Post.css'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }
    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    };

    render() {
        return (
            <div className="post-border">
                <PostHeader
                    username={this.props.post.username}
                    thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <div className="post-pic-space">
                    <img
                        alt="post thumbnail"
                        className="post-image"
                        src={this.props.post.imageUrl}

                    />
                </div>
                <CommentSection comments={this.props.post.comments} />
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

// ToDo: Refactor to use likes?
export default Post;