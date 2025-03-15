import React from 'react';
import { useRef, useState } from "react";
import MyButton from '../UI/button/MyButton';
import MyInput from  '../UI/myInput/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
         ...post,  id: Date.now(),

        }

        create(newPost)
    }

    
    
  return (
    <form>
      <MyInput
        type='text' 
        placeholder='Создание поста'
        onChange={e => setPost({...post, title: e.target.value})}

       />
      <MyInput
        type='text' 
        placeholder='Описание поста'
        onChange={e => setPost({...post, body: e.target.value})}

       />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}

export default PostForm
