import React from "react"
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder='Search'
            />
            <MySelect
                value={filter.sort}
                onChange={selectSort => setFilter({ ...filter, sort: selectSort })}
                defaultValue='Sorting'
                options={[
                    { value: 'title', name: 'By title' },
                    { value: 'body', name: 'By description' }
                ]}
            />
        </div>
    )
}

export default PostFilter;