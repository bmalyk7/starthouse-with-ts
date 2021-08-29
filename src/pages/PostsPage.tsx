import React,{useState, useEffect, useContext} from 'react';
import Post from "../components/Post";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/Service";
import {PostContext} from "../context";
import Loader from "../components/Loader";
import Error from "../pages/ErrorPage";
import {PostsType} from "../types";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostsType | null>(null)
  const {setShow} = useContext(PostContext)
  const [fetch, error, isLoading] = useFetching(async () => {
    const response = await PostService.getAll()
    setPosts(response.data)
  })
  useEffect(() => {
    fetch()
    setShow(false)
  }, [])

  if(isLoading){
    return <Loader />
  }
  if(error){
    return <Error msg={error}/>
  }
  if(posts){
    return (
      <div>
        <Post posts={posts} />
      </div>
    );
  }
  return null;
}

export default PostsPage;
