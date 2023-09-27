/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";
import PostList from "../Components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPosts } from "../state/postSlice";
import Loading from "../Components/Loading";

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const deleteRecord = useCallback((id) => dispatch(deletePost(id)[dispatch]));
  
  return (
    <Loading loading={loading} error={error}>
      <PostList data={records} deleteRecord={deleteRecord}/>
    </Loading>
  );
};

export default Index;
