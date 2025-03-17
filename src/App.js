import "./styles/App.css";
import PostList from "./components/PostList";
import { useMemo, useRef, useState } from "react";
import PostForm from "./components/PostForm";
import MySelect from "./UI/myselect/MySelect";
import MyInput from "./UI/myInput/MyInput";

function App() {
  const [selectedSort, setSelectedSort] = useState("");

  const [posts, setPosts] = useState([
    { id: 1, title: "BJavascript", body: "ADescription" },
    { id: 2, title: "AJavascript 2", body: "BDescription 2" },
    { id: 3, title: "Javascript 3", body: "Description 3" },
    { id: 4, title: "Javascript 4", body: "Description 4" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("zzzzzz");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.includes(searchQuery));
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "Названию" },
          { value: "body", name: "Описанию" },
        ]}
      />
      <MyInput
        placeholder="Поиск..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {posts.length !== 0 ? (
        <PostList
          posts={sortedAndSearchedPosts}
          remove={removePost}
          title="Список постов 1"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
