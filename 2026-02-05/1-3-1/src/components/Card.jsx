import { useState } from "react";

export default function Card() {
  const [likes, setLikes] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const cardStyle = {
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setLikes((prev) => prev + 1);
  };

  return (
    <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className="card" style={cardStyle}>
        <div className="front">
          <h2 className="name">박준현</h2>
          <p className="job">FrontDeveloper</p>
          <button className="heart-btn" onClick={handleLike}>
            ❤️ {likes}
          </button>
        </div>
        <div className="back">
          <h2>My Skills</h2>
          <ul className="skill-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>
              <button className="heart-btn" onClick={handleLike}>
                ❤️ {likes}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
