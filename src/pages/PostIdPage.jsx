import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
      const response = await PostService.getById(id)
      setPost(response.data)
    })

    const [fetchComments, isCommLoading, commError] = useFetching(async (id) => {
      const response = await PostService.getCommentsById(id)
      setComments(response.data)
    })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div>
      <h1>Page ID - {params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }

      <h1>Комментарии</h1>

      {isCommLoading
        ? <Loader />
        : <div>
          {comments.map(comm => 
            <div key={comm.id}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          )}
          
          </div>
        }
    </div>
  )
}

export default PostIdPage
