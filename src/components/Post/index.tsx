import React from 'react';
import {useHistory} from "react-router-dom";
import '../Post/post.css'
import {PostsProps} from "../../types";
import Button from "../Button";

const Post:React.FC<PostsProps> = ({posts}) => {
  const router = useHistory()
  return (
    <div className="container">
      {posts.map(post => {
        return <div
          key={post.id}
          className="post"
        >
          <div className='post__content'>
            <h1>Title: {post.title}</h1>
            <span>Description: {post.body}</span>
            <div className='post__btn_wrapper'>
              <Button onClickHandler={()=> router.push(`/posts/${post.id}`)} >
                Full version
              </Button>
            </div>
          </div>
        </div>
      })}
    </div>
  );
};

export default Post;