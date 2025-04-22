import React from 'react'
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center" }}>
        Посты не найдены
      </h1>)
  }

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>
            {title}
        </h1>

        {posts.map((post, index) => 
        <PostItem

            post={post}
            key={post.id}
            number={index + 1}
            title={post.title}
            body={post.body}
            remove={remove}
        />
      )}
    </div>
  )
}

export default PostList
