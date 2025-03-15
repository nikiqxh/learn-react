import  './styles/App.css'
import PostList from "./components/PostList";
import { useRef, useState } from "react";
import PostForm from './components/PostForm';

function App() {


  const [posts, setPosts] = useState(
    [
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description 2'},
        {id: 3, title: 'Javascript 3', body: 'Description 3'},
        {id: 4, title: 'Javascript 4', body: 'Description 4'}
    ] 
) 


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">

      <PostForm create={createPost} />
      
      {posts.length !== 0
        ? <PostList posts={posts} remove={removePost} title='Список постов 1' />
        : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
      }
      
    </div>
  );
}

export default App;
