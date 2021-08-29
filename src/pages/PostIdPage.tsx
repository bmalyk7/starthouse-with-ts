import React, {useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/Service";
import {PostContext} from "../context";
import '../styles/main.css'
import Loader from "../components/Loader";
import Error from "../pages/ErrorPage";
import {PostIdProps, Post, Params, Comments} from "../types";

const PostIdPage = ({provideTitle}: PostIdProps) => {
  const {setShow} = useContext(PostContext)
  const params = useParams<Params>()
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comments | null>(null)
  const [fetching, error, isLoading] = useFetching(async () => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })
  const [comFetching, comError, isComLoading] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id)
    setComments(response.data)
  })
  useEffect(() => {
    if(post){
      provideTitle(post.title)
    }
  }, [post])
  useEffect(() => {
    setShow(true)
    fetching(params.id)
    comFetching(params.id)
  }, [])
  if(isLoading || isComLoading){
    return <Loader />
  }
  if(error || comError){
    return <Error msg={error || comError} />
  }
  if(post && comments){
    return(
      <div className="postIdPage">
        <h1>{post.title}</h1>
        <span>{post.body}</span>
        <div>
          <h1>Comments</h1>
          {comments.map((comment, index) => {
            return <div
              key={index}>
              <h5>{comment.name}</h5>
              <span>{comment.body}</span>
            </div>
          })}
        </div>
      </div>
    )
  }
  return null
}
export default PostIdPage