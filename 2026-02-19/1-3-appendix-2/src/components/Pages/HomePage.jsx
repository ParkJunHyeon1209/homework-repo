import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Home = styled.div`
  padding: 24px 32px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: #6291ba;
  border-radius: 16px;
  > h1 {
    font-size: 64px;
  }
  > button {
    padding: 12px 24px;
    font-size: 2rem;
    background-color: #de84c9;
    border-radius: 12px;
  }
`;

export default function HomePage() {
  return (
    <Home>
      <h1>미니 블로그 홈</h1>
      <button type="button">
        <NavLink to={"/posts"}>글 목록 보러가기</NavLink>
      </button>
    </Home>
  );
}
