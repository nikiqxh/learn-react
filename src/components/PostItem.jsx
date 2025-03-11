import React from 'react'

const PostItem = (props) => {

  return (
        <div className="post" key={props.key} {...props}>
          <div className="post__content">
            <strong>{props.number} {props.title}</strong>
            <div>
              {props.body}
            </div>
          </div>

          <div className="post__btns">
            <button>Удалить</button>
          </div>
        </div>
  )
}

export default PostItem
