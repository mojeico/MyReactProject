import React, {Component} from "react";

import classes from './Post.module.css'


const Post = () => {


        return (
            <div className={classes.Item}>
                <img src='https://www.meme-arsenal.com/memes/de142ca54112d6c1d5b101e3901306bf.jpg'/>
                <p>message is {this.props.message} by {this.props.account} with {this.props.likeCount} likes</p>
                <div>
                    <button>Like</button>
                </div>


            </div>
        )
            ;

}


export default Post
