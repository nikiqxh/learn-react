import "../styles/App.css";
import PostList from "../components/PostList";
import { useEffect, useRef, useState } from "react";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../UI/mymodal/MyModal";
import MyButton from "../UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../UI/pagination/pagination";
import { useObserver } from "../hooks/useObserver";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();


  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });


  const changePage = (page) => {
    setPage(page)
  }

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1)
  })


  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <PostFilter filter={filter} setFilter={setFilter} />

      <MyModal visible={modal} setVisible={setModal}>
        <MyButton
          style={{ display: "flex", justifyContent: "flex-end" }}
          onClick={() => setModal(false)}
        >
          X
        </MyButton>

        <PostForm create={createPost} />
      </MyModal>
      {postError && <h1>Ошибка: {postError}</h1>}

      {isPostLoading && 
        <h1 style={{ display: "flex", justifyContent: "center", marginTop: "50" }}><Loader /></h1>
      }

      <PostList
        posts={sortedAndSearchedPosts}
        remove={removePost}
        title="Список постов "
      />
      <div ref={lastElement} style={{height: 20, backgroundColor: 'red'}}></div>

      <Pagination
        page={page}
        totalPages={totalPages}
        changePage={changePage}
      
      />
    </div>
  );
}

export default Posts;
