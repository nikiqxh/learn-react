import React from 'react'
import MySelect from '../UI/myselect/MySelect'
import MyInput from '../UI/myInput/MyInput'


const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        
        <MyInput
            placeholder="Поиск..."
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
        />

        <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Сортировка по"
            options={[
            { value: "title", name: "Названию" },
            { value: "body", name: "Описанию" },
            ]}
      />

    </div>
  )
}

export default PostFilter
