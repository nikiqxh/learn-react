import "./styles/App.css";
import PostList from "./components/PostList";
import { useState } from "react";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/mymodal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "BJavascript", body: "ADescription" },
    { id: 2, title: "AJavascript 2", body: "BDescription 2" },
    { id: 3, title: "Javascript 3", body: "Description 3" },
    { id: 4, title: "Javascript 4", body: "Description 4" },
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);



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
        <MyButton style={{dispay: 'flex', justifyContent: 'flex-end'}}>X</MyButton>
        <PostForm create={createPost}/>
      </MyModal>

      <PostList
        posts={sortedAndSearchedPosts}
        remove={removePost}
        title="Список постов 1"
       />
    
    </div>
  );
}

export default App;
