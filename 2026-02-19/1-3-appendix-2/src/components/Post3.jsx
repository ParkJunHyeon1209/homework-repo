import React from "react";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";

const Post = styled.div`
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #d429ff;
  border-radius: 16px;
  color: white;
  > h2 {
    font-size: 2rem;
  }
  > button {
    padding: 8px 12px;
    color: white;
    background-color: #460c65;
    border-radius: 12px;
  }
`;
const Badge = styled.div`
  width: 40%;
  padding: 8px 12px;
  border: 1px solid;
  border-radius: 8px;
`;

export default function Post3() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Post>
      <Badge>Post Id : {id}</Badge>
      <h2>Router 포기하고 싶다</h2>
      <p>아직도 페이지 이동은 너무 어려워요</p>
      <button type="button" onClick={() => navigate(-1)}>
        목록으로 돌아가기
      </button>
    </Post>
  );
}
