import "./styles/App.css";
import PostList from "./components/PostList";
import { useEffect, useState } from "react";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/mymodal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import axios from 'axios';
import PostService from "./API/PostService";
import Loader from "./UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";


function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
    const posts = await PostService.getAll();
    setPosts(posts)
  })
  



  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };


  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать постт</MyButton>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
       />

      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <MyButton 
          style={{dispay: 'flex', justifyContent: 'flex-end'}}
          onClick={() => setModal(false)}
        >X</MyButton>

        <PostForm create={createPost}/>
      </MyModal>
      {postError && 
        <h1>Ошибка: {postError}</h1>}
        
      {isPostLoading
        ? <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '50'}}><Loader /></h1>
        : <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Список постов "
      />}
    
    </div>
  );
}

export default App;
