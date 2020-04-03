import React, {Component} from 'react';
import { connect } from 'react-redux';
import { handleAction } from '../Redux/Actions/DataAction';

class Post extends Component {
    componentDidMount() {
        this.props.handleAction();
    }

    render() {
        const getData = this.props.posts.map(post => {
            return <div key={post.id}>
                       <h1>{post.title}</h1>
                       <p>{post.body}</p> 
                   </div>
        });
        return (
            <div>
                { getData }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps, { handleAction })(Post);