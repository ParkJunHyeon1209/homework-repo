import React from "react";
import styled from "@emotion/styled";
import Post1 from "../Post1";
import Post2 from "../Post2";
import Post3 from "../Post3";
import { Link, useNavigate } from "react-router-dom";

const Posts = styled.div`
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  align-items: center;
  border: 1px solid;
  border-radius: 12px;
  > button {
    padding: 8px 12px;
    border: 1px solid;
    border-radius: 8px;
  }
`;

export default function PostsPage() {
  const navigate = useNavigate();

  const postList = [
    { id: 1, title: "1. 리액트 너무 어렵다" },
    { id: 2, title: "2. SPA라우팅 너무 어렵다" },
    { id: 3, title: "Router 포기하고싶다" },
  ];

  return (
    <Posts>
      {postList.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <div>{post.title}</div>
        </Link>
      ))}

      <button type="button" onClick={() => navigate(-1)}>
        홈으로 가기
      </button>
    </Posts>
  );
}
