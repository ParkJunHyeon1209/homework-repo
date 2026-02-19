import React from "react";
import { GlobalStyle } from "./styles/Global";
import HomePage from "./components/Pages/HomePage";
import { Routes, Route, useParams } from "react-router-dom";
import PostsPage from "./components/Pages/PostsPage";
import styled from "@emotion/styled";
import Post1 from "./components/Post1";
import Post2 from "./components/Post2";
import Post3 from "./components/Post3";

const MainLayOut = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function PostDetail() {
  const { id } = useParams();

  if (id === "1") return <Post1 />;
  else if (id === "2") return <Post2 />;
  else if (id === "3") return <Post3 />;
}

export default function App() {
  return (
    <>
      <GlobalStyle />
      <MainLayOut>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </MainLayOut>
    </>
  );
}
