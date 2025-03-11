import  './styles/App.css'
import PostList from "./components/PostList";
import { useRef, useState } from "react";
import MyButton from './UI/button/MyButton';
import MyInput from  './UI/myInput/MyInput';

function App() {


  const [posts, setPosts] = useState(
    [
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description 2'},
        {id: 3, title: 'Javascript 3', body: 'Description 3'},
        {id: 4, title: 'Javascript 4', body: 'Description 4'}
    ] 
) 

  const [post, setPost] = useState({title: '', body: ''})


  const addNewPost = (e) => {

    e.preventDefault()


    setPosts([...posts, {...post, id: Date.now()}])

  }


  return (
    <div className="App">
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
      <PostList posts={posts} title='Список постов 1' />
    </div>
  );
}

export default App;
