import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/mindmap.css"; // 애니메이션용 CSS 임포트

const categories = [
  { id: 1, name: "전체 글", path: "/main" },
  { id: 2, name: "인기 글", path: "/popular" },
  { id: 3, name: "내가 쓴 글", path: "/myposts" },
  { id: 4, name: "스크랩한 글", path: "/bookmarks" },
  { id: 5, name: "글쓰기", path: "/write" },
];

const MindMap = () => {
  const navigate = useNavigate();

  return (
    <svg
      width="600"
      height="250"
      style={{ border: "1px solid #ccc", backgroundColor: "#f0f4f8" }}
      viewBox="0 0 600 250"
    >
      {/* 연결선 (간단한 예) */}
      {categories.map((cat, i) => {
        if (i === 0) return null;
        return (
          <line
            key={"line-" + i}
            x1={100 + (i - 1) * 110}
            y1={125}
            x2={100 + i * 110}
            y2={125}
            stroke="#4a90e2"
            strokeWidth="2"
            className="line-anim"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        );
      })}

      {/* 노드 */}
      {categories.map((cat, i) => (
        <g
          key={cat.id}
          className="mindmap-node"
          onClick={() => navigate(cat.path)}
          style={{ cursor: "pointer" }}
          transform={`translate(${100 + i * 110}, 125)`}
        >
          <circle
            r="30"
            fill="#4a90e2"
            stroke="#155dff"
            strokeWidth="3"
            className="circle-anim"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
          <text
            y="6"
            textAnchor="middle"
            fill="white"
            fontWeight="600"
            fontSize="14"
            pointerEvents="none"
          >
            {cat.name}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default MindMap;
