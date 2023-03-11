import React from 'react';
import PostList from './PostList';

export default function PostDetail({ match }) {
  return (
    <>
      {
        match.params.id ? <h1>Post Detail : {match.params.id}</h1> : <PostList/>
      }
    </>
  )
}
  