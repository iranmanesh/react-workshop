import React, {Fragment} from 'react';
import Comment from './Comment'
import Header from "./Components/Header";
import Post from './Components/Post';
import PostForm from "./Components/AddPost";
import {connect} from 'react-redux';
import {addPost} from "./actions/postActions";

class App extends React.Component {

    constructor() {
        super();
    }

    renderPosts() {
        if(this.props.posts.length == 0) return (
            <div>no posts here</div>
        )
           return  this.props.posts.map((post, index) => {
                return (
                    <Post key={index} img={post.img} name={post.name} caption={post.caption} likes={post.likes}/>
                )
            })
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('updated');
    }

    addPost = (post) => {
        console.log('post', post);
        this.props.addPostDispatch(post);
    }

    render() {
        console.log('this.props', this.props);
        return (
            <div>
                <Header/>
                <div className='post-container'>}
                    {this.renderPosts()}
                </div>

                <br/>
                <PostForm addPost={this.addPost}/>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        posts: store.posts
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        addPostDispatch: (post) => {
            Dispatch(addPost(post))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);