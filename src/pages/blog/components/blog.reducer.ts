import { initalPostList } from './../../../constants/blog'
import { Post } from './../../../types/blog.type'
import { createReducer, createAction } from '@reduxjs/toolkit'

interface BlogState {
  postList: Post[]
}
const initialState = {
  postList: initalPostList
}
export const addPost = createAction<Post>('blog/addPost')
const blogReducer = createReducer(initialState, (builder) => {})

export default blogReducer
