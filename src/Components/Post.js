import React from 'react';

class Post extends React.Component{

    render(){
        return (
            <div className='single-post'>
                <img src={this.props.img} />
                <span>{this.props.likes}</span>|
                <span>{this.props.name}</span>|
                <span>{this.props.caption}</span>
            </div>
        )
    }
}

export default Post;