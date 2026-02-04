import Post from "./components/Post";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <>
      <ProfileCard name="박준현" age={27} job="백수" />
      <Post
        author="박준현"
        content="리액트 재밌다 힘들다 하기싫다 즐겁다 이 중 진심의 갯수는?"
      />
      <Post author="익명" content="리액트 리액트 리액트 리액트 리액트" />
    </>
  );
}
