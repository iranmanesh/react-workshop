import React from 'react';

class PostForm extends React.Component{

    nameRef=React.createRef();
    likesRef=React.createRef();
    imgRef=React.createRef();
    captionRef=React.createRef();

    addPost=(event)=>{
        event.preventDefault();

        const Post={
            name:this.nameRef.current.value,
            likes:this.likesRef.current.value,
            img:this.imgRef.current.value,
            caption:this.captionRef.current.value
        }

        this.props.addPost(Post);
    }


    render(){
        return (
            <form action="" onSubmit={this.addPost}>
                <input ref={this.nameRef} type="text" name='name'/>
                <input ref={this.likesRef} type="text" name='likes'/>
                <input ref={this.imgRef} type="text" name='img'/>
                <input ref={this.captionRef} type="text" name='caption'/>
                <button type='submit'>+ Add Post</button>
            </form>
        );
    }
}

export default PostForm;